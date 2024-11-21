import Image from "next/image";
import { AppProps } from "next/app";
import bag from "../assets/bag.svg";
import logoImg from "../assets/logo.svg";
import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import { ButtonBag } from "@/styles/components/button";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <Image src={logoImg} alt="" />
        <ButtonBag>
          <Image src={bag} alt=""></Image>
        </ButtonBag>
      </Header>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
