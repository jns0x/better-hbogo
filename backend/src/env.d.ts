declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    CORS_ORIGIN: string;
    PORT: string;
  }
}
