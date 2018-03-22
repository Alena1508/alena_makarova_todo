import React from 'react';
import { Navigation } from '../Navigation';

import  './header.scss';


export const Header = () => (
  <header className={'header'}>
    <a href={'#'}>Logo</a>
    <Navigation />
  </header>
);