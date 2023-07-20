import React, { useEffect, useState } from 'react';

import {Link} from 'react-router-dom';
import { listOfCustomers,} from '../services/CustomerService';


function ListOfCustomers() {

    const [customers, setCustomers] = useState([]);

    

    
    useEffect(()=> {
        listOfCustomers().then(resp=> setCustomers(resp.data));
    },[])




    return(
        <div>
              <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="thead-dark">
                        <div className='container'>
                
                <button type="button" class="btn btn-warning"><Link to={`/AddCustomer`}>AddCustomer</Link></button>
            </div>
                        <tr>
                            <th>CustomerId</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>MobileNumber</th> 
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map(p =>
                                    <tr>
                                        <td>{p.customerId}</td>
                                    <td>{p.firstName}</td>
                                    <td>{p.lastName}</td>
                                    <td>{p.email}</td>
                                    <td>{p.mobileNumber}</td>
                                        <td><button type="button" class="btn btn-warning"><Link to={`/GetCustomerById/${p.customerId}`}>View</Link></button>
                                        <button type="button" class="btn btn-warning"><Link to={`/updateCustomer/${p.customerId}`}>Update</Link></button>
                                        </td>

                                        
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>

        </div>
    )
}

export default ListOfCustomers;