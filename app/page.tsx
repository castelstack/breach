
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './containers/Hero';
import Posts from './containers/Posts';

export default function Home() {
  return (
    <main className='grid grid-cols-1'>
      <Header />
      <Hero/>
      <Posts/>
      <Footer/>
    </main>
  );
}
