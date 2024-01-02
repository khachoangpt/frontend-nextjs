import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .min(1, 'Email can not be empty')
    .email(),
  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(1, 'Password can not be empty'),
})
