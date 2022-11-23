import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>ABOUT</h1>
        <h1 className={styles.title}>
          {/*Welcome to <a href="https://nextjs.org">Next.js!</a>*/}
          Ir a <Link rel="stylesheet" href="/">Home!</Link>

        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>

      </main>
    </div>
  )
}
