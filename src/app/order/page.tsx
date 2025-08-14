'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BookingFlowNav from '@/components/BookingFlowNav'

export default function OrderPage() {
  const router = useRouter()
  const [ordererData, setOrdererData] = useState({
    firstName: '',
    lastName: '',
    phone: '+62',
    email: ''
  })
  const [travelerData, setTravelerData] = useState({
    title: 'Mr',
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: ''
  })

  const handleOrdererSave = () => {
    // Save orderer data logic
    console.log('Orderer data saved:', ordererData)
  }

  const handleTravelerSave = () => {
    // Save traveler data logic
    console.log('Traveler data saved:', travelerData)
  }

  const handleContinue = () => {
    // Navigate to review page
    router.push('/review')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">tiketQ</div>
            <BookingFlowNav currentStep="order" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Orderer Data Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Data Pemesan</h2>
          <p className="text-gray-600 mb-6">Data Pemesan (untuk E-Tiket/Voucher)</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Depan & Tengah (Jika Ada)
              </label>
              <input
                type="text"
                value={ordererData.firstName}
                onChange={(e) => setOrdererData({...ordererData, firstName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama depan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Belakang
              </label>
              <input
                type="text"
                value={ordererData.lastName}
                onChange={(e) => setOrdererData({...ordererData, lastName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama belakang"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                No. Handphone
              </label>
              <div className="flex">
                <select className="px-3 py-2 border border-gray-300 border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>+62</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input
                  type="tel"
                  value={ordererData.phone}
                  onChange={(e) => setOrdererData({...ordererData, phone: e.target.value})}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="81234567890"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={ordererData.email}
                onChange={(e) => setOrdererData({...ordererData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@example.com"
              />
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleOrdererSave}
              className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Simpan
            </button>
          </div>
        </div>

        {/* Traveler Data Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Data Traveler</h2>
          <p className="text-gray-600 mb-6">Person 1</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Depan & Tengah (Jika Ada)
              </label>
              <div className="flex">
                <select 
                  value={travelerData.title}
                  onChange={(e) => setTravelerData({...travelerData, title: e.target.value})}
                  className="px-3 py-2 border border-gray-300 border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Ms</option>
                  <option>Dr</option>
                </select>
                <input
                  type="text"
                  value={travelerData.firstName}
                  onChange={(e) => setTravelerData({...travelerData, firstName: e.target.value})}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama depan"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Belakang
              </label>
              <input
                type="text"
                value={travelerData.lastName}
                onChange={(e) => setTravelerData({...travelerData, lastName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama belakang"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Lahir
              </label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  value={travelerData.birthDay}
                  onChange={(e) => setTravelerData({...travelerData, birthDay: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                  placeholder="DD"
                  maxLength={2}
                />
                <input
                  type="text"
                  value={travelerData.birthMonth}
                  onChange={(e) => setTravelerData({...travelerData, birthMonth: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                  placeholder="MM"
                  maxLength={2}
                />
                <input
                  type="text"
                  value={travelerData.birthYear}
                  onChange={(e) => setTravelerData({...travelerData, birthYear: e.target.value})}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                  placeholder="YYYY"
                  maxLength={4}
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleTravelerSave}
              className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Simpan
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleContinue}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
          >
            Lanjutkan ke Review
          </button>
        </div>
      </main>
    </div>
  )
}
