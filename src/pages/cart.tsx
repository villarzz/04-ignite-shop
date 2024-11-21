import { useCart } from "@/context/cartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {cart.map((item:any) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>Quantidade: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
