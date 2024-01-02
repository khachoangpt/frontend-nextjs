import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from 'axios'
import { cookies } from 'next/headers'
import * as rax from 'retry-axios'

const defaultConfig = {
  timeout: 30000,
  withCredentials: true,
  raxConfig: {
    retry: 3,
    noResponseRetries: 2,
    retryDelay: 100,
    httpMethodsToRetry: ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT'],
    statusCodesToRetry: [
      [100, 199],
      [409, 429],
      [500, 599],
    ],
    backoffType: 'exponential',
    onRetryAttempt: (err: AxiosError) => {
      const cfg = rax.getConfig(err)
      // eslint-disable-next-line no-console
      console.log(`Retry attempt #${cfg?.currentRetryAttempt}`)
    },
  },
}

const addRequestInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig<unknown>) => {
      const cookiesStore = cookies()
      const jwt = cookiesStore.get('jwt')
      if (jwt) {
        if (!config.headers) {
          config.headers = {} as AxiosRequestHeaders
        }
        config.headers['Authorization'] = `Bearer ${jwt.value}`
      }

      return config
    },
    (error: unknown) => {
      return Promise.reject(error)
    },
  )
}

const createApiPjc = (config: object = defaultConfig) => {
  const instance = axios.create(config)
  addRequestInterceptors(instance)
  rax.attach(instance)

  return instance
}

const apiPjc = createApiPjc()

export * from 'axios'
export default apiPjc
