import Auth from "../styles/components/Auth";
import Layout from "../styles/components/Layout";

export default function Home() {
  console.log(process.env.MEXT_PUBLIC_RESTAPI_URL)
  return (
    <Layout title="Record Training : Login">
      <Auth />
    </Layout>
  );
}
