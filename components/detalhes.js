import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

let siteTitle = "Agenda"

export default function Detalhes({ info }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            {info && (
                <div>
                    <h2 className={utilStyles.text}>Hobby: </h2>
                    <h3 className={utilStyles.text}>{info.hobby}</h3><br />
                    <h2 className={utilStyles.text}>Idade: </h2>
                    <h3 className={utilStyles.text}>{info.idade}</h3><br />
                    <h2 className={utilStyles.text}>Profissão: </h2>
                    <h3 className={utilStyles.text}>{info.profissao}</h3><br />
                    <h2 className={utilStyles.text}>E-mail: </h2>
                    <h3 className={utilStyles.text}>{info.email}</h3><br />
                    <div className={styles.backToHome}>
                        <Link href="/">← Back to home</Link>
                    </div>
                </div>
            )}

        </div>
    )
}
