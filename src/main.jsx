import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherCard from './components/WeatherCard.jsx'
import UserProfile from './components/UserProfile';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <WeatherCard
          city="Kraków"
          temperature={15}
          conditions="sunny"
          warning="Możliwe burze"
      />
      <UserProfile
          name="Jan Kowalski"
          email="jan.kowalski@gmail.com"
          bio="Lubię programować i podróżować."
          website="https://janportfolio.com"
          isPremium={true}
          followerCount={1000}
      />

      <UserProfile
          name="Anna Nowak"
          email="anna.nowak@gmail.com"
          isPremium={false}
          followerCount={500}
      />

      <UserProfile
          name="Piotr Zając"
          email="piotr.zajac@wp.pl"
          bio="Fotograf i miłośnik natury."
          isPremium={true}
          followerCount={3000}
      />
  </StrictMode>,
)
