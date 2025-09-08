import React, { useState } from 'react'
import EventAndWebFilter from '../components/EventAndWebFilter'
import EventPage from './Event/EventPage'
import WebanarPage from './Event/WebanarPage'

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
