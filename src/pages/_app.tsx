import Cart from "./cart";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AppProps } from "next/app";
import bag from "../assets/bag.svg";
import logoImg from "../assets/logo.svg";
import { globalStyles } from "@/styles/global";
import { CartProvider } from "@/context/cartContext";
import { ButtonBag } from "@/styles/components/button";
import { CartContainer, Container, Header } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => setCartVisible((prev) => !prev);

  return (
    <>
      <CartProvider>
        <Header>
          <Link href="/" passHref>
            <Image src={logoImg} alt="Logo da Loja" style={{ cursor: "pointer" }} />
          </Link>
          <ButtonBag onClick={toggleCart}>
            <Image src={bag} alt="Carrinho de Compras" />
          </ButtonBag>
        </Header>
        {isCartVisible && (
          <CartContainer>
            <Cart onClose={() => setCartVisible(false)} />
          </CartContainer>
        )}
        <Container>
          <Component {...pageProps} />
        </Container>
      </CartProvider>
    </>
  );
}
