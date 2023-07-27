import Head from 'next/head';

import NavigationBar from './components/topbar';
import AboutMe from './components/aboutme';
import MyFooter from './components/footer';

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>THL</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <NavigationBar />
      </div>
      <div>
        <AboutMe />
        <MyFooter />
      </div>
    </>
  );
}
