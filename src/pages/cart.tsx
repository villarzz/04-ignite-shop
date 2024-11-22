import { useCart } from "@/context/cartContext";
import { CartTitle, CloseButton, ItemImage, ItemsInfos, ItemsList, ListItem } from "@/styles/pages/cart";

interface CartProps {
  onClose: () => void; // Função para fechar o carrinho
}

export default function Cart({ onClose }: CartProps) {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
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
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </ItemsInfos>
          </ListItem>
        ))}
      </ItemsList>
    </div>
  );
}
