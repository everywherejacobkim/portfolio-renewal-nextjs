import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import TextBlock from '../components/textBlock';
import Contact from '../components/contact/Contact';

type Props = {}

const index = (props: Props) => {
  return (
    <div className='bg-primary-400 bg-space-pattern'>
      <Header />
      <div className="flex justify-center pt-12 pb-8 md:pt-24 md:-mb-16">
        <TextBlock textColor="text-gray-100" text="Looking for a partner to bring your ideas to life? I'm HERE TO HELP! Contact me Using the form below and let's create something amazing together."/>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default index