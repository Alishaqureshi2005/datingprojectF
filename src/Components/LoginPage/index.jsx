import React from 'react'
import Home from './Home'
import EventsPage from './Event'
import GroupCards from './GroupCards'
import ConnectionPage from './ConnectionPage'
import EventCard from './EventCards'
import SportsPage from './SportsPage'
const LoginPage = ({onLogin}) => {
  return (
    <div>
      <Home onLogin={onLogin} />
      <EventsPage />
      <GroupCards />
      <ConnectionPage />
      <EventCard />
      <SportsPage />
    </div>
  )
}

export default LoginPage