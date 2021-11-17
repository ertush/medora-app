import Head from 'next/head'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Phem-agri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Heading */}
      <Header />
      {/* Body */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    
      </main>
      {/* Footer */}

      {/* <footer className="flex items-center justify-center w-full h-40 bg-dark-green">
       
      </footer> */}
    </div>
  )
}
