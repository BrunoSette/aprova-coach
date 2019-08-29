import React from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Fazemos from './components/fazemos/fazemos';
import Metodologia from './components/metodologia/metodologia';
import Agende from './components/agende/agende';
import Apresentacao from './components/apresentacao/apresentacao';
import TestimonialsVideos from './components/testimonialsVideos/testimonialsVideos';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import { Mixpanel } from '../src/Mixpanel';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-144564616-1');
ReactGA.pageview(window.location.pathname + window.location.search);

Mixpanel.track('View Home Page');

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Fazemos />
      <Metodologia />
      <Agende />
      <Apresentacao />
      <TestimonialsVideos />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
