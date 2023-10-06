'use client'

import Card from '@/app/dashboard/ui/card'
import classes from './NewMeetupFrom.module.css'
import React, { useRef } from 'react'

function NewMeetupForm(props: any) {
  const titleInputRef = useRef<HTMLInputElement>(props.title)
  const imageInputRef = useRef<HTMLInputElement>(props.image)
  const addressInputRef = useRef<HTMLInputElement>(props.address)
  const descriptionRef = useRef<any>(props.description)

  function submitHandler(event: any) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }
    props.onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form
        className={classes.form}
        onSubmit={submitHandler}
      >
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">image</label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>All Meetup</button>
        </div>
      </form>
    </Card>
  )
}
export default NewMeetupForm
