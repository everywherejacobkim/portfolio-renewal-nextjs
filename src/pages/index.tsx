import Header from './components/header';
import Footer from './components/footer';
import MainFigure from './components/mainFigure';
import Jumbotron from './components/jumbotron/jumbotron';
import JumbotronImage from '../../public/assets/images/j2.jpg';
import ProjectSlider from './components/slider/ProjectSlider';
import Contact from './components/contact/Contact';
import TextBlock from './components/textBlock';
import project1 from '../../public/assets/images/projects/handyChef.png';
import project2 from '../../public/assets/images/projects/pomodee.png';
import project3 from '../../public/assets/images/projects/myDailynote.png';
import { FaTools } from 'react-icons/fa';

const projectImages = [
  project1,
  project2,
  project3,
]

export default function Home() {
  return <>
    <Header />
    <main className="flex flex-col items-center justify-between pt-4 bg-space-pattern bg-primary-300">
      <MainFigure />
      <Jumbotron title="YOU CAN’T GO BACK AND CHANGE THE BEGINNING BUT, YOU CAN START WHERE YOU ARE AND CHANGE THE ENDING" description="- C.S. Lewis" image={JumbotronImage} imagePosition="right" fontColor="text-red-100" btnLabel='About Me' btnColor="bg-blue-300" btnTextColor='text-blue-900' />
      <div className="mt-24 md:mt-52 mb-8"> 
        <div className="flex justify-center items-center gap-2 md:gap-4 md:mb-6">
          <h1 className='text-3xl md:text-5xl text-center my-8 text-white font-bold'>MY WORKS</h1>
          <FaTools className="text-white text-2xl md:text-4xl" />
        </div>
        <ProjectSlider />
      </div>
      <TextBlock text="Looking for a partner to bring your ideas to life? I'm HERE TO HELP! Contact me Using the form below and let's create something amazing together."/>
      <Contact />
    </main>
    <Footer />
  </>
}
