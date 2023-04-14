import Header from './components/header';
import Jumbotron from './components/jumbotron/jumbotron';
import Footer from './components/footer';
import MainFigure from './components/mainFigure';
import Contact from './components/contact/Contact';

export default function Home() {
  return <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between pt-4 bg-space-pattern bg-primary-300">
      <MainFigure />
      <Contact />
    </main>
    <Footer />
  </>
}
