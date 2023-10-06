'use client'
import React, { useContext } from 'react'
import classes from './AllMeetup.module.css'
import Card from '../ui/card'
import FavoritesContext from '@/app/dashboard/store/favorites-context'

function MeetupItem(props: any) {
  const favoriteCtx = React.useContext(FavoritesContext)

  const itemIsFavorite: any = favoriteCtx.itemIsFavorite(props.id)

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.img,
        address: props.address,
      })
    }
  }

  return (
    <div>
      <li className={classes.item}>
        <Card>
          <div className={classes.img}>
            <img
              src={props.img}
              alt={props.img}
            />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <h3>{props.address}</h3>
            <h3>{props.description}</h3>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? 'remove from favorites' : 'To Favorite'}
            </button>
          </div>
        </Card>
      </li>
    </div>
  )
}
export default MeetupItem
