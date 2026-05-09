export interface Project {
  id: string;
  category: string;
  accentColor: string;
  bgGradient: string;
  title: string;
  shortDesc: string;
  tags: string[];
  challenge: string;
  solution: string;
  tech: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "groupsapp",
    category: "Backend + Real-time Messaging",
    accentColor: "#22d3ee",
    bgGradient: "from-cyan-900/40 via-blue-900/20 to-slate-900/40",
    title: "GroupsApp — Hybrid Messaging Platform",
    shortDesc:
      "A WhatsApp/Discord-style messaging platform with real-time chats, file sharing, and JWT authentication. Built with FastAPI async architecture.",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "AWS S3", "Supabase"],
    challenge:
      "Building a scalable messaging platform that combines the best of WhatsApp (private chats) and Discord (group servers) without using WebSockets, optimizing for low infrastructure cost.",
    solution:
      "Designed an async FastAPI backend with HTTP polling for real-time updates, dual storage strategy (S3 + local), and secure JWT-based authentication with role management.",
    tech: "FastAPI, SQLAlchemy 2.x async, PostgreSQL on Supabase, JWT, AWS S3, Pydantic, Python 3.11+",
    features: [
      "Group and private chats",
      "File & media handling",
      "User roles & permissions",
      "Message history",
      "Secure auth flow",
    ],
  },
  {
    id: "magneto",
    category: "AI Semantic Search",
    accentColor: "#a78bfa",
    bgGradient: "from-violet-900/40 via-purple-900/20 to-slate-900/40",
    title: "MAGNETO — Smart Job Recommender",
    shortDesc:
      "Semantic job search engine using vector embeddings and MongoDB Atlas Vector Search. Built in collaboration with Magneto Empleos.",
    tags: ["Node.js", "MongoDB Atlas", "Vector Search", "BGE Embeddings", "AI"],
    challenge:
      "Traditional keyword-based job search misses relevant opportunities. Magneto needed an engine that understands semantic intent, not just exact matches.",
    solution:
      "Implemented a vector embeddings search engine using the BGE model running locally (no API costs), with MongoDB Atlas Vector Search for millisecond-fast semantic queries across thousands of vacancies.",
    tech: "Node.js, Express, MongoDB Atlas Vector Search, @xenova/transformers (BGE local), JavaScript",
    features: [
      "Dual search modes (title vs full description)",
      "Progressive user profiling",
      "Soft-skills evaluation module",
      "Real-time recommendation refinement",
    ],
  },
  {
    id: "farmway",
    category: "Full-Stack + Generative AI",
    accentColor: "#34d399",
    bgGradient: "from-emerald-900/40 via-teal-900/20 to-slate-900/40",
    title: "FarmWay — AI-Powered Agricultural Auctions",
    shortDesc:
      "Digital auction platform for agricultural products with DALL-E image generation and GPT-3.5 personalized recommendations.",
    tags: ["Flask", "MongoDB", "OpenAI", "DALL-E", "GPT-3.5", "Python"],
    challenge:
      "Rural producers in Colombia lack high-quality product photos and have no way to predict buyer preferences. We needed a platform that solves both problems.",
    solution:
      "Built a Flask + MongoDB auctions platform that auto-generates product images with DALL-E when sellers don't upload one, and uses GPT-3.5 to analyze purchase history and generate personalized recommendations.",
    tech: "Flask, MongoDB Atlas, OpenAI API (DALL-E + GPT-3.5-turbo), Jinja2, Flask-Login (pbkdf2:sha256)",
    features: [
      "Real-time auctions with timing",
      "AI image generation (DALL-E)",
      "Intelligent recommendations (GPT-3.5)",
      "Admin panel",
      "Secure auth",
    ],
  },
];
