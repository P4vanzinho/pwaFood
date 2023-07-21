'use client'

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { checkIsPublicRoute } from "./routes/CheckIsPublicAuth"
import PrivateRoute from "./routes/PrivateRoute";


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  const pathname = usePathname();
  
  const isPublicPage = checkIsPublicRoute(pathname!)
  console.log(isPublicPage)

  /** usuário autenticado=> permissão para visualizar rota privada,
   * e o contrário também é valido
  */




  return (
    <html lang="en">
      <body>
        {children}
        
        <p>A rota é publica: { `${isPublicPage}`}</p>

        {isPublicPage && children}
      
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
        
        </body>
    </html>
  )
}
