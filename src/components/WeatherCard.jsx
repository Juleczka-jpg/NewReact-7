
function WeatherCard({ city, temperature, conditions, warning }) {

    const getWeatherIcon = () => {
        if (conditions === 'sunny') {
            return '☀️';
        } else if (conditions === 'rainy') {
            return '🌧️';
        } else if (conditions === 'cloudy') {
            return '☁️';
        } else {
            return '';
        }
    };

    const warningBox = warning && (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginTop: '10px' }}>
            <strong>⚠️ OSTRZEŻENIE:</strong> {warning}
        </div>
    );


  return (
      <div className="weather-main" style={{ border: '1px solid #ccc', padding: '15px', maxWidth: '300px', }}>
          <div className="weather-info">
              {getWeatherIcon()} {city}, {temperature}°C
          </div>
          {warning && warningBox}
      </div>
  )
}

export default WeatherCard 
