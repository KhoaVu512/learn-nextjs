'use client'

import MainNavigation from '@/app/dashboard/components/MainNavigation'
import Link from 'next/link'
import classes from './layout.module.css'
import { FavoritesContextProvider } from '@/app/dashboard/store/favorites-context'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FavoritesContextProvider>
      <section className="">
        <MainNavigation />
        <main className={classes.main}>{children}</main>
      </section>
    </FavoritesContextProvider>
  )
}
