'use client';
interface Params {
  adminName: string;
}

type ParamsString = {
  params: Params;
};

export default function adminPage({ params }: ParamsString) {
  console.log(params);

  return <> </>;
}
