'use client'
import MeetupItem from '@/app/dashboard/all-meetup/MeetupItem'
import classes from './MeetUpList.module.css'

function MeetupList(props: any) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          img={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  )
}

export default MeetupList
