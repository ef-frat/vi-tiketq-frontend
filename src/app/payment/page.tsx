'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BookingFlowNav from '@/components/BookingFlowNav'

export default function PaymentPage() {
  const router = useRouter()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('bank-transfer')
  const [selectedBank, setSelectedBank] = useState('bca')
  
  // Mock data - in real app this would come from context or props
  const orderDetails = {
    orderNo: '00001',
    date: '14 August 2023',
    route: 'Batam (BTH) - Jakarta (CGK)',
    passenger: 'Mr. Asrul Sani',
    type: 'Adult'
  }
  
  const priceDetails = {
    flightTicket: 1731000,
    insurance: 87000,
    serviceFee: 10000,
    total: 1828000
  }

  const handlePaymentVerification = () => {
    // Payment verification logic
    console.log('Payment verification initiated')
    // In real app, this would redirect to bank payment gateway
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">tiketQ</div>
            <BookingFlowNav currentStep="payment" />
          </div>
        </div>
        {/* Payment Timer */}
        <div className="bg-gray-700 py-2 mt-2">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm">Selesaikan Pembayaran dalam <span className="font-bold text-red-400">00:59:45</span></p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Payment Methods */}
          <div className="lg:col-span-1">
            <div className="bg-blue-900 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Metode Pembayaran</h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedPaymentMethod('bank-transfer')}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedPaymentMethod === 'bank-transfer' 
                      ? 'bg-blue-700 font-semibold' 
                      : 'bg-blue-800 hover:bg-blue-700'
                  }`}
                >
                  Bank Transfer
                </button>
                <button
                  onClick={() => setSelectedPaymentMethod('dana')}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedPaymentMethod === 'dana' 
                      ? 'bg-blue-700 font-semibold' 
                      : 'bg-blue-800 hover:bg-blue-700'
                  }`}
                >
                  Dana
                </button>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bank Transfer Selection */}
            {selectedPaymentMethod === 'bank-transfer' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Bank Transfer</h2>
                <p className="text-gray-600 mb-6">Pilih Rekening Tujuan</p>
                
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="bank"
                      value="bca"
                      checked={selectedBank === 'bca'}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="mr-3 text-blue-600"
                    />
                    <span className="font-medium">Transfer BCA</span>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="bank"
                      value="mandiri"
                      checked={selectedBank === 'mandiri'}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="mr-3 text-blue-600"
                    />
                    <span className="font-medium">Transfer Mandiri</span>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="bank"
                      value="bni"
                      checked={selectedBank === 'bni'}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="mr-3 text-blue-600"
                    />
                    <span className="font-medium">Transfer BNI</span>
                  </label>
                </div>
              </div>
            )}

            {/* Order Summary */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pesanan</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">No Pesanan:</span>
                  <span className="font-medium">{orderDetails.orderNo}</span>
                </div>
                <div className="border-t border-gray-300 pt-3">
                  <h4 className="font-medium text-gray-800 mb-2">Penerbangan</h4>
                  <p className="text-gray-600">{orderDetails.date}</p>
                  <p className="font-semibold text-gray-800">{orderDetails.route}</p>
                </div>
                <div className="border-t border-gray-300 pt-3">
                  <h4 className="font-medium text-gray-800 mb-2">Data Penumpang</h4>
                  <p className="font-semibold text-gray-800">{orderDetails.passenger}</p>
                  <p className="text-gray-600">{orderDetails.type}</p>
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Rincian Harga</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tiket Pesawat x1</span>
                  <span className="font-medium">Rp {priceDetails.flightTicket.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">+ Asuransi Perjalanan</span>
                  <span className="font-medium">Rp {priceDetails.insurance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">+ Biaya Layanan</span>
                  <span className="font-medium">Rp {priceDetails.serviceFee.toLocaleString()}</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">Harga yang Anda bayar</span>
                  <span className="text-xl font-bold text-orange-600">Rp {priceDetails.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Verification Button */}
            <div className="text-center">
              <button
                onClick={handlePaymentVerification}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Verifikasi Pembayaran
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
