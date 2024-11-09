"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import Hero3 from '@/components/Hero3';
import Hero4 from '@/components/Hero4';
import InputDetails from '@/components/InputDetails';
import InterviewPage from '@/components/InterviewPage';
import Head from 'next/head';
import { MockQuestionsProvider } from '../../utils/MockQuestionsContext';

export default function Home() {
  return (
    <MockQuestionsProvider>
    <>
    
      <Head>
        <title>Helping Founders Succeed | Slidebean Clone</title>
        <meta name="description" content="Start your business with ease using AI pitch deck software." />
      </Head>
      {/* <Header />
      <Hero/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Footer/> */}
      {/* <InterviewPage/> */}
      {/* <InputDetails/> */}


      
    </>
    </MockQuestionsProvider>
  );
}




