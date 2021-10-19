import Head from "next/head";
import Header from "../molecules_atomic/Header";
import Footer from "../molecules_atomic/Footer";

export default function Layout({ children, title = "Default title"}) {
    return (
        <div className="bg-gray-200">
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
        </div>
    )
}