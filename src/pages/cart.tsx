import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "@/context/cartContext";
import { CartContainer, CartTitle, CheckoutButton, CheckoutInfos, CloseButton, ItemImage, ItemsInfos, ItemsList, ListItem, Price} from "@/styles/pages/cart";

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const { cart, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalValue = cart.reduce((sum, item) => {
        const itemPrice = parseFloat(
          item.price.replace("R$", "").replace(",", ".")
        );
        return sum + itemPrice * item.quantity;
      }, 0);

      setTotal(totalValue);
    };

    calculateTotal();
  }, [cart]);

  const handleCheckoutSession = () => {
    axios
      .post("/api/checkout", { cart })
      .then(response => {
        window.location.href = response.data.checkoutUrl;
      })
      .catch(error => {
        console.error("Erro ao iniciar a sessão de checkout:", error);
      });
  };  

  return (
    <CartContainer>
      <CloseButton onClick={onClose} aria-label="Fechar Carrinho">
        X
      </CloseButton>
      <ItemsList>
        <CartTitle>Sacola de compras</CartTitle>
        {cart.map((item: any) => (
          <ListItem key={item.id}>
            <ItemImage src={item.imageUrl} alt={item.name} />
            <ItemsInfos>
              <p>{item.name}</p>
              <Price>{item.price}</Price>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </ItemsInfos>
          </ListItem>
        ))}
      </ItemsList>
      <CheckoutInfos>
        <p style={{ marginBottom: "25px" }}>Quantidade</p>
        <p style={{ marginLeft: "160px", textAlign: "right" }}>
          {cart.length} {cart.length > 1 ? "itens" : "item"}
        </p>
        <p style={{ marginBottom: "25px", fontSize: "18px", fontWeight: "bold"}}>
          Valor Total
        </p>
        <p
          style={{ marginLeft: "120px", fontSize: "24px", fontWeight: "bold" }}>
          R$ {total.toFixed(2).replace(".", ",")}
        </p>
      </CheckoutInfos>
      <CheckoutButton onClick={handleCheckoutSession}>
        Finalizar compra
      </CheckoutButton>
    </CartContainer>
  );
}
