import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from './components/header/header';

//First Test
configure({ adapter: new Adapter() });
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

//Second Test
it('header snapshot should render correctly', () => {
  const sidebar = shallow(<Header />);
  expect(sidebar).toMatchSnapshot();
});
