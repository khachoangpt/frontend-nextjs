import { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import { locales } from './i18n'

export default async function middleware(request: NextRequest) {
  const defaultLocale = locales[0]
  const locale = request.cookies.get('NEXT_LOCALE')
  const pathname = request.nextUrl.pathname

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
  })
  if (pathnameIsMissingLocale) {
    if (locale?.value === defaultLocale) {
      request.nextUrl.pathname = `/${locale?.value}${
        pathname.startsWith('/') ? '' : '/'
      }${pathname}`
    }
  }

  const response = handleI18nRouting(request)

  // Step 3: Alter the response (example)
  response.headers.set('x-your-custom-locale', defaultLocale)

  return response
}

export const config = {
  matcher: [
    '/',
    '/(vi|en)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
