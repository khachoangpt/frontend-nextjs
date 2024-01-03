import { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import { COOKIES } from './constants/enum'
import { locales } from './i18n'

export default async function middleware(request: NextRequest) {
  const cookies = request.cookies
  const defaultLocale = locales[0]
  const pathname = request.nextUrl.pathname
  const locale = cookies.get(COOKIES.NEXT_LOCALE)?.value ?? defaultLocale

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
  })

  if (pathnameIsMissingLocale && locale === defaultLocale) {
    request.nextUrl.pathname = `/${locale}${
      pathname.startsWith('/') ? '' : '/'
    }${pathname}`
  }

  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: [
    '/',
    '/(vi|en)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
