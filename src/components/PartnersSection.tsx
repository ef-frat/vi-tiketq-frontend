export default function PartnersSection() {
  const airlinePartners = [
    'Citilink', 'Batik Air', 'AirAsia', 'Scoot', 'ANA', 'JAL', 'KLM', 'Jetstar',
    'Qantas', 'Turkish Airlines', 'Swiss', 'Lufthansa', 'Emirates', 'Singapore Airlines'
  ]

  const paymentPartners = [
    'BCA', 'Mandiri', 'BNI', 'Bank BRI', 'VISA', 'ATM Bersama', 'ALTO', 'PRIMA',
    'Alfamart', 'Alfamidi', 'BCA KlikPay', 'CIMB Clicks', 'Mandiri Debit', 'Mandiri Clickpay'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Airlines Partners */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">✈️ Airlines Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Domestic & International Airlines Partners</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {airlinePartners.map((airline, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 flex items-center justify-center h-24 hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg border border-gray-100"
              >
                <span className="text-sm font-medium text-gray-700 text-center">{airline}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Partners */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">💳 Payment Partners</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {paymentPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 flex items-center justify-center h-24 hover:bg-green-50 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg border border-gray-100"
              >
                <span className="text-sm font-medium text-gray-700 text-center">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 