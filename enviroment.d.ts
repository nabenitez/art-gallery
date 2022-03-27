declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ART_API_URL: string; // this is the line you want
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
