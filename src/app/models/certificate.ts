export interface Certificate {
  error_code: number
  status_code: number
  data: Data
  errors: any[]
}

export interface Data {
  list: List[]
}

export interface List {
  certificate_id: number
  certificate_name: string
}
