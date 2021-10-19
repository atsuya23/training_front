import Head from "next/head";
import Header from "../molecules_atomic/Header";
import Footer from "../molecules_atomic/Footer";

export default function Layout({ children, title = "Default title" }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
