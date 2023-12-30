import './globals.css'

import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { Toaster } from '@/components/ui/sonner'
import { poppinsFont } from '@/configs'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
