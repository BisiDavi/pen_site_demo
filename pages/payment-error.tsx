import Link from "next/link";
import Layout from "@/layout";

export default function PaymentError() {
  return (
    <Layout>
      <p className="error">
        
        ❌ Error making payment <Link href="/">Continue Shopping</Link>
      </p>

      <style jsx>
        {`
          .error {
            text-align: center;
            font-weight: bold;
            font-size: 30px;
          }
        `}
      </style>
    </Layout>
  );
}
