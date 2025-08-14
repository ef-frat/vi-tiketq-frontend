'use client'

import { useState } from 'react'

export default function Header() {
  const [fromLocation, setFromLocation] = useState('Batam (BTH)')
  const [toLocation, setToLocation] = useState('Jakarta (CGK)')
  const [passengers, setPassengers] = useState({ adult: 1, child: 0, infant: 0 })
  const [departureDate, setDepartureDate] = useState('Aug 14, 2023')
  const [travelClass, setTravelClass] = useState('Economy')

  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="flex justify-center bg-gray-100 py-2 pt-0">
        <nav className="bg-blue-900 text-white rounded-b-lg px-6 py-3 w-full max-w-6xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="text-white hover:bg-blue-800 p-2 rounded-lg transition-all duration-200 hover:scale-105">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="text-xl font-bold text-white flex items-center">
                <span className="bg-white text-blue-900 px-2 py-1 rounded mr-2 text-sm">✈️</span>
                tiketQ
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-blue-800 px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <span>IDR</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <button className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-200 hover:scale-105">Log In</button>
              <button className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded transition-all duration-200 hover:scale-105 shadow-md">Register</button>
            </div>
          </div>
        </nav>
      </div>

      {/* Flight Search Form */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Search Flights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
              {/* From */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* To */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Passengers */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">No. of Passengers</label>
                <input
                  type="text"
                  value={`${passengers.adult} Adult, ${passengers.child} Child, ${passengers.infant} Infant`}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>

              {/* Departure Date */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                <div className="relative">
                  <input
                    type="text"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Travel Class */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Set Class</label>
                <select
                  value={travelClass}
                  onChange={(e) => setTravelClass(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 