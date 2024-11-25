import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { cart } = req.body;

  if (!cart || !Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ error: "Cart is required and must not be empty" });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  try {
    // Mapeia os itens do carrinho para o formato esperado por `line_items`
    const lineItems = cart.map(item => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
        unit_amount: Math.round(parseFloat(item.price.replace("R$", "").replace(",", ".")) * 100), // Converte para centavos
      },
      quantity: item.quantity,
    }));

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: "payment",
      line_items: lineItems,
    });

    return res.status(201).json({ checkoutUrl: checkoutSession.url });
  } catch (error) {
    console.error("Erro ao criar sessão de checkout:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
