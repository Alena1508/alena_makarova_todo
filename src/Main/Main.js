import React from 'react';
import { Aside } from '../Aside';
import { Content } from '../Content';


import  './main.scss';

export const Main = () => (
  <main className={'main'}>
    <Aside/>
    <Content />
  </main>
);
