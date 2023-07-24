
import { Container, LogoButton, LinksContainer, AuthLinksContainer } from "./styles"
import Link from "next/link";
import { bebas_neue, poppins } from "../../fonts"


export default function AuthHeader() {
    return (
        <Container>
            <LogoButton>
                <div className={bebas_neue.className}>
                    <span>FOOD-</span>
                    <span>E</span>
                </div>
            </LogoButton>

            <LinksContainer>
                <Link href=""> PRODUTOS</Link>
                <Link href=""> PREÇOS</Link>
                <Link href=""> COMO USAR ?</Link>
            </LinksContainer>

            <AuthLinksContainer>
                <button className={poppins.className}>
                    <Link href="/auth/login" >Login</Link>
                </button>
                <button className={poppins.className}>
                    <Link href="/auth/signup">Cadastro</Link>
                </button>
            </AuthLinksContainer>
        </Container>
    )
}