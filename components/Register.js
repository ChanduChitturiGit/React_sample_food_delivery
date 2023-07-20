import axios from "axios";
import { useState } from "react";
import "../components/Registration.css";
import { Link } from "react-router-dom";


function Register() {
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

    const [pUseName, setpUserName] = useState('');
    const [pPassword, setpPassword] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/User/signUp",
                {

                    userName: pUseName,
                    password: pPassword


                });
            await axios.post("http://localhost:8080/customer/addCustomer",

                {
                    firstName: pFirstName,
                    lastName: pLastName,
                    age: pAge,
                    gender: pGender,
                    mobileNumber: pMobileNumber,
                    email: pEmail,
                    userId: pUserId,
                    buildingName: pBuildingName,
                    streetNo: pStreetNo,
                    city: pCity,
                    state: pState,
                    country: pCountry,
                    pincode: pPincode,
                }
            );



            alert("User Registation Successfully");

            setpFirstName("");
            setpLastName("");
            setpAge("");
            setpGender("");
            setpMobileNumber("");
            setpEmail("");

            setpUserId("");
            setpBuildingName("");
            setpStreetNo("");
            setpCity("");
            setpState("");
            setpCountry("");
            setpPincode("");
            setpUserName("");
            setpPassword("");


        }
        catch (err) {
            alert("User Registation Failed");
        }
    }
    return (
        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>

                <h1>Register</h1>
                <p>Fill in the Information Below</p>

                <input type="text"
                    name="FirstName"
                    placeholder="FirstName"

                    onChange={(event) => {
                        setpFirstName(event.target.value);
                    }}
                />

                <input type="text"
                    name="LastName"
                    placeholder="LastName"
                    onChange={(event) => {
                        setpLastName(event.target.value);
                    }}
                />


                <input type="text"
                    name="Age"
                    placeholder="Age"
                    onChange={(event) => {
                        setpAge(event.target.value);
                    }}
                />

                <input type="text"
                    name="Gender"
                    placeholder="Gender"
                    onChange={(event) => {
                        setpGender(event.target.value);
                    }}
                />

                <input type="text"
                    name="MobileNumber"
                    placeholder="MobileNumber"
                    onChange={(event) => {
                        setpMobileNumber(event.target.value);
                    }}
                />

<input type="text"
                    name="Email"
                    placeholder="Enter Email"
                    onChange={(event) => {
                        setpEmail(event.target.value);
                    }}
                />


                <input type="text"
                    name="userid"
                    placeholder="userid"
                    onChange={(event) => {
                        setpUserId(event.target.value);
                    }}
                />

                <input type="text"
                    name="Building"
                    placeholder="Building"
                    onChange={(event) => {
                        setpBuildingName(event.target.value);
                    }}
                />

                <input type="text"
                    name="street"
                    placeholder="street"
                    onChange={(event) => {
                        setpStreetNo(event.target.value);
                    }}
                />

                <input type="text"
                    name="city"
                    placeholder="city"
                    onChange={(event) => {
                        setpCity(event.target.value);
                    }}
                />

                <input type="text"
                    name="state"
                    placeholder="state"
                    onChange={(event) => {
                        setpState(event.target.value);
                    }}
                />

                <input type="text"
                    name="country"
                    placeholder="country"
                    onChange={(event) => {
                        setpCountry(event.target.value);
                    }}
                />

                <input type="text"
                    name="pincode"
                    placeholder="pincode"
                    onChange={(event) => {
                        setpPincode(event.target.value);
                    }}
                />

                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(event) => {
                        setpUserName(event.target.value);
                    }}
                />

                <input type="text"
                    name="password"
                    placeholder="password"
                    onChange={(event) => {
                        setpPassword(event.target.value);
                    }}
                />

                <button type="submit" ><Link to="/">REGISTER</Link></button>
            </form>
        </div>

    )
}
export default Register;