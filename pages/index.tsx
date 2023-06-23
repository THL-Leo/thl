import Head from 'next/head';

import Header from './components/topbar';
import ThemeSwitch from './components/themeswitch';

export default function Home() {
  return (
    <div>
      <Head>
        <title>THL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </div>
  );
}
