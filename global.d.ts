import { store } from "./src/components/store.ts";

// src/types/global.d.ts
export {};

declare global {
  interface Window {
    store: typeof store;
  }
}
