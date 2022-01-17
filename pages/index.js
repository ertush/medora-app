import Head from "next/head";
import Header from "../components/Header";
import { Windmill } from '@windmill/react-ui'
import medoraTheme from "../assets/medoraTheme";


export default function Home() {
  return (
    <Windmill theme={medoraTheme}>
    <div className="w-full flex-1 flex-col center-content min-h-screen py-2">
      <Head>
        <title>Medora Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Body */}
    
      <main className="w-full mx-auto">
        {/* Heading */}
        <Header />
      </main>
    </div>
    </Windmill>
  );
}
