import Layout from "@/layout";
import { useRouter } from "next/router";

export default function PaymentSuccessful() {
  const router = useRouter();
  console.log("router", router);
  return (
    <Layout>
      {router.query.session_id && (
        <p className="successful"> 🎉 Payment Successful, Thanks</p>
      )}

      <style jsx>
        {`
          .successful {
            text-align: center;
            font-weight: bold;
            font-size: 30px;
          }
        `}
      </style>
    </Layout>
  );
}
