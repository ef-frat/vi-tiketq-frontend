'use client'

import { useRouter } from 'next/navigation'
import BookingFlowNav from '@/components/BookingFlowNav'

export default function ETicketPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">tiketQ</div>
            <BookingFlowNav currentStep="eticket" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Pembayaran Berhasil!</h1>
          <p className="text-lg text-gray-600 mb-8">
            E-Tiket Anda telah dikirim ke email. Terima kasih telah memilih TiketQ!
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Detail Penerbangan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <span className="text-gray-600">No. Pesanan:</span>
                <p className="font-semibold">00001</p>
              </div>
              <div>
                <span className="text-gray-600">Tanggal:</span>
                <p className="font-semibold">14 August 2023</p>
              </div>
              <div>
                <span className="text-gray-600">Rute:</span>
                <p className="font-semibold">Batam (BTH) - Jakarta (CGK)</p>
              </div>
              <div>
                <span className="text-gray-600">Penumpang:</span>
                <p className="font-semibold">Mr. Asrul Sani</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => router.push('/')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Kembali ke Beranda
            </button>
            <button
              onClick={() => router.push('/order')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors ml-4"
            >
              Pesan Lagi
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
