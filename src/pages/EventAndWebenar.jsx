import React, { useState } from 'react'
import EventAndWebFilter from '../components/common/EventAndWebFilter'
import EventPage from '../components/createEventPage/EventPage'
import WebanarPage from '../components/createWebinarPage/WebanarPage'

const EventAndWebenar = () => {
   const  [active,setActive] = useState(0)

  return (
    <div>
      <EventAndWebFilter active={active} setActive={setActive}/> 
     {active ?  <WebanarPage/> : <EventPage/>}
    </div>
  )
}

export default EventAndWebenar
