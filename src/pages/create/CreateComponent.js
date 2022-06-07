import React, { useEffect } from 'react'
import NavBar from '../../components/Navigation/NavBar'
import { useState } from 'react';

export default function CreateComponent() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [salary, setSalary] = useState("");
    const [mobile, setMobile] = useState("");

    useEffect(() => {
        console.log("useEffect called")
    }, []);

    return (
        <div>
            <NavBar /><br></br>
            <h2>hello</h2>
            <input placeholder='Enter Name' value={name} onChange={(e) => { setName(e.target.value) }} /><br></br><br></br>
            <input placeholder='Enter Address' value={address} onChange={(e) => { setAddress(e.target.value) }} /><br></br><br></br>
            <input placeholder='Enter Age' value={salary} onChange={(e) => { setSalary(e.target.value) }} /><br></br><br></br>
            <input placeholder='Enter Mobile' value={mobile} onChange={(e) => { setMobile(e.target.value) }} /><br></br><br></br>
            <button type="button" class="btn btn-success" onClick={() => { console.log(name, address, salary, mobile) }}>Success</button>
        </div>
    )
}
