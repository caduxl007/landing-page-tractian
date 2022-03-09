import type { NextPage } from 'next';
import Head from 'next/head';

import { Button, Header } from 'components';
import { HomeTemplate } from 'templates/HomeTemplate';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Tractian</title>
      </Head>

      <HomeTemplate />
    </>
  );
};

export default Home;
