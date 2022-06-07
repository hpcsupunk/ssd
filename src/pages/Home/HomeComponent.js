import NavBar from '../../components/Navigation/NavBar'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

export default function HomeComponent() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [students, setStudents] = useState([]);

    useEffect(() => {
        console.log("useEffect called");
        getStudents();
    }, []);

    const addStudent = async () => {
        // console.log(name + " " + address + " " + age + " " + mobile + " " + email);
        // Add a new document with a generated id.
        //await kiy ana eka dammoth uda ekata aniwaren async kiyan eka denna ona,data hold wena seen ekk tiyelu etakota hodai
        const docRef = await addDoc(collection(db, "Students"), {
            address: address,
            name: name,
            mobile: mobile,
            age: age,
            email: email

        }).then(() => {
            console.log("data added");
            alert("Data Added!");
            clearTexts();
            //add karana data correct nm .then yatate penwai//
        }).catch(() => {
            console.log("try again");
            alert("Invalid!");
            //add karana data wala error ekk nm .catch yatate penwai//
        });
    }

    const deleteStudent = async()=>{
        await deleteDoc(doc(db, "Students", "60ZGvd0mALtTMZCkxMDk"))
        .then(() =>{
            alert("Student Delete !")
        }).catch(()=>{
            alert("Delete Failed !")
        });

    }

    const getStudents = async () => {
        const querySnapshot = await getDocs(collection(db, "Students"));
        setStudents(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));
        console.log(students);
    }

    const clearTexts = () => {
        setEmail(' ');
        setName(' ');
        setAddress(' ');
        setAge(' ');
        setMobile(' ');
    }

    return (
        <div className='container'>
            <NavBar header="Home" />
            <div className='row'>
                <div className='col'><br></br>
                    <h2><b>Please Fill Below Form</b></h2><br></br>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"  >Enter Your Name</label>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="A.B.Siripala" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Enter Your Address</label>
                        <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="colombo" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Enter Your Age</label>
                        <input type="email" value={age} onChange={(e) => { setAge(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="25" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Enter Your Mobile Number</label>
                        <input type="email" value={mobile} onChange={(e) => { setMobile(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="0XX-XXX-XXXX" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Enter Your Email address</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com" />
                    </div>
                    <button type="button" class="btn btn-success" onClick={addStudent}>Save</button>
                    <button type="button" class="btn btn-danger" style={{marginLeft:490}} onClick={deleteStudent}>Delete</button>

                </div>
                <div className='col'>
                    <h2><b>Congratulations!!! These are winners</b></h2><br></br>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map(student =>{
                                    return(
                                        <tr>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.address}</td>
                                            <td>{student.mobile}</td>
                                        </tr>                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}