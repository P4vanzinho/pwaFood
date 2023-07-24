'use client'

import Link from "next/link"

import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { AppRoutes } from "./routes/appRoutes";



//Estou considerando que esta page.tsx é a do administrador.
export default function Home() {
  const { push } = useRouter()



  useEffect(() => {
    push(AppRoutes.public.login)
  }, [])

  return (
    <></>
  )
}
