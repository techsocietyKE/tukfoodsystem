import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function RegisterPage() {
  return (
    <section className="p-6">
      <h1 className="text-center text-primary text-4xl mb-6">Register Page</h1>
      <form className="block max-w-sm mx-auto space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg"
        >
          Register
        </button>

        {/* Google Login Button with FontAwesome */}
        <button className="w-full flex items-center justify-center text-gray-500 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2" />
          Login with Google
        </button>
      </form>
    </section>
  );
}
