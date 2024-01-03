import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { loginSchema } from '@/constants/validation-schema'
import { ApiError, LoginParams, ShopService } from '$/backend'

const useLoginController = () => {
  const router = useRouter()
  const defaultValues: LoginParams = { email: '', password: '' }
  const loginForm = useForm<LoginParams>({
    defaultValues,
    resolver: zodResolver(loginSchema),
  })
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = loginForm

  const login: SubmitHandler<LoginParams> = async (loginData) => {
    try {
      await ShopService.login({
        requestBody: loginData,
      })

      toast.success('Welcome', {
        position: 'top-center',
        style: { color: 'green' },
      })

      router.push('/')
    } catch (error) {
      toast.error((error as ApiError).body?.message ?? 'Login error', {
        position: 'top-center',
        style: { color: 'red' },
      })
    }
  }

  return { control, handleSubmit, login, errors, loginForm }
}

export default useLoginController
