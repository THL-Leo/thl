import Head from 'next/head';
import Layout from './components/layout';
import AboutMe from './components/aboutme';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>THL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AboutMe />
    </Layout>
  );
}
