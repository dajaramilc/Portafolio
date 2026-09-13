import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  /* Sin esto, Next infiere la raiz del workspace desde el lockfile mas
     cercano hacia arriba y en esta maquina agarra C:\Users\diego. Se fija
     a la carpeta del proyecto, resuelta en tiempo de ejecucion para que
     tambien sirva en el Linux del despliegue. */
  turbopack: { root: dirname(fileURLToPath(import.meta.url)) },
};

export default nextConfig;
