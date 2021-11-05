import type { NextPage } from 'next';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import { About } from '../page-components/home/About';
import { Banner } from '../page-components/home/Banner';
import { Benefits } from '../page-components/home/Benefits';
import { Contact } from '../page-components/home/Contact';
import { Footer } from '../page-components/home/Footer';
import { Header } from '../page-components/home/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vortex Tecnologia</title>
        <meta name="description" content="Fábrica de Software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <main>
          <Banner />
          <About />
          <Benefits />
          <Contact />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Home;

const Container = styled.div`
  padding: 0 100px;
  min-height: 100vh;
  ${props => css`
    background-color: ${props.theme.background};
    transition: background-color .3s linear;
  `};

  @media(max-width: 940px) {
    padding: 0;
  }
`;
