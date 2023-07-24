import Link from "next/link";

export default function SignUp(){
    return(
        <div>
            <h1>Estou na página de signup</h1>
            <Link href="/auth/login">Ir para login</Link>
        </div>
    )
}