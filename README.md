# Diego Jaramillo — Portafolio

Sitio personal. Next.js 16 (App Router), Tailwind CSS v4, TypeScript. Bilingüe
español/inglés con conmutador en la barra superior.

**En vivo:** https://diegojaramillo.netlify.app/

## El diseño: banco óptico

La página está construida como una mesa de laboratorio. Un mensaje entra por la
izquierda, cruza un prisma de vidrio y sale disperso en tres detectores
rotulados — que son las tres cosas que el sistema de Diego de verdad hace:
contestar, agendar, entregarle la conversación a una persona.

**Las seis longitudes de onda son leyenda, no adorno.** Cada color está amarrado
a un significado y no se usa para otra cosa en ningún lado del sitio:

| Color | Token | Significado |
|---|---|---|
| Naranja | `--w-inbound` | Entra: el mensaje y el canal por donde llega |
| Ámbar | `--w-recall` | Recupera: la base de conocimiento |
| Verde | `--w-resolve` | Responde: la respuesta resuelta |
| Cian | `--w-schedule` | Agenda: la cita en calendario |
| Índigo | `--w-handoff` | Humano: el paso al asesor |
| Violeta | `--w-isolate` | Aísla: el tenant y su seguridad |

El camino del mensaje, en «El sistema», recorre las seis etapas en orden: ahí
se aprende la leyenda. Todo lo que no corresponde a una etapa (sistemas
completos, IA y ML, agentes, la mayoría de servicios) lleva **marca neutra**, no
un color prestado. Si agregas algo, tómale el color a su significado o déjalo
neutro; nunca asignes colores por posición en una lista.

**Luz blanca para lo que toca el usuario.** El botón principal (`.cta-light`),
el anillo de foco, el cursor y la selección van en `--ink`: es el haz antes del
prisma. Los seis colores son lo que el sistema hace con esa acción, y no se
prestan para decorar botones.

Otras reglas del sistema:

- **El riel.** Un solo eje vertical gobierna el borde izquierdo de cada sección
  (`.rail`). Todo lo que la página afirma cuelga de ahí.
- **El vidrio necesita algo detrás.** Las placas (`.glass`) llevan desenfoque de
  fondo, canto encendido arriba y un borde que dispersa color sobre el lado
  iluminado. Sin el campo espectral detrás se ven como tarjetas grises: si
  mueves una placa, asegúrate de que quede algo que refractar.
- **Tipografía.** Archivo para rótulos (con el eje de ancho estrechado, clase
  `.engraved`) y cuerpo. Martian Mono (`.measured`) **solo** para valores
  medidos: cifras, dimensiones, conteos.
- **Un solo momento de movimiento.** El haz llega y se dispersa una vez al
  cargar. Todo lo demás responde al usuario. `prefers-reduced-motion` deja todo
  en su estado final.

### Tres trampas de SVG que ya costaron tiempo aquí

Una línea horizontal tiene un *bounding box* de altura cero, y en SVG eso rompe
tres cosas distintas. El haz entrante las pisó todas:

1. `clip-path: inset()` sobre un `<g>` que solo contiene una línea horizontal lo
   borra entero.
2. Un `linearGradient` en `objectBoundingBox` (el valor por defecto) no pinta
   sobre un box degenerado. Por eso el gradiente del haz usa
   `gradientUnits="userSpaceOnUse"`.
3. La región de un `filter` también se calcula sobre ese box, así que un
   `feGaussianBlur` se come el trazo. Por eso el halo del haz es un segundo
   trazo ancho y tenue, no un filtro.

### Y dos de CSS

- `overflow-x: clip` en `body` convierte a un `position: fixed` en un elemento
  anclado al body — la barra superior se iba con el scroll. El desborde
  horizontal se recorta en la sección que lo produce (el héroe), nunca en
  `body`.
- **`-webkit-backdrop-filter` va antes que `backdrop-filter`.** Con el orden
  inverso, Lightning CSS (el procesador de Tailwind v4) emite solo la versión
  con prefijo, Chrome la ignora y el vidrio queda sin desenfoque — sin error
  en ningún lado. Comprobado de forma aislada contra `lightningcss`.

## Estructura

| Archivo | Qué hace |
|---|---|
| `lib/content.ts` | **Todo** el texto, en los dos idiomas. Una sola fuente. |
| `components/LanguageProvider.tsx` | Contexto de idioma + persistencia en `localStorage`. |
| `components/Section.tsx` | Andamio compartido: riel, título, entrada. |
| `app/globals.css` | Tokens, vidrio, riel, animaciones, superficies del navegador. |
| `PRODUCT.md` | Verdad del producto para la skill impeccable: audiencia, hechos, restricciones. |
| `.impeccable/surfaces/` | Contrato de dirección del diseño. Léelo antes de rediseñar. |

Para cambiar un texto, ve a `lib/content.ts` y cámbialo en `es` y en `en`. Los
dos objetos tienen la misma forma, así que TypeScript reclama si olvidas uno.

## Asistente de IA

El widget flotante se carga en todo el sitio desde `app/layout.tsx` con
`next/script`. Lo sirve [IKONICO AI](https://ikonico-ai.pages.dev) y se dibuja
en su propio iframe, así que no toca el DOM ni los estilos de esta página.

**Se va a quitar.** Por eso ningún texto del sitio lo menciona: ni como demo en
vivo ni como canal. Cuando se retire, basta con borrar el `<Script>` de
`app/layout.tsx` y esta sección; no hay copia que dependa de él.

```tsx
<Script
  id="ikonico-chat-script"
  src="https://ikonico-ai.pages.dev/widget.js"
  data-org-id="..."
  strategy="afterInteractive"
/>
```

Dos cosas antes de tocarlo:

- **El `id` no es cosmético.** `widget.js` lee su `data-org-id` de
  `document.currentScript`, que es `null` cuando `next/script` inyecta la
  etiqueta después de hidratar. Entonces cae a `script[data-org-id]` y luego a
  `#ikonico-chat-script`, así que ese id exacto mantiene viva la cadena.
- **El dominio tiene que estar autorizado del lado de IKONICO AI**, tanto en la
  allowlist del backend como en la cabecera `frame-ancestors`. Si el sitio se
  muda de dominio, el chat deja de cargar sin error visible — el navegador
  simplemente se niega a dibujar el iframe. Registra el dominio nuevo antes de
  mudarte.

## Correr local

```bash
npm install
npm run dev
# → http://localhost:3000
```

El formulario de contacto envía a Web3Forms; no hay backend propio.

## Contacto

- Correo: diegojaramillocalderon@gmail.com
- LinkedIn: [in/diegojaramilloo](https://www.linkedin.com/in/diegojaramilloo/)
- GitHub: [dajaramilc](https://github.com/dajaramilc)
