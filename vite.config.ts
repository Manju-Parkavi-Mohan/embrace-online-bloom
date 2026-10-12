import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => ({
  server: { host: "::", port: 8080 },
  resolve: { dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"] },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // src/server.ts wraps SSR with a friendly error page
    tanstackStart({ server: { entry: "server" } }),
    // Default build -> dist/ (edge preview). `npm run build:node` -> .output/ Node server for Hostinger.
    ...(command === "build"
      ? [
          process.env["NITRO_PRESET"] === "node-server"
            ? nitro({ preset: "node-server" })
            : nitro({ preset: "cloudflare-module", output: { dir: "dist" } }),
        ]
      : []),
    viteReact(),
  ],
}));
