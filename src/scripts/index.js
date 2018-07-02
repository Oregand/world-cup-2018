import '../styles/index.scss';


import {
  getEntries
} from './api';

import {
  renderPage
} from './modules/render';


const htmlSubscription = getEntries
  .subscribe(response => {
    renderPage(response);
  });