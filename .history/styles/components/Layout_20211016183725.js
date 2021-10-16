import Head from "next/head";
import { Header } from "./Header";

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
            <footer className="w-full h6 justify-center text-gray-500 text-sm">
                @Record Training by A.Wata
            </footer>
        {/* </div> */}
        </>
    )
}