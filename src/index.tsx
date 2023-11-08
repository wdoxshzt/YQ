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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const intoView = (value:any) => {
//   const policy = document.getElementById('policySummary');
//   if (value) {
//     const top = policy!.offsetTop;
//       window.scrollTo(0, top + 120);
//   }
// };
root.render(
  <React.StrictMode>
    {/* <Person />
    <Summary /> */}
    <Person />
    <MyForm />
    <MyComponent />
    <MySwiper />
    <StickyTest />
    <DropDown />
  </React.StrictMode>
);
