"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { content, type Copy, type Lang } from "@/lib/content";

const STORAGE_KEY = "dj-lang";

/* El idioma vive fuera de React: en localStorage, con un respaldo en memoria
   para cuando el almacenamiento está bloqueado (modo privado, cookies
   apagadas). Así el conmutador funciona igual aunque no se pueda guardar. */
let memoryLang: Lang | null = null;
const listeners = new Set<() => void>();

function readStored(): Lang | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "es" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

function getSnapshot(): Lang {
  if (memoryLang) return memoryLang;
  const stored = readStored();
  if (stored) return stored;
  /* Sin preferencia guardada, manda el idioma del navegador. */
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

/* El servidor siempre renderiza en español, así que la hidratación cuadra;
   React cambia al idioma guardado justo después. */
function getServerSnapshot(): Lang {
  return "es";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  /* Otra pestaña cambió el idioma. */
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
}

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    memoryLang = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Sin almacenamiento, el cambio vale solo para esta visita. */
    }
    listeners.forEach((notify) => notify());
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageValue {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLang se usó fuera de LanguageProvider");
  return value;
}
