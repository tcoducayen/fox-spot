import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fox Spot</title>
        <meta name="description" content="A web app made for Nova" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cute-fox.jpg" />
      </Head>
      <main className={styles.main}>
      
        <div className={styles.description}>  {/* Header */}
          <p>
            Web App Developer
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/Header-Logo.png"
                alt="Vulpine Header"
                className={styles.foxLogo}
                width={100}
                height={33}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}> {/* Center */}
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}> {/* Grid at bottom */}
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Projects I have worked on.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Experience <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              The types of work I have participated.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Portfolio <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Art and icons from various sources.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Fun <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Click to find out.
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
