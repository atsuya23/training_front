import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "Default title"}) {
    return (
        <>
        {/* <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-500"> */}
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            {/* <main className="flex flex-1 justify-center items-center w-screen flex-col"> */}
                {children}
            {/* </main> */}
            <Footer />
        {/* </div> */}
        </>
    )
}