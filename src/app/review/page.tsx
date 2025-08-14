'use client'


import { useRouter } from 'next/navigation'
import BookingFlowNav from '@/components/BookingFlowNav'

export default function ReviewPage() {
  const router = useRouter()
  
  // Mock data - in real app this would come from context or props
  const ordererData = {
    name: 'Asrul Sani',
    phone: '+6289669030605',
    email: 'asrvlsani@gmail.com'
  }
  
  const travelerData = {
    name: 'Mr. Asrul Sani',
    birthDate: '08 Oktober 1955',
    email: 'asdaserra@tiker.com'
  }
  
  const flightDetails = {
    date: '14 August 2023',
    route: 'Batam (BTH) - Jakarta (CGK)',
    passenger: 'Mr. Asrul Sani',
    type: 'Adult',
    flightTicket: 1731000,
    insurance: 87000
  }
  
  const priceDetails = {
    flightTicket: 1731000,
    insurance: 87000,
    total: 1818000
  }

  const handleEditOrderer = () => {
    router.push('/order')
  }

  const handleEditTraveler = () => {
    router.push('/order')
  }

  const handleContinuePayment = () => {
    router.push('/payment')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">tiketQ</div>
            <BookingFlowNav currentStep="review" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Orderer Data Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Data Pemesan</h2>
            <button
              onClick={handleEditOrderer}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Ubah Details
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600">Nama:</span>
                <p className="font-semibold text-gray-800">{ordererData.name}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">No. Hp:</span>
                <p className="font-semibold text-gray-800">{ordererData.phone}</p>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm text-gray-600">Email:</span>
                <p className="font-semibold text-gray-800">{ordererData.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Traveler Data Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Details Travel</h2>
            <button
              onClick={handleEditTraveler}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Ubah Details
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600">Nama Traveler:</span>
                <p className="font-semibold text-gray-800">{travelerData.name}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Tgl Lahir:</span>
                <p className="font-semibold text-gray-800">{travelerData.birthDate}</p>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm text-gray-600">Email:</span>
                <p className="font-semibold text-gray-800">{travelerData.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price Details Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Rincian Harga</h2>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tiket Pesawat x1</span>
                <span className="font-medium">Rp {flightDetails.flightTicket.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">+ Asuransi Perjalanan</span>
                <span className="font-medium">Rp {flightDetails.insurance.toLocaleString()}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Harga yang Anda bayar</span>
                <span className="text-xl font-bold text-orange-600">Rp {priceDetails.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Payment Button */}
        <div className="text-center">
          <button
            onClick={handleContinuePayment}
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Lanjutkan Pembayaran
          </button>
        </div>
      </main>
    </div>
  )
}
