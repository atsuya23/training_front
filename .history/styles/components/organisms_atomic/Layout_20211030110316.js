import Head from "next/head";

import Header from "../molecules_atomic/Header";
import Footer from "../molecules_atomic/Footer";
import StateContextProvider from "../atoms_atomic/func/StateContext";

export default function Layout({ children, title = "Default title" }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <StateContextProvider>{children}</StateContextProvider>
      <Footer />
    </div>
  );
}
