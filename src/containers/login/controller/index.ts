import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { loginSchema } from '@/constants/validation-schema'
import { LoginParams, ShopService } from '$/backend'

const useLoginController = () => {
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

      toast.success('Success', {
        position: 'top-center',
        style: { color: 'green' },
      })
    } catch (error) {}
  }

  return { control, handleSubmit, login, errors, loginForm }
}

export default useLoginController