'use client'

import Link from 'next/link'
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

const menuItems: { title: ReactNode; href: string }[] = [
  {
    href: '#',
    title: <Paragraph className="text-ff00ff">FEEDBACK</Paragraph>,
  },
  { href: '#', title: 'SAVE MORE ON APP' },
  { href: '#', title: 'SELL ON LAZADA' },
  { href: '#', title: 'CUSTOMER CARE' },
  { href: '#', title: 'TRACKING MY ORDER' },
  { href: '/login', title: 'LOGIN' },
  { href: '#', title: 'SIGN UP' },
  { href: '#', title: 'CHANGE LANGUAGE' },
]
