/**
 * Todo el texto del sitio, en los dos idiomas.
 *
 * Una sola fuente: si una frase existe aqui, existe en es y en en. La forma
 * del objeto es identica en ambos, asi que TypeScript reclama si se agrega
 * algo en un idioma y se olvida el otro.
 */

export type Lang = "es" | "en";

/**
 * Las seis longitudes de onda. Cada una esta amarrada a UN significado en
 * todo el sitio y no se usa para nada mas: el color es leyenda, no adorno.
 */
export const SPECTRUM = {
  inbound: "#FF4D2E", // entra: el mensaje y el canal por donde llega
  recall: "#FFB020", // recupera: la base de conocimiento
  resolve: "#3DDC8A", // responde: la respuesta resuelta
  schedule: "#37D6F0", // agenda: la cita en calendario
  handoff: "#6E7BFF", // humano: el paso al asesor
  isolate: "#B15CFF", // aisla: el tenant y su seguridad
} as const;

export type Wavelength = keyof typeof SPECTRUM;

/** Un valor es medida si empieza con una cifra: 167, 422, 768, "22 may 2026". */
export const isMeasured = (value: string) => /^\d/.test(value);

export const WAVELENGTH_ORDER: Wavelength[] = [
  "inbound",
  "recall",
  "resolve",
  "schedule",
  "handoff",
  "isolate",
];

/** Una fila de la tabla de especificacion de un proyecto. */
export interface SpecRow {
  label: string;
  value: string;
}

export interface ProjectContent {
  id: string;
  name: string;
  kind: string;
  /** null cuando el proyecto no corresponde a ninguna etapa de la leyenda. */
  wavelength: Wavelength | null;
  summary: string;
  problem: string;
  built: string;
  spec: SpecRow[];
  stack: string[];
}

export interface CapabilityGroup {
  wavelength: Wavelength | null;
  title: string;
  items: string[];
}

export interface ServiceItem {
  wavelength: Wavelength | null;
  title: string;
  body: string;
}

