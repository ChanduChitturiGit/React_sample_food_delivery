import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

import ListOfCustomers from './components/ListOfCustomers';
import GetCustomerById from './components/GetCustomerById';
import AddCustomer from './components/AddCustomer';
import Register from './components/Register';
import UpdateCustomer from './components/UpdateCustomer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
               
          <Route path="/" element={<ListOfCustomers />} />   
          <Route path="/getCustomerById/:id" element={<GetCustomerById/>} />    
          <Route path="/AddCustomer" element={<AddCustomer/>} />    
          <Route path="/Register"  element={<Register/>} />  
          <Route path="/updateCustomer/:id"  element={<UpdateCustomer/>} />  
          
          
        </Routes>
      </Router>     
    </div>
  );
}

export default App;