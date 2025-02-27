import React from 'react';
import Head from 'next/head';
import Layout from './components/layout';
import AboutMe from './components/aboutme';
import {ReactTyped} from 'react-typed';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Leo's website</title>
        <meta name='description' content="Leo's website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <section
          className='intro-section'
          style={{backgroundImage: "url('/capybara.jpg')"}}>
          <div className='text-center'>
            <h1 className='text-4xl font-bold'>
              I am a{' '}
              <ReactTyped
                strings={['student.', 'tech enthusiast.', 'programmer.']}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h1>
            <p className='mt-4 font-extrabold'>
              Prev @ AMD, Based in California
            </p>
          </div>
        </section>

        <main className='container mx-auto px-4 py-8'>
          <AboutMe />
        </main>

        {/* <main className='container mx-auto px-4 py-8'>
          <Projects />
        </main> */}
      </Layout>
    </div>
  );
};

export default Home;
