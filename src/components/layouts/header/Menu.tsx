'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

import Container from '@/components/common/container'
import Paragraph from '@/components/common/paragraph'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const MenuHeader = () => {
  const t = useTranslations('Common.header.menu')

  const menuItems: { title: ReactNode; href: string }[] = [
    {
      href: '#',
      title: <Paragraph className="text-ff00ff">{t('feedback')}</Paragraph>,
    },
    { href: '#', title: t('save-more-on-app') },
    { href: '#', title: t('sell-on-lazada') },
    { href: '#', title: t('customer-care') },
    { href: '#', title: t('tracking-my-order') },
    { href: '/login', title: t('login') },
    { href: '#', title: t('signup') },
    { href: '#', title: t('change-language') },
  ]

  return (
    <Container className="bg-e7e8ec">
      <NavigationMenu className="m-auto flex max-w-7xl items-center justify-end">
        <NavigationMenuList className="space-x-6">
          {menuItems.map((item) => (
            <NavigationMenuItem key={`${item.href}_${item.title}`} className="">
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className="whitespace-nowrap text-xs">
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </Container>
  )
}

export default MenuHeader
