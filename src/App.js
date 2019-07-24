import React from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Fazemos from './components/fazemos/fazemos';
import Metodologia from './components/metodologia/metodologia';
import Agende from './components/agende/agende';
import Apresentacao from './components/apresentacao/apresentacao';
import Vantagens from './components/vantagens/vantagens';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Fazemos />
      <Metodologia />
      <Agende />
      <Apresentacao />
      <Vantagens />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
