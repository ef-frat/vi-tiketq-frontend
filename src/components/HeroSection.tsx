'use client'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-cyan-400 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
          Find Your Perfect Journey
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Book flights and ferry tickets with ease. Discover amazing destinations with our trusted partners.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => window.location.href = '/order'}
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
          >
            ✈️ Book Flight
          </button>
          <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            🚢 Book Ferry
          </button>
        </div>
      </div>
    </section>
  )
} 