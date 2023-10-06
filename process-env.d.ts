
declare global {
  namespace NodeJS {
    interface ProcessEnv {
    //   [key: string]: string | undefined;
      EMAILSERVICE_ID: string;
      EMAILTEMPLATE_ID: string;
      EMAILPUBLIC_ID: string;
      // add more environment variables and their types here
    }
  }
}

export {};
