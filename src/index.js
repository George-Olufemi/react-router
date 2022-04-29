import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import App from './App';
import Expenses from './Expenses';
import Invoices from './Invoices';
import Contact from './Contact';

ReactDOM.render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="expenses" element={<Expenses />} />
  <Route path="invoices" element={<Invoices />} />
  <Route path="contact" element={<Contact />} />
</Routes>
</BrowserRouter>, 
document.getElementById('root'));