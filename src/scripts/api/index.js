import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';


const getEntries = Observable
  .ajax('http://localhost:9000/entries')
  .map(e => e.response)
  .retry(2)
  .catch(err => []);

  export {
    getEntries
  };