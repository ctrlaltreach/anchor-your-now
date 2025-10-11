// Common types shared across apps

export interface User {
  id: string
  email: string
  name?: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
}

