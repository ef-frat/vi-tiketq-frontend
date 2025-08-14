'use client'

import { useState } from 'react'
import { useBooking } from '@/contexts/BookingContext'
import Toast, { useToast } from '@/components/Toast'
import { validateFlightSearchData, getFieldError, ValidationError } from '@/utils/validation'

export default function Header() {
  const { flightSearchData, setFlightSearchData } = useBooking()
  const { toast, showToast, hideToast } = useToast()
  const [errors, setErrors] = useState<ValidationError[]>([])
  const [isSearching, setIsSearching] = useState(false)

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
                  value={flightSearchData.fromLocation}
                  onChange={(e) => setFlightSearchData({...flightSearchData, fromLocation: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    getFieldError(errors, 'fromLocation') ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {getFieldError(errors, 'fromLocation') && (
                  <p className="text-red-500 text-xs mt-1">{getFieldError(errors, 'fromLocation')}</p>
                )}
              </div>

              {/* To */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  value={flightSearchData.toLocation}
                  onChange={(e) => setFlightSearchData({...flightSearchData, toLocation: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    getFieldError(errors, 'toLocation') ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {getFieldError(errors, 'fromLocation') && (
                  <p className="text-red-500 text-xs mt-1">{getFieldError(errors, 'toLocation')}</p>
                )}
              </div>

              {/* Passengers */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">No. of Passengers</label>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setFlightSearchData({
                      ...flightSearchData,
                      passengers: {
                        ...flightSearchData.passengers,
                        adult: Math.max(1, flightSearchData.passengers.adult - 1)
                      }
                    })}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="min-w-[60px] text-center">
                    {flightSearchData.passengers.adult} Adult, {flightSearchData.passengers.child} Child, {flightSearchData.passengers.infant} Infant
                  </span>
                  <button
                    type="button"
                    onClick={() => setFlightSearchData({
                      ...flightSearchData,
                      passengers: {
                        ...flightSearchData.passengers,
                        adult: flightSearchData.passengers.adult + 1
                      }
                    })}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Departure Date */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                <div className="relative">
                  <input
                    type="text"
                    value={flightSearchData.departureDate}
                    onChange={(e) => setFlightSearchData({...flightSearchData, departureDate: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      getFieldError(errors, 'departureDate') ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {getFieldError(errors, 'departureDate') && (
                  <p className="text-red-500 text-xs mt-1">{getFieldError(errors, 'departureDate')}</p>
                )}
              </div>

              {/* Travel Class */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Set Class</label>
                <select
                  value={flightSearchData.travelClass}
                  onChange={(e) => setFlightSearchData({...flightSearchData, travelClass: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <button 
                  onClick={() => {
                    const validationErrors = validateFlightSearchData(flightSearchData)
                    if (validationErrors.length > 0) {
                      setErrors(validationErrors)
                      showToast('Mohon lengkapi data pencarian', 'error')
                    } else {
                      setIsSearching(true)
                      setErrors([])
                      // Simulate search
                      setTimeout(() => {
                        setIsSearching(false)
                        showToast('Pencarian berhasil!', 'success')
                        // Navigate to order page
                        window.location.href = '/order'
                      }, 1500)
                    }
                  }}
                  disabled={isSearching}
                  className={`w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ${
                    isSearching 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:scale-105'
                  } text-white p-3`}
                >
                  {isSearching ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Searching...
                    </div>
                  ) : (
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 7 0 0114 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </header>
  )
} 