"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

/* Selector propio en lugar de <select>: las opciones desplegadas de un
   select nativo las dibuja el sistema operativo y no aceptan diseño.

   Sigue el patrón "select-only combobox" de WAI-ARIA: el foco se queda en
   el disparador y la opción activa se anuncia con aria-activedescendant.
   Teclado: flechas, Inicio/Fin, Enter o Espacio para elegir, Escape para
   cerrar, Tab para salir.

   Guarda el ÍNDICE elegido, no el texto: así, si el visitante cambia de
   idioma con algo elegido, la opción se traduce en vez de quedar en el
   idioma anterior. */

interface SelectFieldProps {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
  requiredMessage: string;
  disabled?: boolean;
}

export default function SelectField({
  name,
  label,
  placeholder,
  options,
  requiredMessage,
  disabled = false,
}: SelectFieldProps) {
  const uid = useId().replace(/:/g, "");
  const labelId = `${uid}-label`;
  const listId = `${uid}-list`;
  const errorId = `${uid}-error`;
  const optionId = (i: number) => `${uid}-opt-${i}`;

  const [index, setIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [invalid, setInvalid] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const value = index === null ? "" : options[index];
  const last = options.length - 1;

  const openAt = useCallback((i: number) => {
    setActive(i);
    setOpen(true);
  }, []);

  const choose = useCallback((i: number) => {
    setIndex(i);
    setInvalid(false);
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  /* Un toque fuera del selector lo cierra. */
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  /* La opción activa siempre a la vista cuando la lista hace scroll. */
  useEffect(() => {
    if (!open) return;
    document
      .getElementById(`${uid}-opt-${active}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, active, uid]);

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (disabled) return;
    const start = index ?? 0;

    if (!open) {
      if (["ArrowDown", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        openAt(start);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        openAt(index ?? last);
      } else if (event.key === "Home") {
        event.preventDefault();
        openAt(0);
      } else if (event.key === "End") {
        event.preventDefault();
        openAt(last);
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActive((i) => Math.min(i + 1, last));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        setActive(0);
        break;
      case "End":
        event.preventDefault();
        setActive(last);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        choose(active);
        break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <span
        id={labelId}
        className="engraved mb-1.5 block text-[0.78rem]"
        style={{ color: "var(--ink-mute)" }}
      >
        {label}
      </span>

      <div className="relative">
        <div
          ref={triggerRef}
          role="combobox"
          tabIndex={disabled ? -1 : 0}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          aria-activedescendant={open ? optionId(active) : undefined}
          aria-disabled={disabled || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? errorId : undefined}
          data-open={open || undefined}
          data-invalid={invalid || undefined}
          data-disabled={disabled || undefined}
          onClick={() => {
            if (disabled) return;
            if (open) setOpen(false);
            else openAt(index ?? 0);
          }}
          onKeyDown={onKeyDown}
          className="field-input field-select flex cursor-pointer select-none items-center justify-between gap-3"
        >
          <span
            className="truncate"
            style={{ color: value ? "var(--ink)" : "var(--ink-mute)" }}
          >
            {value || placeholder}
          </span>
          <ChevronDown
            size={16}
            aria-hidden
            className="shrink-0 transition-transform duration-200"
            style={{
              color: "var(--ink-mute)",
              transform: open ? "rotate(180deg)" : undefined,
            }}
          />
        </div>

        {/* Lleva el valor al FormData y activa la validación nativa del
            formulario. No puede ser type="hidden" ni readOnly: esos quedan
            fuera de la validación. Invisible y fuera del tabulador; si el
            formulario se envía sin elegir, el aviso sale en nuestro diseño y
            el foco vuelve al selector. */}
        <input
          tabIndex={-1}
          aria-hidden
          name={name}
          value={value}
          required
          onChange={() => {}}
          onInvalid={(event) => {
            event.preventDefault();
            setInvalid(true);
            triggerRef.current?.focus();
          }}
          className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
        />
      </div>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          className="select-panel absolute inset-x-0 top-[calc(100%+6px)] z-30 max-h-[26rem] overflow-y-auto p-1.5"
        >
          {options.map((option, i) => {
            const selected = i === index;
            const isActive = i === active;
            return (
              <li
                key={option}
                id={optionId(i)}
                role="option"
                aria-selected={selected}
                /* Sin esto el clic le quita el foco al disparador. */
                onMouseDown={(event) => event.preventDefault()}
                onPointerMove={() => setActive(i)}
                onClick={() => choose(i)}
                className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[0.9rem] leading-snug transition-colors duration-150"
                style={{
                  background: isActive
                    ? "rgba(238, 242, 251, 0.08)"
                    : "transparent",
                  color: selected || isActive ? "var(--ink)" : "var(--ink-soft)",
                }}
              >
                <span>{option}</span>
                {selected ? (
                  <Check
                    size={15}
                    aria-hidden
                    className="shrink-0"
                    style={{ color: "var(--ink)" }}
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}

      {invalid ? (
        <p
          id={errorId}
          className="mt-1.5 text-[0.8rem]"
          style={{ color: "var(--ink-soft)" }}
        >
          {requiredMessage}
        </p>
      ) : null}
    </div>
  );
}
