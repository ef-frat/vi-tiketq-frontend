'use client'

interface BookingFlowNavProps {
  currentStep: 'order' | 'review' | 'payment' | 'eticket'
}

export default function BookingFlowNav({ currentStep }: BookingFlowNavProps) {
  const steps = [
    { key: 'order', label: 'Pesan', path: '/order' },
    { key: 'review', label: 'Review', path: '/review' },
    { key: 'payment', label: 'Bayar', path: '/payment' },
    { key: 'eticket', label: 'E-Tiket', path: '/eticket' }
  ]

  return (
    <div className="flex justify-center items-center space-x-8 text-white text-sm font-medium">
      {steps.map((step, index) => (
        <div key={step.key} className="flex items-center">
          <div className={`flex items-center ${currentStep === step.key ? 'text-blue-300' : 'text-gray-300'}`}>
            <span className={`px-3 py-1 rounded-full ${currentStep === step.key ? 'bg-blue-700' : 'bg-gray-600'}`}>
              {index + 1}
            </span>
            <span className={`ml-2 ${currentStep === step.key ? 'underline' : ''}`}>
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="mx-4 text-gray-500">-</div>
          )}
        </div>
      ))}
    </div>
  )
}
