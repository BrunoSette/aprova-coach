import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
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
import ButtonAgendeSessao from './components/buttonAgendeSessao/buttonAgendeSessao';
import Agendamento from './pages/agendamento';

configure({ adapter: new Adapter() });

//First Test
it('renders without crashing', () => {
  shallow(<App />);
});

//Second Test
it('header snapshot renderered correctly', () => {
  const sidebar = shallow(<Header />);
  expect(sidebar).toMatchSnapshot();
});
it('banner snapshot renderered correctly', () => {
  const sidebar = shallow(<Banner />);
  expect(sidebar).toMatchSnapshot();
});
it('fazemos snapshot renderered correctly', () => {
  const sidebar = shallow(<Fazemos />);
  expect(sidebar).toMatchSnapshot();
});
it('metodologia snapshot renderered correctly', () => {
  const sidebar = shallow(<Metodologia />);
  expect(sidebar).toMatchSnapshot();
});
it('agende snapshot renderered correctly', () => {
  const sidebar = shallow(<Agende />);
  expect(sidebar).toMatchSnapshot();
});
it('apresentacao snapshot renderered correctly', () => {
  const sidebar = shallow(<Apresentacao />);
  expect(sidebar).toMatchSnapshot();
});
it('testimonial videos snapshot renderered correctly', () => {
  const sidebar = shallow(<TestimonialsVideos />);
  expect(sidebar).toMatchSnapshot();
});
it('testimonials snapshot renderered correctly', () => {
  const sidebar = shallow(<Testimonials />);
  expect(sidebar).toMatchSnapshot();
});
it('contact snapshot renderered correctly', () => {
  const sidebar = shallow(<Contact />);
  expect(sidebar).toMatchSnapshot();
});
it('footer snapshot renderered correctly', () => {
  const sidebar = shallow(<Footer />);
  expect(sidebar).toMatchSnapshot();
});
it('buttonAgendeSessao snapshot renderered correctly', () => {
  const sidebar = shallow(<ButtonAgendeSessao />);
  expect(sidebar).toMatchSnapshot();
});
it('agendamento snapshot renderered correctly', () => {
  const sidebar = shallow(<Agendamento />);
  expect(sidebar).toMatchSnapshot();
});
