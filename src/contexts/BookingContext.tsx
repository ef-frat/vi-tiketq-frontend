'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface OrdererData {
  firstName: string
  lastName: string
  phone: string
  email: string
}

interface TravelerData {
  title: string
  firstName: string
  lastName: string
  birthDay: string
  birthMonth: string
  birthYear: string
}

interface FlightSearchData {
  fromLocation: string
  toLocation: string
  passengers: {
    adult: number
    child: number
    infant: number
  }
  departureDate: string
  travelClass: string
}

interface BookingContextType {
  ordererData: OrdererData
  setOrdererData: (data: OrdererData) => void
  travelerData: TravelerData
  setTravelerData: (data: TravelerData) => void
  flightSearchData: FlightSearchData
  setFlightSearchData: (data: FlightSearchData) => void
  currentStep: string
  setCurrentStep: (step: string) => void
  clearAllData: () => void
}

const defaultOrdererData: OrdererData = {
  firstName: '',
  lastName: '',
  phone: '+62',
  email: ''
}

const defaultTravelerData: TravelerData = {
  title: 'Mr',
  firstName: '',
  lastName: '',
  birthDay: '',
  birthMonth: '',
  birthYear: ''
}

const defaultFlightSearchData: FlightSearchData = {
  fromLocation: 'Batam (BTH)',
  toLocation: 'Jakarta (CGK)',
  passengers: { adult: 1, child: 0, infant: 0 },
  departureDate: 'Aug 14, 2023',
  travelClass: 'Economy'
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [ordererData, setOrdererDataState] = useState<OrdererData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tiketq_orderer_data')
      return saved ? JSON.parse(saved) : defaultOrdererData
    }
    return defaultOrdererData
  })

  const [travelerData, setTravelerDataState] = useState<TravelerData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tiketq_traveler_data')
      return saved ? JSON.parse(saved) : defaultTravelerData
    }
    return defaultTravelerData
  })

  const [flightSearchData, setFlightSearchDataState] = useState<FlightSearchData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tiketq_flight_search_data')
      return saved ? JSON.parse(saved) : defaultFlightSearchData
    }
    return defaultFlightSearchData
  })

  const [currentStep, setCurrentStepState] = useState('home')

  // Persist data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tiketq_orderer_data', JSON.stringify(ordererData))
    }
  }, [ordererData])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tiketq_traveler_data', JSON.stringify(travelerData))
    }
  }, [travelerData])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tiketq_flight_search_data', JSON.stringify(flightSearchData))
    }
  }, [flightSearchData])

  const setOrdererData = (data: OrdererData) => {
    setOrdererDataState(data)
  }

  const setTravelerData = (data: TravelerData) => {
    setTravelerDataState(data)
  }

  const setFlightSearchData = (data: FlightSearchData) => {
    setFlightSearchDataState(data)
  }

  const setCurrentStep = (step: string) => {
    setCurrentStepState(step)
  }

  const clearAllData = () => {
    setOrdererDataState(defaultOrdererData)
    setTravelerDataState(defaultTravelerData)
    setFlightSearchDataState(defaultFlightSearchData)
    setCurrentStepState('home')
    if (typeof window !== 'undefined') {
      localStorage.removeItem('tiketq_orderer_data')
      localStorage.removeItem('tiketq_traveler_data')
      localStorage.removeItem('tiketq_flight_search_data')
    }
  }

  return (
    <BookingContext.Provider value={{
      ordererData,
      setOrdererData,
      travelerData,
      setTravelerData,
      flightSearchData,
      setFlightSearchData,
      currentStep,
      setCurrentStep,
      clearAllData
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
