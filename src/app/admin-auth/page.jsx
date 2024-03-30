"use client"
import React from 'react'
import { useState } from 'react';
import './login.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
// const router = useRouter();
import Navbar from '../../Components/Navbar';
import Aboutus from '@/Components/Aboutus';
import Footer from '@/Components/Footer';

const AdministratorLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [isloading, setIsloading] = useState(false)

    const Userlogin = async (e) => {
        e.preventDefault();
        setIsloading(true);
        setEmail('');
        setPassword('');
        setPhonenumber('');
        console.log('testf');

        const response = await fetch('http://localhost:4000/admin/signin', {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password, phonenumber })
        })
        const userdata = await response.json()
        if (!response.ok) {
            setIsloading(false)
            alert("Either the Email or password in incorrect or YOU ARE NOT AN ADMIN ❌")
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(userdata))
            setIsloading(false)
            window.location.href = "/home";
        }
        // const customer_id = userdata.Customer._id
        // const merchant = await fetch('http://localhost:4000/order/near', {
        //     method: "POST",
        //     headers: { 'Authorization': `Bearer ${userdata.token}` },
        //     body: JSON.stringify({ customer_id })
        // })

        // const merchants = await merchant.json()
        // if (!merchant.ok) {
        //     setIsloading(false)
        // }
        // if (merchant.ok) {
        //     localStorage.setItem('merchants', JSON.stringify(merchants))
        //     setIsloading(false)
        // }
        // console.log(userdata)
        // console.log(merchants)
    }

    return (

        <>
            <main id='login ' >
                <Navbar />
                <div className='flex justify-center items-center heroBg '>

                    <div className="container  ">
                        <div className="heading">Admin Login</div>
                        <form action="" className="form flex flex-col">
                            <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                            <input required="" className="input" type="password" name="password" id="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                            <input required="" className="input" type="tel" name="phone" id="phonenumber" placeholder="Phone Number" onChange={(e) => { setPhonenumber(e.target.value) }} value={phonenumber} />
                            <span className="forgot-password"><a href="/userSignup">Dont have any account : Signup here!</a></span>
                            <button className="login-button" type="submit" disabled={isloading} onClick={Userlogin}>Login</button>

                        </form>

                        <span className="agreement"><a href="#">Learn user licence agreement</a></span>
                    </div>
                </div>
            </main>
            <Aboutus />
            <Footer />
        </>
    )
}

export default AdministratorLogin;