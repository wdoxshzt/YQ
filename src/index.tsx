import React from 'react';
import ReactDOM from 'react-dom/client';
import Person from './models/Person';
import Summary from 'models/Summary';
import MyForm from './models/forms';
import MyComponent from 'models/Test';
import { MySwiper } from 'models/SwiperText';
import './style.theme.scss';
import { StickyTest } from 'models/StickyTest';
import { DropDown } from 'models/Dropdown';
import { TripDetails } from 'models/Print';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <MyForm />
    <Person />
    <Summary />
    <Person />
    <MyComponent />
    <MySwiper />
    <DropDown /> */}
    <TripDetails />
  </React.StrictMode>
);
