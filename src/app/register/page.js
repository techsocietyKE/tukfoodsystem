'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'
import Link from 'next/link';
export default function RegisterPage() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [fullname,setFullname] = useState('');
  const [phonenumber,setPhonenumber] = useState('');
  const [creatingUser,setCreatingUser] = useState(false);


   const router = useRouter();
  function handleFormSubmit(ev){
    ev.preventDefault();
    setCreatingUser(true)
    try {
      fetch('/api/register', {
        method:'POST',
        body:JSON.stringify({email,password,fullname,phonenumber}),
        headers:{'Content-Type':'application/json'}
      })
      setCreatingUser(false);
      Swal.fire({
        text: 'success,please plogin',
        icon: 'success',
        showConfirmButton:false,
        position:'top',
        toast:true,
      })
      router.push('/login')
    } catch (error) {
      console.log(error)
      Swal.fire({
        text: 'Error please try again',
        timer: 2000,
        icon: 'error',
        timerProgressBar: true,
        showConfirmButton:false,
        position:'top',
        toast:true,
      })
    }
   
  }
  return (
    <section className="p-6 mt-8">
      <h1 className="text-center text-primary text-4xl mb-6">Register Page</h1>
      <form onSubmit={handleFormSubmit} className="block max-w-sm mx-auto space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="text"
          placeholder="fullname"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={fullname}
          onChange={(e)=>setFullname(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="number"
          placeholder="phonenumber"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={phonenumber}
          onChange={(e)=>setPhonenumber(e.target.value)}
          disabled={creatingUser}
        />
        <button
          type="submit"
          disabled={creatingUser}
          className="w-full bg-primary text-white py-3 rounded-lg"
        >
          Register
        </button>

        {/* Google Login Button with FontAwesome */}
        <button className="w-full flex items-center justify-center text-gray-500 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2" />
          Login with Google
        </button>
        <div className='text-center my-4 text-gray-500 '>
          Existing account?
          <Link className='underline' href="/login">Login</Link>
        </div>
      </form>
    </section>
  );
}
