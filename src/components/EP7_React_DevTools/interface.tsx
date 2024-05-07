  interface Contact {
    id?: number;         // id?  ==>   optional 
    name: string;
    imgURL: string;
    phone: string;
    email: string;
    text:string;
  }

  interface Avatar {
    id?: number;         // id?  ==>   optional 
    name: string;
    imgURL: string;
    phone: string;
    email: string;
    text:string;
  }
export type { Contact, Avatar}; 