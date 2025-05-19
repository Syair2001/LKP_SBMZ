import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import HeroSection from './components/HeroSection';
import ProgramSection from './components/Program_Section';
import TentorSection from './components/TensorSection';
import VisiMisiSection from './components/VisiMisiSection';
import AboutSection from './components/AboutSection'
import TestimoniSection from './components/TestimoniSection';
import FAQSection from './components/FAQSection';


const Home = () => {
  return (
    <div>
      <Head>
        <title>Smart Bimbel MZ</title>
        <meta name="description" content="Smart Bimbel MZ - Memajukan Pendidikan Generasi Muda Indonesia" />
      </Head>

      <Navbar />
      <HeroSection />
      <ProgramSection />
      <TentorSection />
      <VisiMisiSection />
      <AboutSection />
      <TestimoniSection />
      <FAQSection />

      <Footer />
    </div>
  );
};

export default Home;
