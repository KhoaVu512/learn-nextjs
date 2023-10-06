'use client'
import React, { createContext, useState } from 'react'

const FavoritesContext = React.createContext({
  favorites: [],
  totalFavorites: 0,
	addFavorite: (favoriteMeetup:any) => {},
	removeFavorite: (meetupId: any) => {},
	itemIsFavorite: (meetupId: any) => {}
})

export function FavoritesContextProvider({ children }: { children: React.ReactNode }) {
	const [userFavorites, setUserFavorites] = React.useState([])

	function addFavoriteHandler(favoriteMeetup : []) {
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.concat(favoriteMeetup)
		})
	}

	function removeFavoriteHandler(meetupId: any) {
		setUserFavorites(prevUserFavorites => {
			return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
		})
	}

	function itemIsFavoriteHandler(meetupId: any) {
		return userFavorites.some(meetup => meetup.id === meetupId)
	}

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler
	}

	return (
		<FavoritesContext.Provider value={context}>
		{children}
		</FavoritesContext.Provider>
	)
}


export default FavoritesContext