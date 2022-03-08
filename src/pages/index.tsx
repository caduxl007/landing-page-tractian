import type { NextPage } from 'next';
import Head from 'next/head';

import { Button, Header } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Tractian</title>
      </Head>

      <Button>
        Demonstração
      </Button>
    </>
  );
};

export default Home;
