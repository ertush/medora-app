import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-full flex-1 flex-col center-content min-h-screen py-2">
      <Head>
        <title>Phem-agri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body */}
    
      <main className="w-full mx-auto">
        {/* Heading */}
        <Header />
      </main>
    </div>
  );
}
