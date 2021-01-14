import Head from 'next/head'
import Styles from '../styles/pages/index.module.scss'
import Layout from '../components/Layout'

export default function Home() {
    return (
        <>
        <Head>
            <title>NextJS Website Template</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <section className={Styles.intro_section}>
                <h1>Home page</h1>
            </section>
        </Layout>
        </>
    )
}
