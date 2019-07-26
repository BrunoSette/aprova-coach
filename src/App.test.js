import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';
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
import toJson from 'enzyme-to-json';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

it('metodologia has a H1', function() {
  expect(
    shallow(<Metodologia />).contains(
      <h1 className="text-center">
        Consultoria especializada que vai multiplicar suas chances de ser
        aprovado!
      </h1>
    )
  ).toBe(true);
});

it('banner is showing the header', function() {
  expect(
    shallow(<Banner />).contains(
      <div className="banner">
        <h1 className="header">Sua Coach Para Concursos</h1>
        <h4 className="subheader">Maximize o Resultado dos Seus Estudos</h4>
      </div>
    )
  ).toBe(true);
});

it('button is showing the header', function() {
  expect(
    shallow(<ButtonAgendeSessao />).contains(
      <div className="text-align: center">
        <Link to="/agendamento" target="_blank">
          <Button variant="danger" size="lg">
            Agende Sessão Grátis!
          </Button>
        </Link>
      </div>
    )
  ).toBe(true);
});

it('contact should have a class ".padding-top-80"', function() {
  expect(shallow(<Contact />).is('.padding-top-80')).toBe(true);
});

it('banner should mount in a full DOM with 1 H1', function() {
  expect(mount(<Banner />).find('h1').length).toBe(1);
});

it('should render to static HTML', function() {
  expect(render(<Banner />).text()).toContain('Sua Coach Para Concursos');
});

it('renders without crashing', () => {
  shallow(<App />);
});

//Snapsot Tests
it('header snapshot renderered correctly', () => {
  const header = shallow(<Header />);
  expect(toJson(header)).toMatchSnapshot();
});
it('banner snapshot renderered correctly', () => {
  const banner = shallow(<Banner />);
  expect(toJson(banner)).toMatchSnapshot();
});
it('fazemos snapshot renderered correctly', () => {
  const fazemos = shallow(<Fazemos />);
  expect(toJson(fazemos)).toMatchSnapshot();
});
it('metodologia snapshot renderered correctly', () => {
  const metodologia = shallow(<Metodologia />);
  expect(toJson(metodologia)).toMatchSnapshot();
});
it('agende snapshot renderered correctly', () => {
  const agende = shallow(<Agende />);
  expect(toJson(agende)).toMatchSnapshot();
});
it('apresentacao snapshot renderered correctly', () => {
  const apresentacao = shallow(<Apresentacao />);
  expect(toJson(apresentacao)).toMatchSnapshot();
});
it('testimonial videos snapshot renderered correctly', () => {
  const testimonial = shallow(<TestimonialsVideos />);
  expect(toJson(testimonial)).toMatchSnapshot();
});
it('testimonials snapshot renderered correctly', () => {
  const testimonials = shallow(<Testimonials />);
  expect(toJson(testimonials)).toMatchSnapshot();
});
it('contact snapshot renderered correctly', () => {
  const contact = shallow(<Contact />);
  expect(toJson(contact)).toMatchSnapshot();
});
it('footer snapshot renderered correctly', () => {
  const footer = shallow(<Footer />);
  expect(toJson(footer)).toMatchSnapshot();
});
it('buttonAgendeSessao snapshot renderered correctly', () => {
  const buttonAgendeSessao = shallow(<ButtonAgendeSessao />);
  expect(toJson(buttonAgendeSessao)).toMatchSnapshot();
});
it('agendamento snapshot renderered correctly', () => {
  const agendamento = shallow(<Agendamento />);
  expect(toJson(agendamento)).toMatchSnapshot();
});