export interface Copy {
  htmlLang: string;
  nav: {
    system: string;
    work: string;
    capabilities: string;
    services: string;
    contact: string;
    cta: string;
    menu: string;
    langLabel: string;
  };
  hero: {
    name: string;
    claim: string;
    role: string;
    intro: string;
    beamLabel: string;
    beamCaption: string;
    outcomes: { wavelength: Wavelength; title: string; body: string }[];
    primary: string;
    secondary: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  caseStudy: {
    heading: string;
    name: string;
    tagline: string;
    role: string;
    pathHeading: string;
    path: { wavelength: Wavelength; step: string; detail: string }[];
    problemHeading: string;
    problem: string;
    builtHeading: string;
    built: string;
    specHeading: string;
    spec: SpecRow[];
    guardHeading: string;
    guards: string[];
  };
  work: {
    heading: string;
    lead: string;
    problemLabel: string;
    builtLabel: string;
    stackLabel: string;
    projects: ProjectContent[];
  };
  capabilities: {
    heading: string;
    lead: string;
    groups: CapabilityGroup[];
  };
  services: {
    heading: string;
    lead: string;
    items: ServiceItem[];
    cta: string;
  };
  contact: {
    heading: string;
    lead: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    typeLabel: string;
    typePlaceholder: string;
    types: string[];
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sentHeading: string;
    sentBody: string;
    errorHeading: string;
    errorBody: string;
    retry: string;
    channels: { label: string; value: string; href: string | null }[];
  };
  footer: {
    built: string;
    top: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

/* ─────────────────────────────── Español ─────────────────────────────── */

const es: Copy = {
  htmlLang: "es",
  nav: {
    system: "El sistema",
    work: "Trabajo",
    capabilities: "Lo que manejo",
    services: "Servicios",
    contact: "Contacto",
    cta: "Escríbeme",
    menu: "Abrir menú",
    langLabel: "Idioma",
  },
  hero: {
    name: "Diego Jaramillo",
    claim: "Construyo los sistemas que responden por tu negocio.",
    role: "CTO de IKONICO · Ingeniería de Sistemas, EAFIT",
    intro:
      "Un cliente escribe por WhatsApp. Del otro lado hay un sistema que entiende el mensaje, busca en el conocimiento de la empresa y lo resuelve: contesta, agenda o se lo pasa a una persona. Eso es lo que diseño, construyo y sostengo en producción.",
    beamLabel: "Entra un mensaje",
    beamCaption: "WhatsApp",
    outcomes: [
      {
        wavelength: "resolve",
        title: "Responde",
        body: "En el idioma en que le escribieron, con la información real de la empresa detrás.",
      },
      {
        wavelength: "schedule",
        title: "Agenda",
        body: "Pregunta el día, ofrece los horarios que de verdad están libres y crea el evento.",
      },
      {
        wavelength: "handoff",
        title: "Pasa a un humano",
        body: "Cuando el cliente lo pide, el bot se calla y el asesor entra a la misma conversación.",
      },
    ],
    primary: "Cuéntame qué necesitas",
    secondary: "Mira el sistema por dentro",
  },
  about: {
    heading: "Quién responde",
    paragraphs: [
      "Soy CTO de IKONICO, registrado ante la Cámara de Comercio. La dirección técnica de lo que la empresa despacha pasa por mí: decido la arquitectura, decido qué se corta, sostengo la cadencia de entrega frente a quien toma las decisiones del lado del cliente, y respondo por el resultado cuando algo se cae.",
      "Estudio Ingeniería de Sistemas en la Universidad EAFIT, con base previa en programación de software del SENA, y hago parte de un semillero de investigación en machine learning.",
      "No entrego piezas sueltas. Entrego el sistema completo — arquitectura, canal, recuperación, panel del asesor, endurecimiento de seguridad, pruebas y despliegue — y lo dejo corriendo.",
    ],
    facts: [
      { label: "Base", value: "Medellín, Colombia · GMT-5" },
      { label: "Idiomas", value: "Español · English · Français" },
      { label: "Investigación", value: "Semillero de machine learning, EAFIT" },
      { label: "Disponibilidad", value: "Abierto a proyectos freelance" },
    ],
  },
  caseStudy: {
    heading: "El sistema",
    name: "IKONICO AI",
    tagline:
      "SaaS multi-tenant de asistentes de IA, en producción para IKONICO LATAM.",
    role: "Arquitectura, backend, frontend y operación — míos.",
    pathHeading: "El camino de un mensaje",
    path: [
      {
        wavelength: "inbound",
        step: "Entra",
        detail:
          "WhatsApp Cloud API. La capa de canal es agnóstica: sumar otro canal no toca el resto del sistema.",
      },
      {
        wavelength: "recall",
        step: "Recupera",
        detail:
          "Búsqueda vectorial en pgvector sobre embeddings de 768 dimensiones, acotada al conocimiento de esa empresa.",
      },
      {
        wavelength: "resolve",
        step: "Resuelve",
        detail:
          "Gemini 2.5 Flash con reglas de comportamiento, catálogo de productos y defensa contra inyección de prompt.",
      },
      {
        wavelength: "schedule",
        step: "Agenda",
        detail:
          "OAuth de Google Calendar, franjas construidas desde el horario real del negocio en hora de Bogotá.",
      },
      {
        wavelength: "handoff",
        step: "Entrega",
        detail:
          "El bot se pausa y el asesor toma la conversación desde su panel, sin perder el hilo.",
      },
      {
        wavelength: "isolate",
        step: "Aísla",
        detail:
          "Row-level security con un rol de base de datos dedicado: cada empresa solo alcanza lo suyo, dentro de la transacción.",
      },
    ],
    problemHeading: "El problema",
    problem:
      "Un grupo con varias líneas de negocio perdía conversaciones por WhatsApp fuera de horario, y cada línea necesitaba su propio asistente, con su propia información y sus propios asesores — sin montar cuatro sistemas distintos ni dejar que una empresa viera los datos de otra.",
    builtHeading: "Lo que construí",
    built:
      "Un solo sistema multi-tenant donde cada empresa carga su conocimiento, su catálogo y su horario, y recibe un asistente que atiende por WhatsApp, agenda contra su calendario y le entrega la conversación a un humano cuando hace falta. Cuatro organizaciones corren hoy sobre el mismo código, aisladas por row-level security.",
    specHeading: "Medidas",
    spec: [
      { label: "Commits", value: "167" },
      { label: "Vigencia", value: "22 may 2026 → hoy" },
      { label: "Pruebas Jest", value: "422 en verde" },
      { label: "Organizaciones en producción", value: "4" },
      { label: "Dimensión de embeddings", value: "768" },
      { label: "Backend", value: "NestJS 10 · TypeScript estricto" },
      { label: "Datos", value: "PostgreSQL + pgvector (Supabase)" },
      { label: "Modelo", value: "Gemini 2.5 Flash / Flash-Lite" },
      { label: "Canal", value: "WhatsApp Cloud API" },
      { label: "Infraestructura", value: "Railway · Cloudflare Pages" },
    ],
    guardHeading: "Lo que lo sostiene",
    guards: [
      "Firma HMAC-SHA256 en el webhook de WhatsApp, fail-closed: si no valida, el mensaje se descarta.",
      "Nonce de un solo uso en el state de OAuth, atado a la sesión y con vencimiento.",
      "Bloqueo por intentos fallidos de login, por empresa y por IP.",
      "Límite de peticiones por ruta, con el chat y la carga de archivos más apretados que el resto.",
      "Allowlist de MIME más verificación de magic bytes y cuotas de almacenamiento por empresa.",
      "Cierre automático de conversaciones inactivas con reclamo atómico, para que dos procesos no cierren la misma.",
    ],
  },
  work: {
    heading: "Trabajo",
    lead: "Sistemas que llegaron a producción, con lo que cada uno tuvo que resolver.",
    problemLabel: "El problema",
    builtLabel: "Lo que construí",
    stackLabel: "Stack",
    projects: [
      {
        id: "magneto",
        name: "MAGNETO",
        kind: "Búsqueda semántica de empleo · con Magneto Empleos",
        wavelength: "recall",
        summary:
          "Motor de recomendación de vacantes que entiende la intención, no solo las palabras.",
        problem:
          "La búsqueda por palabra clave se pierde vacantes buenas: quien busca «diseñador visual» nunca ve «creativo gráfico». Magneto necesitaba un motor que entendiera lo que la persona quiere decir.",
        built:
          "Motor de embeddings vectoriales con el modelo BGE corriendo en local vía @xenova/transformers — sin costo por consulta — y MongoDB Atlas Vector Search para resolver búsquedas semánticas en milisegundos sobre miles de vacantes.",
        spec: [
          { label: "Modo de búsqueda", value: "Título o descripción completa" },
          { label: "Embeddings", value: "BGE, inferencia local" },
          { label: "Costo por consulta", value: "0" },
        ],
        stack: [
          "Node.js",
          "Express",
          "MongoDB Atlas Vector Search",
          "@xenova/transformers",
        ],
      },
      {
        id: "groupsapp",
        name: "GroupsApp",
        kind: "Plataforma de mensajería",
        wavelength: "inbound",
        summary:
          "Mensajería híbrida con chats privados y servidores de grupo, sobre FastAPI asíncrono.",
        problem:
          "Montar una plataforma de mensajería que aguantara crecer, sin el costo de infraestructura que implica mantener WebSockets abiertos.",
        built:
          "Backend asíncrono en FastAPI con polling HTTP en lugar de WebSockets — una decisión de costo, tomada a propósito — almacenamiento dual entre S3 y disco local, y autenticación JWT con roles y permisos.",
        spec: [
          { label: "Tiempo real", value: "Polling HTTP" },
          { label: "Almacenamiento", value: "AWS S3 + local" },
          { label: "Autenticación", value: "JWT con roles" },
        ],
        stack: [
          "FastAPI",
          "SQLAlchemy 2.x async",
          "PostgreSQL",
          "Supabase",
          "AWS S3",
        ],
      },
      {
        id: "farmway",
        name: "FarmWay",
        kind: "Subastas agrícolas con IA generativa",
        wavelength: null,
        summary:
          "Plataforma de subastas para productores rurales, con generación de imágenes y recomendaciones.",
        problem:
          "Los productores rurales en Colombia no tienen fotos decentes de sus productos y no saben qué va a querer el comprador.",
        built:
          "Plataforma de subastas en Flask y MongoDB que genera la imagen del producto cuando el vendedor no sube ninguna, y arma recomendaciones a partir del historial de compra.",
        spec: [
          { label: "Subastas", value: "En tiempo real, con temporizador" },
          { label: "Imágenes", value: "Generadas cuando faltan" },
          { label: "Hash de contraseñas", value: "pbkdf2:sha256" },
        ],
        stack: ["Flask", "MongoDB Atlas", "Jinja2", "Flask-Login"],
      },
    ],
  },
  capabilities: {
    heading: "Lo que manejo",
    lead: "Agrupado por oficio. Cuando un grupo coincide con una etapa del camino del mensaje, lleva el color de esa etapa.",
    groups: [
      {
        wavelength: null,
        title: "Sistemas completos",
        items: [
          "NestJS 10 con TypeScript estricto",
          "FastAPI y Flask",
          "Node.js y Express",
          "Arquitectura, entrega y operación en producción",
          "Dirección técnica frente al cliente",
        ],
      },
      {
        wavelength: "recall",
        title: "Datos y recuperación",
        items: [
          "PostgreSQL con pgvector",
          "Row-level security multi-tenant con rol dedicado",
          "MongoDB Atlas, incluido Vector Search",
          "SQLAlchemy 2.x asíncrono",
          "Supabase",
        ],
      },
      {
        wavelength: null,
        title: "IA y machine learning",
        items: [
          "Gemini 2.5 Flash y Flash-Lite",
          "API de Claude",
          "RAG sobre embeddings de 768 dimensiones",
          "Tool calling y reglas de comportamiento",
          "Defensa contra inyección de prompt",
          "Embeddings ejecutados en local, sin costo por consulta",
          "Semillero de investigación en machine learning, EAFIT",
        ],
      },
      {
        wavelength: "inbound",
        title: "Canales e integraciones",
        items: [
          "WhatsApp Cloud API de punta a punta",
          "Webhooks firmados, plantillas y tokens de System User",
          "Meta Graph API",
          "OAuth de Google Calendar",
        ],
      },
      {
        wavelength: null,
        title: "Agentes y toolchain",
        items: [
          "Claude Code como entorno de trabajo",
          "Servidores MCP propios y de terceros",
          "Skills y hooks",
          "Subagentes y orquestación multi-CLI",
          "Automatización del trabajo del equipo, no solo del producto",
        ],
      },
      {
        wavelength: "isolate",
        title: "Seguridad y aislamiento",
        items: [
          "Aislamiento por tenant bajo RLS",
          "Verificación HMAC de webhooks, fail-closed",
          "Nonce de un solo uso en OAuth",
          "Bloqueo por intentos y límite de peticiones",
          "Allowlist de MIME con verificación de magic bytes",
          "Helmet y CSP",
        ],
      },
    ],
  },
  services: {
    heading: "Servicios",
    lead: "Lo que puedo construirte, de la arquitectura al despliegue.",
    items: [
      {
        wavelength: "inbound",
        title: "Asistentes de IA por WhatsApp",
        body: "Atienden en el idioma del cliente, con la información real de tu empresa, y le pasan la conversación a tu equipo cuando hace falta.",
      },
      {
        wavelength: null,
        title: "Sistemas completos, de cero a producción",
        body: "Arquitectura, backend, panel, seguridad, pruebas y despliegue. Uno solo responde por todo: yo.",
      },
      {
        wavelength: "recall",
        title: "RAG y búsqueda semántica",
        body: "Tu documentación, tu catálogo o tus vacantes vueltos algo que se puede preguntar en lenguaje natural.",
      },
      {
        wavelength: null,
        title: "Integraciones con terceros",
        body: "Meta, Google Calendar, pasarelas de pago, ERPs. Autenticación, webhooks firmados y reintentos incluidos.",
      },
      {
        wavelength: null,
        title: "Agentes y automatización interna",
        body: "MCP, Skills y CLIs para que el trabajo repetitivo de tu equipo lo haga un agente y no una persona.",
      },
      {
        wavelength: null,
        title: "Machine learning aplicado",
        body: "Embeddings, clasificación y recomendación puestos donde de verdad mueven una decisión del negocio.",
      },
    ],
    cta: "Hablemos de esto",
  },
  contact: {
    heading: "Cuéntame qué necesitas",
    lead: "Escribe lo que quieres construir. Contesto el mismo día.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tu@correo.com",
    typeLabel: "Qué necesitas",
    typePlaceholder: "Elige una opción…",
    types: [
      "Asistente de IA por WhatsApp",
      "Sistema completo, de cero a producción",
      "Backend o API",
      "RAG o búsqueda semántica",
      "Integración con un tercero (Meta, Google, pagos…)",
      "Agentes y automatización con MCP o CLIs",
      "Machine learning aplicado",
      "Todavía no sé, quiero asesoría",
    ],
    messageLabel: "Mensaje",
    messagePlaceholder: "Qué quieres construir, y para cuándo.",
    send: "Enviar mensaje",
    sending: "Enviando…",
    sentHeading: "Mensaje enviado",
    sentBody: "Te contesto hoy mismo al correo que dejaste.",
    errorHeading: "No salió",
    errorBody:
      "El envío falló. Escríbeme directo a diegojaramillocalderon@gmail.com y lo resolvemos por ahí.",
    retry: "Intentar de nuevo",
    channels: [
      {
        label: "Correo",
        value: "diegojaramillocalderon@gmail.com",
        href: "mailto:diegojaramillocalderon@gmail.com",
      },
      {
        label: "WhatsApp",
        value: "+57 302 707 1405",
        href: "https://wa.me/573027071405",
      },
      {
        label: "LinkedIn",
        value: "in/diegojaramilloo",
        href: "https://www.linkedin.com/in/diegojaramilloo/",
      },
      {
        label: "GitHub",
        value: "dajaramilc",
        href: "https://github.com/dajaramilc",
      },
      { label: "Base", value: "Medellín, Colombia · GMT-5", href: null },
    ],
  },
  footer: {
    built: "Diseñado y construido por Diego Jaramillo",
    top: "Volver arriba",
  },
  meta: {
    title: "Diego Jaramillo — Sistemas de IA en producción",
    description:
      "CTO de IKONICO. Construyo asistentes de IA, backends e integraciones que quedan corriendo en producción: WhatsApp Cloud API, RAG sobre pgvector, NestJS y FastAPI. Medellín, Colombia.",
  },
};

/* ─────────────────────────────── English ─────────────────────────────── */

const en: Copy = {
  htmlLang: "en",
  nav: {
    system: "The system",
    work: "Work",
    capabilities: "Capabilities",
    services: "Services",
    contact: "Contact",
    cta: "Write to me",
    menu: "Open menu",
    langLabel: "Language",
  },
  hero: {
    name: "Diego Jaramillo",
    claim: "I build the systems that answer for your business.",
    role: "CTO at IKONICO · Systems Engineering, EAFIT",
    intro:
      "A customer writes in on WhatsApp. On the other side is a system that understands the message, searches the company's own knowledge, and resolves it: it answers, it books, or it hands the conversation to a person. That is what I design, build, and keep running in production.",
    beamLabel: "A message arrives",
    beamCaption: "WhatsApp",
    outcomes: [
      {
        wavelength: "resolve",
        title: "It answers",
        body: "In whatever language it was written in, backed by the company's real information.",
      },
      {
        wavelength: "schedule",
        title: "It books",
        body: "Asks for the day, offers the slots that are genuinely free, and creates the event.",
      },
      {
        wavelength: "handoff",
        title: "It hands off",
        body: "When the customer asks for a person, the bot goes quiet and an advisor takes the same thread.",
      },
    ],
    primary: "Tell me what you need",
    secondary: "Look inside the system",
  },
  about: {
    heading: "Who answers",
    paragraphs: [
      "I am CTO of IKONICO, registered before the Cámara de Comercio. The technical direction of what the company ships runs through me: I choose the architecture, I decide what gets cut, I hold the delivery cadence with the client's decision-maker, and I answer for the result when something breaks.",
      "I study Systems Engineering at Universidad EAFIT, on top of a software programming background from SENA, and I am part of a machine-learning research seedbed.",
      "I do not hand over parts. I hand over the whole system — architecture, channel, retrieval, advisor panel, security hardening, tests, and deployment — and I leave it running.",
    ],
    facts: [
      { label: "Based in", value: "Medellín, Colombia · GMT-5" },
      { label: "Languages", value: "Español · English · Français" },
      { label: "Research", value: "Machine-learning seedbed, EAFIT" },
      { label: "Availability", value: "Open to freelance projects" },
    ],
  },
  caseStudy: {
    heading: "The system",
    name: "IKONICO AI",
    tagline: "Multi-tenant AI assistant SaaS, in production for IKONICO LATAM.",
    role: "Architecture, backend, frontend, and operations — mine.",
    pathHeading: "How a message travels",
    path: [
      {
        wavelength: "inbound",
        step: "Arrives",
        detail:
          "WhatsApp Cloud API. The channel layer is agnostic: adding another channel leaves the rest of the system untouched.",
      },
      {
        wavelength: "recall",
        step: "Recalls",
        detail:
          "Vector search in pgvector over 768-dimension embeddings, scoped to that company's knowledge.",
      },
      {
        wavelength: "resolve",
        step: "Resolves",
        detail:
          "Gemini 2.5 Flash with behavior rules, the product catalog, and prompt-injection defense.",
      },
      {
        wavelength: "schedule",
        step: "Books",
        detail:
          "Google Calendar OAuth, with slots built from the business's real hours in Bogotá time.",
      },
      {
        wavelength: "handoff",
        step: "Hands off",
        detail:
          "The bot pauses and the advisor picks up the conversation from their panel, thread intact.",
      },
      {
        wavelength: "isolate",
        step: "Isolates",
        detail:
          "Row-level security through a dedicated database role: each company reaches only its own rows, inside the transaction.",
      },
    ],
    problemHeading: "The problem",
    problem:
      "A group with several business lines was losing WhatsApp conversations after hours, and every line needed its own assistant, with its own information and its own advisors — without standing up four separate systems, and without one company ever seeing another's data.",
    builtHeading: "What I built",
    built:
      "One multi-tenant system where each company loads its knowledge, its catalog, and its hours, and gets an assistant that works on WhatsApp, books against its calendar, and hands the conversation to a human when it should. Four organizations run on that same codebase today, isolated by row-level security.",
    specHeading: "Measured",
    spec: [
      { label: "Commits", value: "167" },
      { label: "Span", value: "22 May 2026 → today" },
      { label: "Jest tests", value: "422 green" },
      { label: "Organizations in production", value: "4" },
      { label: "Embedding dimension", value: "768" },
      { label: "Backend", value: "NestJS 10 · strict TypeScript" },
      { label: "Data", value: "PostgreSQL + pgvector (Supabase)" },
      { label: "Model", value: "Gemini 2.5 Flash / Flash-Lite" },
      { label: "Channel", value: "WhatsApp Cloud API" },
      { label: "Infrastructure", value: "Railway · Cloudflare Pages" },
    ],
    guardHeading: "What holds it up",
    guards: [
      "HMAC-SHA256 signature on the WhatsApp webhook, fail-closed: if it does not verify, the message is dropped.",
      "Single-use nonce on the OAuth state, bound to the session and expiring.",
      "Login lockout on failed attempts, per organization and per IP.",
      "Per-route rate limiting, with chat and file upload held tighter than the rest.",
      "MIME allowlist plus magic-byte verification and per-company storage quotas.",
      "Inactivity auto-close with an atomic claim, so two workers never close the same conversation.",
    ],
  },
  work: {
    heading: "Work",
    lead: "Systems that reached production, and what each one had to solve.",
    problemLabel: "The problem",
    builtLabel: "What I built",
    stackLabel: "Stack",
    projects: [
      {
        id: "magneto",
        name: "MAGNETO",
        kind: "Semantic job search · with Magneto Empleos",
        wavelength: "recall",
        summary:
          "A job recommender that reads intent instead of matching words.",
        problem:
          "Keyword search misses good openings: someone looking for “visual designer” never sees “graphic creative”. Magneto needed an engine that understood what the person meant.",
        built:
          "A vector embeddings engine with the BGE model running locally through @xenova/transformers — no per-query cost — and MongoDB Atlas Vector Search resolving semantic queries across thousands of openings in milliseconds.",
        spec: [
          { label: "Search modes", value: "Title or full description" },
          { label: "Embeddings", value: "BGE, local inference" },
          { label: "Cost per query", value: "0" },
        ],
        stack: [
          "Node.js",
          "Express",
          "MongoDB Atlas Vector Search",
          "@xenova/transformers",
        ],
      },
      {
        id: "groupsapp",
        name: "GroupsApp",
        kind: "Messaging platform",
        wavelength: "inbound",
        summary:
          "Hybrid messaging with private chats and group servers, on async FastAPI.",
        problem:
          "Build a messaging platform that could grow without the infrastructure cost of holding WebSockets open.",
        built:
          "An async FastAPI backend using HTTP polling instead of WebSockets — a cost trade made on purpose — dual storage across S3 and local disk, and JWT authentication with roles and permissions.",
        spec: [
          { label: "Real time", value: "HTTP polling" },
          { label: "Storage", value: "AWS S3 + local" },
          { label: "Authentication", value: "JWT with roles" },
        ],
        stack: [
          "FastAPI",
          "SQLAlchemy 2.x async",
          "PostgreSQL",
          "Supabase",
          "AWS S3",
        ],
      },
      {
        id: "farmway",
        name: "FarmWay",
        kind: "Agricultural auctions with generative AI",
        wavelength: null,
        summary:
          "An auction platform for rural producers, with generated imagery and recommendations.",
        problem:
          "Rural producers in Colombia have no decent photographs of their produce and no way to read what a buyer will want.",
        built:
          "A Flask and MongoDB auction platform that generates the product image when the seller uploads none, and builds recommendations from purchase history.",
        spec: [
          { label: "Auctions", value: "Real time, with a timer" },
          { label: "Imagery", value: "Generated when missing" },
          { label: "Password hashing", value: "pbkdf2:sha256" },
        ],
        stack: ["Flask", "MongoDB Atlas", "Jinja2", "Flask-Login"],
      },
    ],
  },
  capabilities: {
    heading: "Capabilities",
    lead: "Grouped by craft. Where a group matches a stage of the message path, it carries that stage's color.",
    groups: [
      {
        wavelength: null,
        title: "Whole systems",
        items: [
          "NestJS 10 in strict TypeScript",
          "FastAPI and Flask",
          "Node.js and Express",
          "Architecture, delivery, and production operations",
          "Technical direction with the client",
        ],
      },
      {
        wavelength: "recall",
        title: "Data and retrieval",
        items: [
          "PostgreSQL with pgvector",
          "Multi-tenant row-level security through a dedicated role",
          "MongoDB Atlas, including Vector Search",
          "Async SQLAlchemy 2.x",
          "Supabase",
        ],
      },
      {
        wavelength: null,
        title: "AI and machine learning",
        items: [
          "Gemini 2.5 Flash and Flash-Lite",
          "The Claude API",
          "RAG over 768-dimension embeddings",
          "Tool calling and behavior-rule systems",
          "Prompt-injection defense",
          "Embeddings run locally, at no cost per query",
          "Machine-learning research seedbed, EAFIT",
        ],
      },
      {
        wavelength: "inbound",
        title: "Channels and integrations",
        items: [
          "WhatsApp Cloud API end to end",
          "Signed webhooks, message templates, System User tokens",
          "Meta Graph API",
          "Google Calendar OAuth",
        ],
      },
      {
        wavelength: null,
        title: "Agents and toolchain",
        items: [
          "Claude Code as a working environment",
          "MCP servers, mine and third-party",
          "Skills and hooks",
          "Subagents and multi-CLI orchestration",
          "Automating the team's work, not only the product",
        ],
      },
      {
        wavelength: "isolate",
        title: "Security and isolation",
        items: [
          "Per-tenant isolation under RLS",
          "Fail-closed HMAC webhook verification",
          "Single-use OAuth nonce",
          "Login lockout and rate limiting",
          "MIME allowlist with magic-byte verification",
          "Helmet and CSP",
        ],
      },
    ],
  },
  services: {
    heading: "Services",
    lead: "What I can build for you, from architecture to deployment.",
    items: [
      {
        wavelength: "inbound",
        title: "AI assistants on WhatsApp",
        body: "They work in the customer's language, on your company's real information, and hand the conversation to your team when they should.",
      },
      {
        wavelength: null,
        title: "Whole systems, zero to production",
        body: "Architecture, backend, panel, security, tests, and deployment. One person answers for all of it: me.",
      },
      {
        wavelength: "recall",
        title: "RAG and semantic search",
        body: "Your documentation, catalog, or listings turned into something anyone can question in plain language.",
      },
      {
        wavelength: null,
        title: "Third-party integrations",
        body: "Meta, Google Calendar, payment gateways, ERPs. Authentication, signed webhooks, and retries included.",
      },
      {
        wavelength: null,
        title: "Agents and internal automation",
        body: "MCP, Skills, and CLIs so your team's repetitive work is done by an agent instead of a person.",
      },
      {
        wavelength: null,
        title: "Applied machine learning",
        body: "Embeddings, classification, and recommendation put where they actually move a business decision.",
      },
    ],
    cta: "Let's talk about this",
  },
  contact: {
    heading: "Tell me what you need",
    lead: "Write what you want built. I answer the same day.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    typeLabel: "What you need",
    typePlaceholder: "Pick one…",
    types: [
      "AI assistant on WhatsApp",
      "A whole system, zero to production",
      "Backend or API",
      "RAG or semantic search",
      "Third-party integration (Meta, Google, payments…)",
      "Agents and automation with MCP or CLIs",
      "Applied machine learning",
      "Not sure yet — I want advice",
    ],
    messageLabel: "Message",
    messagePlaceholder: "What you want built, and by when.",
    send: "Send message",
    sending: "Sending…",
    sentHeading: "Message sent",
    sentBody: "I will answer today, at the address you left.",
    errorHeading: "That did not go through",
    errorBody:
      "The send failed. Write to me directly at diegojaramillocalderon@gmail.com and we will sort it there.",
    retry: "Try again",
    channels: [
      {
        label: "Email",
        value: "diegojaramillocalderon@gmail.com",
        href: "mailto:diegojaramillocalderon@gmail.com",
      },
      {
        label: "WhatsApp",
        value: "+57 302 707 1405",
        href: "https://wa.me/573027071405",
      },
      {
        label: "LinkedIn",
        value: "in/diegojaramilloo",
        href: "https://www.linkedin.com/in/diegojaramilloo/",
      },
      {
        label: "GitHub",
        value: "dajaramilc",
        href: "https://github.com/dajaramilc",
      },
      { label: "Based in", value: "Medellín, Colombia · GMT-5", href: null },
    ],
  },
  footer: {
    built: "Designed and built by Diego Jaramillo",
    top: "Back to top",
  },
  meta: {
    title: "Diego Jaramillo — AI systems in production",
    description:
      "CTO at IKONICO. I build AI assistants, backends, and integrations that stay running in production: WhatsApp Cloud API, RAG over pgvector, NestJS and FastAPI. Medellín, Colombia.",
  },
};

export const content: Record<Lang, Copy> = { es, en };
