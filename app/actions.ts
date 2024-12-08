'use server'

import { z } from 'zod'

const FormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  message: z.string().min(1, 'Message is required'),
  acceptPolicy: z.boolean().refine(val => val === true, {
    message: 'You must accept the privacy policy',
  }),
})

export async function submitContactForm(formData: z.infer<typeof FormSchema>) {
  const result = FormSchema.safeParse(formData)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  // Simulate form submission delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Thank you for your message. We'll get back to you soon!"
  }
}

