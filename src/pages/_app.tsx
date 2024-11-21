import Image from "next/image";
import { AppProps } from "next/app";
import bag from "../assets/bag.svg";
import logoImg from "../assets/logo.svg";
import { globalStyles } from "@/styles/global";
import { Button, Container, Header } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <Image src={logoImg} alt="" />
        <Button>
          <Image src={bag} alt=""></Image>
        </Button>
      </Header>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
