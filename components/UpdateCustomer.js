import React, { useState, useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { getCustomerById, updateCustomer } from '../services/CustomerService';

function UpdateCustomer() {

const[pCustomerId,setpCustomerId]=useState('');
    const [pFirstName, setpFirstName] = useState('');
    const [pLastName, setpLastName] = useState('');
    const [pAge, setpAge] = useState('');
    const [pGender, setpGender] = useState('');
    const [pMobileNumber, setpMobileNumber] = useState('');
    const [pEmail, setpEmail] = useState('');
    const [pUserId, setpUserId] = useState('');
    const [pBuildingName, setpBuildingName] = useState('');
    const [pStreetNo, setpStreetNo] = useState('');
    const [pCity, setpCity] = useState('');
    const [pState, setpState] = useState('');
    const [pCountry, setpCountry] = useState('');
    const [pPincode, setpPincode] = useState('');


    const { id } = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        getCustomerById(id).then(resp => {
            setpCustomerId(resp.data.customerId);
            setpFirstName(resp.data.firstName);
            setpLastName(resp.data.lastName);
            setpAge(resp.data.age);
            setpGender(resp.data.gender);
            setpMobileNumber(resp.data.mobileNumber);
            setpEmail(resp.data.email);
            setpUserId(resp.data.userId);
            setpBuildingName(resp.data.buildingName);
            setpStreetNo(resp.data.streetNo);
            setpCity(resp.data.city);
            setpState(resp.data.state);
            setpCountry(resp.data.country);
            setpPincode(resp.data.pincode);



            
        });
    }, [id])


    const handleSubmit = () => {

        const payload = {

            customerId:pCustomerId,
            firstName: pFirstName,
            lastName: pLastName,
            age:pAge,
            gender:pGender,
            mobileNumber: pMobileNumber,
            email: pEmail,
            userId:pUserId,
            buildingName:pBuildingName,
            streetNo:pStreetNo,
            city:pCity,
            state:pState,
            country:pCountry,
            pincode:pPincode,
            

        }

        updateCustomer(payload).then(resp => navigate(-1)).catch(error=>console.log("something went wrong"))
    }

    return (
        <div>
            <div>
                <h1>Add Customer</h1>
            </div>

            <div>
                <label>Customer Id</label>
                <input type="text" id="pCustomerId" name="pCustomerId" value={pCustomerId} disabled></input>
            </div>


            <div>
                <label>FirstName</label>
                <input type="text" id="pFirstName" name="pFirstName" value={pFirstName} onChange={e => setpFirstName(e.target.value)}></input>
            </div>

            <div>
                <label>LastName</label>
                <input type="text" id="pLastName" name="pLastName" value={pLastName} onChange={e => setpLastName(e.target.value)}></input>
            </div>

            <div>
                <label>Age</label>
                <input type="text" id="pAge" name="pAge" value={pAge} onChange={e => setpAge(e.target.value)}></input>
            </div>

            <div>
                <label>Gender</label>
                <input type="text" id="pGender" name="pGender" value={pGender} onChange={e => setpGender(e.target.value)}></input>
            </div>

            <div>
                <label>Mobile Number</label>
                <input type="text" id="pMobileNumber" name="pMobileNumber" value={pMobileNumber} onChange={e => setpMobileNumber(e.target.value)}></input>
            </div>

            <div>
                <label>Email</label>
                <input type="text" id="pEmail" name="pEmail" value={pEmail} onChange={e => setpEmail(e.target.value)}></input>
            </div>

            <div>
                <label>UserId</label>
                <input type="text" id="pUserId" name="pUserId" value={pUserId} onChange={e => setpUserId(e.target.value)}></input>
            </div>

            <div>
                <label>Building Name</label>
                <input type="text" id="pBuildingName" name="pBuildingName" value={pBuildingName} onChange={e => setpBuildingName(e.target.value)}></input>
            </div>

            <div>
                <label>StreetNo</label>
                <input type="text" id="pStreetNo" name="pStreetNo" value={pStreetNo} onChange={e => setpStreetNo(e.target.value)}></input>
            </div>

            <div>
                <label>City</label>
                <input type="text" id="pCity" name="pCity" value={pCity} onChange={e => setpCity(e.target.value)}></input>
            </div>

            <div>
                <label>State</label>
                <input type="text" id="pLState" name="pState" value={pState} onChange={e => setpState(e.target.value)}></input>
            </div>

            <div>
                <label>Country</label>
                <input type="text" id="pCountry" name="pCountry" value={pCountry} onChange={e => setpCountry(e.target.value)}></input>
            </div>

            <div>
                <label>Pincode</label>
                <input type="text" id="pPincode" name="pPincode" value={pPincode} onChange={e => setpPincode(e.target.value)}></input>
            </div>
            

            <div>
                <button onClick={handleSubmit}>Update</button>
            </div>
        </div>

    )

}

export default UpdateCustomer;