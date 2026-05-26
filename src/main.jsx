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

      <WeatherCard
          city="Wrocław"
          temperature={10}
          conditions="cloudy"
      />

        <WeatherCard
            city="Warszawa"
            temperature={7}
            conditions="rainy"
            warning="Możliwe burze"
        />

        <WeatherCard
            city="Olsztyn"
            temperature={16}
        />

        <WeatherCard
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

        <UserProfile
            name="Adrzej Kowal"
        />

        <UserProfile
        />

        <UserProfile
            isPremium={false}
        />

        <UserProfile
            isPremium={true}
        />

  </StrictMode>,
)
