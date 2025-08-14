export interface ValidationError {
  field: string
  message: string
}

export interface OrdererData {
  firstName: string
  lastName: string
  phone: string
  email: string
}

export interface TravelerData {
  title: string
  firstName: string
  lastName: string
  birthDay: string
  birthMonth: string
  birthYear: string
}

export interface FlightSearchData {
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

// Validate orderer data
export function validateOrdererData(data: OrdererData): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.firstName.trim()) {
    errors.push({
      field: 'firstName',
      message: 'Nama depan wajib diisi'
    })
  } else if (data.firstName.trim().length < 2) {
    errors.push({
      field: 'firstName',
      message: 'Nama depan minimal 2 karakter'
    })
  }

  if (!data.lastName.trim()) {
    errors.push({
      field: 'lastName',
      message: 'Nama belakang wajib diisi'
    })
  }

  if (!data.phone.trim() || data.phone === '+62') {
    errors.push({
      field: 'phone',
      message: 'Nomor handphone wajib diisi'
    })
  } else if (!/^\+62\d{9,12}$/.test(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Format nomor handphone tidak valid (contoh: +6281234567890)'
    })
  }

  if (!data.email.trim()) {
    errors.push({
      field: 'email',
      message: 'Email wajib diisi'
    })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({
      field: 'email',
      message: 'Format email tidak valid'
    })
  }

  return errors
}

// Validate traveler data
export function validateTravelerData(data: TravelerData): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.firstName.trim()) {
    errors.push({
      field: 'firstName',
      message: 'Nama depan wajib diisi'
    })
  } else if (data.firstName.trim().length < 2) {
    errors.push({
      field: 'firstName',
      message: 'Nama depan minimal 2 karakter'
    })
  }

  if (!data.lastName.trim()) {
    errors.push({
      field: 'lastName',
      message: 'Nama belakang wajib diisi'
    })
  }

  if (!data.birthDay || !data.birthMonth || !data.birthYear) {
    errors.push({
      field: 'birthDate',
      message: 'Tanggal lahir wajib diisi lengkap'
    })
  } else {
    const day = parseInt(data.birthDay)
    const month = parseInt(data.birthMonth)
    const year = parseInt(data.birthYear)
    
    if (day < 1 || day > 31) {
      errors.push({
        field: 'birthDay',
        message: 'Tanggal tidak valid (1-31)'
      })
    }
    
    if (month < 1 || month > 12) {
      errors.push({
        field: 'birthMonth',
        message: 'Bulan tidak valid (1-12)'
      })
    }
    
    if (year < 1900 || year > new Date().getFullYear()) {
      errors.push({
        field: 'birthYear',
        message: 'Tahun tidak valid'
      })
    }
  }

  return errors
}

// Validate flight search data
export function validateFlightSearchData(data: FlightSearchData): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.fromLocation.trim()) {
    errors.push({
      field: 'fromLocation',
      message: 'Lokasi keberangkatan wajib diisi'
    })
  }

  if (!data.toLocation.trim()) {
    errors.push({
      field: 'toLocation',
      message: 'Lokasi tujuan wajib diisi'
    })
  }

  if (data.fromLocation === data.toLocation) {
    errors.push({
      field: 'toLocation',
      message: 'Lokasi tujuan tidak boleh sama dengan keberangkatan'
    })
  }

  if (data.passengers.adult < 1) {
    errors.push({
      field: 'passengers',
      message: 'Minimal 1 penumpang dewasa'
    })
  }

  if (!data.departureDate.trim()) {
    errors.push({
      field: 'departureDate',
      message: 'Tanggal keberangkatan wajib diisi'
    })
  }

  return errors
}

// Get error message for a specific field
export function getFieldError(errors: ValidationError[], fieldName: string): string | undefined {
  return errors.find(error => error.field === fieldName)?.message
}

// Check if form has errors
export function hasErrors(errors: ValidationError[]): boolean {
  return errors.length > 0
}
