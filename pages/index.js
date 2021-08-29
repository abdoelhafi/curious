import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Select from './components/Select'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>curious</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to  "CURIOUS" ! Discover more about people you are intersted in easily 
        </h1>
        <Select />
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
        >
          Made with Love by Abdoelhafi 
        </a>
      </footer>
    </div>
  )
}
