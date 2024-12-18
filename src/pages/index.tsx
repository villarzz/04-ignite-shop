import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import "keen-slider/keen-slider.min.css";
import bagWhite from "../assets/bagWhite.svg";
import { useKeenSlider } from "keen-slider/react";
import { ButtonBag } from "@/styles/components/button";
import { HomeContainer, Product } from "@/styles/pages/home";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Product className="keen-slider__slide" key={product.id}>
                <Image src={product.imageUrl} alt="" width={520} height={480} />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <div>
                    <ButtonBag color="green">
                      <Image src={bagWhite} alt=""></Image>
                    </ButtonBag>
                  </div>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: price.currency,
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  };
};
