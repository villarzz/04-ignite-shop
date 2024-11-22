import Image from "next/image";
import { AppProps } from "next/app";
import bag from "../assets/bag.svg";
import logoImg from "../assets/logo.svg";
import { globalStyles } from "@/styles/global";
import { CartProvider } from "@/context/cartContext";
import { Container, Header } from "@/styles/pages/app";
import { ButtonBag } from "@/styles/components/button";
import { useState } from "react";
import Cart from "./cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => setCartVisible((prev) => !prev);

  return (
    <>
      <CartProvider>
        <Header>
          <Image src={logoImg} alt="" />
          <ButtonBag onClick={toggleCart}>
            <Image src={bag} alt="" />
          </ButtonBag>
        </Header>
        <Container>
          <Component {...pageProps} />
        </Container>
        {isCartVisible && <Cart />}
      </CartProvider>
    </>
  );
}
