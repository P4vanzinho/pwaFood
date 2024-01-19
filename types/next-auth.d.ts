import NextAuth from 'next-auth';
declare module 'next-auth' {
  interface Business {
    id: string;
  }
  interface Session {
    data: {
      name: string;
      token: string;
      email: string;
      business: Business[];
    };
  }
}
