import { OpenAPI } from '$/backend/core/OpenAPI'

// set custom api path
export function setEndpoint() {
  OpenAPI.WITH_CREDENTIALS = false
  if (process.env.NEXT_PUBLIC_API_BASE) {
    OpenAPI.BASE = `${process.env.NEXT_PUBLIC_API_BASE}/v1/api`
  }
}
