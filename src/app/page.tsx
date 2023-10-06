'use client'
import Image from 'next/image'
import Link from 'next/link'
import DashboardLayout from '@/app/dashboard/layout'
import { FavoritesContextProvider } from '@/app/dashboard/store/favorites-context'

export default function Home() {
  return (
      <DashboardLayout></DashboardLayout>
  )
}
