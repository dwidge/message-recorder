/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_TITLE: string;
  readonly VITE_DESCRIPTION: string;
  readonly VITE_THEME_COLOR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
