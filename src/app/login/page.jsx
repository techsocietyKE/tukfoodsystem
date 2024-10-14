'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'
import Link from 'next/link';"react";

export default function LoginPage(){
    const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [fullname,setFullname] = useState('');
  const [phonenumber,setPhonenumber] = useState('');
  const [loginprogress,setLoginProgress] = useState(false);

  async function handleFormSubmit(ev){
      ev.prentDefault()
      setLoginProgress(true)
      const {ok} = await fetch ('/api/login',{
        body:JSON.stringify({email,password}),
        headers:{'Content-Type':'Application/json'},
        method:'POST'
      });
      if(ok){

      }else{

      }
      setLoginProgress(false);
  }
    return(
        <div className='mt-8'>
            <h1 className="text-center text-primary text-4xl mb-6">Welcome back</h1>
      <form onSubmit={handleFormSubmit} className="block max-w-sm mx-auto space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginprogress}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          disabled={loginprogress}
        />
        <button
          type="submit"
          disabled={loginprogress}
          className="w-full bg-primary text-white py-3 rounded-lg"
        >
          Login
        </button>

        {/* Google Login Button with FontAwesome */}
        <button className="w-full flex items-center justify-center text-gray-500 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2" />
          Login with Google
        </button>
        <div className='text-center my-4 text-gray-500 '>
          No account?
          <Link className='underline' href="/register">Register</Link>
        </div>
      </form>
        </div>
    )
}