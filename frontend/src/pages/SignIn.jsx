import React from 'react'
import { Footer } from '../components/Shared/Footer'

export const SignIn = () => {
    return (
        <div>
            <section className="h-screen w-f flex justify-center md:justify-end  bg-gray-200">
        <div className="w-full max-w-md bg-white shadow-md flex justify-center items-start h-full">
          <form
            action=""
            className=" rounded px-8 py-8 pt-8 pb-4 mt-20 w-full"
          >
            <div className="px-4 pb-4 rounded-lg">
              <label htmlFor="email" className="text-sm block font-bold pb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Johnbull@example.com"
              />
            </div>
            <div className="px-4 pb-4">
              <label
                htmlFor="password"
                className="text-sm block font-bold pb-2"
              >
                PASSWORD
              </label>
              <input
                type="password"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer/>
        </div>
    )
}
