declare global {
  namespace NodeJS {
    interface ProcessEnv {
      //   [key: string]: string | undefined;
      NEXT_PUBLIC_EMAILSERVICE_ID: string;
      NEXT_PUBLIC_EMAILTEMPLATE_ID: string;
      NEXT_PUBLIC_EMAILPUBLIC_ID: string;
      // add more environment variables and their types here
    }
  }
}

export {};
