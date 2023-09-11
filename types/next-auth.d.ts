import NextAuth from 'next-auth';
declare module 'next-auth' {
  interface Session {
    data: {
      name: string;
      token: string;
      email: string;
      business: array;
    };
  }
}
