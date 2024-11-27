import Stripe from "stripe";
import Link from "next/link";
import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import { ImageContainer, SuccessContainter } from "@/styles/pages/success";
import Head from "next/head";

interface Product {
  name: string;
  imageUrl: string;
}

interface SuccessProps {
  customerName: string;
  products: Product[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainter>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          {products.map(product => (
            <Image
              key={product.name}
              src={product.imageUrl}
              width={120}
              height={110}
              alt={product.name}></Image>
          ))}
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra foi efetuada e já
          está a caminho da sua casa!
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainter>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  const products = session.line_items?.data.map(item => {
    const product = item.price?.product as Stripe.Product;

    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
