
import { createRoot } from 'react-dom/client'
import {Lay} from './Lay';
import {BrowserRouter} from 'react-router-dom';





createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Lay/>  
 </BrowserRouter>
);
//Home