import { ImageContainer, SuccessContainter } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainter>
      <h1>Compra efetuada!</h1>
      <ImageContainer></ImageContainer>
      <p>
        Uhuul <strong>Hugo Vilar</strong>, sua <strong>camiseta</strong> já está
        a caminho da sua casa!
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainter>
  );
}
