'use client'

import { useTranslations } from 'next-intl'

import Container from '@/components/common/container'
import FormInput from '@/components/common/form/form-input'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'

import useLoginController from '../controller'

const LoginForm = () => {
  const { loginForm, control, login, handleSubmit } = useLoginController()
  const t = useTranslations('Login.form')

  return (
    <Form {...loginForm}>
      <Container className="space-y-8">
        <FormField
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <FormInput onChange={onChange} value={value} label={t('email')} />
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <FormInput
              onChange={onChange}
              value={value}
              label={t('password')}
              type="password"
            />
          )}
        />
      </Container>
      <Button onClick={handleSubmit(login)}>Login</Button>
    </Form>
  )
}

export default LoginForm
