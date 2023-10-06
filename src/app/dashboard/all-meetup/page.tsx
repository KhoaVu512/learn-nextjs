'use client'

import React, { useState, useEffect } from 'react'
import MeetupList from '@/app/dashboard/all-meetup/MeetupList'

function AllMeetup(props: any) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([] as string[])

  useEffect(() => {
    fetch(
      'https://react-getting-start-6431a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const meetups: string[] = []

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }

          meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }
  return (
    <section>
      <div className="flex text-[blue] text-[30px]">
        AllMeetUp
      </div>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}
export default AllMeetup
