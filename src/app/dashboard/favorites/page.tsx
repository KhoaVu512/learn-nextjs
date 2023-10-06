'use client'
import { useContext } from 'react'

import FavoritesContext from '@/app/dashboard/store/favorites-context'
import MeetupList from '@/app/dashboard/all-meetup/MeetupList'

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext)

  let content: any
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />
  }

  return (
    <section>
      <div className="flex text-[blue] text-[30px]"  >
        My Favorites
      </div>
      {content}
    </section>
  )
}

export default FavoritesPage
