import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	build: {
		rollupOptions: {
			output: {
				format: "iife", // Force the IIFE wrapper
				name: "symplyCT", // Required for 'iife' to avoid errors
			},
		},
	},
});
