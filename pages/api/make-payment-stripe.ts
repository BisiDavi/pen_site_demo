const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case "POST": {
      try {
        console.log("req.body", req.body);
        const sessionData = {
          ...req.body,
          mode: "payment",
          success_url: `${req.headers.origin}/payment-successful?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/payment-error/`,
        };
        const session = await stripe.checkout.sessions.create(sessionData);
        console.log("session", session);
        res.status(200).json({ session });
      } catch (error: any) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  }
}
