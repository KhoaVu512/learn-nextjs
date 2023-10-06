'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classes from './MainNavigation.module.css'
import FavoritesContext from '@/app/dashboard/store/favorites-context'
import { useContext } from 'react'

function MainNavigation() {
  const pathname = usePathname()
  const favoritesCtx = useContext(FavoritesContext)
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link
            className={`link ${
              pathname === '/dashboard/all-meetup' ? 'active' : ''
            }`}
            href={'/dashboard/all-meetup'}
          >
            AllMeetup
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === '/dashboard/favorites' ? 'active' : ''
            }`}
            href={'/dashboard/favorites'}
          >
          My Favorites<span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === '/dashboard/new-meetup' ? 'active' : ''
            }`}
            href={'/dashboard/new-meetup'}
          >
            NewMeetup
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default MainNavigation
