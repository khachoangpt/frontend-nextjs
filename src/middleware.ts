import createMiddleware from 'next-intl/middleware'

import { locales } from './i18n'

export default createMiddleware({
  locales,
  defaultLocale: locales[0],
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(vi|en)/:path*'],
}
