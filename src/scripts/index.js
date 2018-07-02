import '../styles/index.scss';


import {
  getEntries
} from './api';


const htmlSubscription = getEntries
  .subscribe(response => {
    console.log(response)
    //renderPage(response);
  });