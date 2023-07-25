'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Params {
  adminName: string;
}

type ParamsString = {
  params: Params;
};

/*Possivelmente, faremos uma chamada para o beckend na pagina de LOGIN, ou na CONTEXT DE AUTENTICAÇÃO, e nessa função, após pegar a resposta, faremos um push para:
admin/nomeDoBackEnd => isso redirecionará a web para essa página aqui => essa pagina está direcionando para /nomeDoBackEnd/produtos, e lá em produtos, é onde será feita outra
chamada para a api, requisitando todas as informacoes, inclusive os pratos, do usuário atual, no caso, admin.
 */
export default function adminPage({ params }: ParamsString) {
  return <> </>;
}
