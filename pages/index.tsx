import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Main page</title>
        <meta name="description" content="Simple order manager for shopify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Hello World!
        </h1>
      </main>
    </>
  )
}

export default Home
