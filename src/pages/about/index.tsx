import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutMe from '../components/aboutMe/AboutMe';

type Props = {}

const index = (props: Props) => {
  return <div>
    <Header />
    <AboutMe />
    <Footer />
  </div>
}

export default index