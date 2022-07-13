import {useReducer, useState} from 'react';


import {Header} from './Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





export const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
     const submitForm= (e)=>{
        console.log(firstName, lastName, email);
        e.preventDefault();
        
       
     }
     const handleChange = (input) =>{
        console.log(input);
     }
    return (
        <>
        <Header />
        <h3>Contact Us</h3>
        <form onSubmit={submitForm}>
        <input type="text" value={firstName}  placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)}/>
        <input type="text" value={lastName}  placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)}/>
        <input type="email" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
        <button type="submit">Add Item</button>
        </form>
        </>
    )
}