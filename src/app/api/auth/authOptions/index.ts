import { EndpointFoodApiEnum } from '@/app/enums/foodApi'
import { foodApiConfig } from '@/config'
import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials, _req) {
        const response = await fetch(
          foodApiConfig.url + '/' + EndpointFoodApiEnum.TENANT_LOGIN,
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          },
        )

        const body = await response.json()

        if (body.data) {
          return body
        } else {
          throw new Error(body.error)
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    },
  },

  pages: {
    signIn: '/admin/login',
  },
}
