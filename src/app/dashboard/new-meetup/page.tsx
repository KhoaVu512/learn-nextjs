'use client'

import NewMeetupForm from '@/app/dashboard/new-meetup/NewMeetupFrom'
import { useRouter } from 'next/navigation'

function Page(props: any) {
  const router = useRouter()
  function addMeetupHandler(meetupData: any) {
    fetch(
      'https://react-getting-start-6431a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      router.replace('/')
    })
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}
export default Page
