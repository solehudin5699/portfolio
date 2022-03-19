import React from 'react';
import Header from '../../components/header';
import About from '../../components/about';
import Projects from '../../components/projects';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import FAB from '../../components/fab';

export default function Index() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <FAB />
    </>
  );
}
