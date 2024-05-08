import React from 'react'

const GeolocationInfo = ({ data }) => {
  const { ip, isEuropeanUnion, l10n, locationData } = data

  return (
    <div style={{ height: '100%' }}>
      <h1>You are done for</h1>
      <h2>Geolocation Information</h2>
      <p>
        <strong>IP Address:</strong> {ip}
      </p>
      <p>
        <strong>Is European Union:</strong> {isEuropeanUnion ? 'Yes' : 'No'}
      </p>
      <h3>Localization</h3>
      <p>
        <strong>Currency Name:</strong> {l10n.currencyName}
      </p>
      <p>
        <strong>Currency Code:</strong> {l10n.currencyCode}
      </p>
      <p>
        <strong>Currency Symbol:</strong> {l10n.currencySymbol}
      </p>
      <p>
        <strong>Language Codes:</strong> {l10n.langCodes.join(', ')}
      </p>
      <h3>Location Data</h3>
      <p>
        <strong>Country Name:</strong> {locationData.countryName}
      </p>
      <p>
        <strong>Country Code:</strong> {locationData.countryCode}
      </p>
      <p>
        <strong>City Name:</strong> {locationData.cityName}
      </p>
      <p>
        <strong>City Geonames ID:</strong> {locationData.cityGeonamesId}
      </p>
      <p>
        <strong>Latitude:</strong> {locationData.lat}
      </p>
      <p>
        <strong>Longitude:</strong> {locationData.lng}
      </p>
      <p>
        <strong>Timezone:</strong> {locationData.tz}
      </p>
      <p>
        <strong>Continent Code:</strong> {locationData.continentCode}
      </p>
      <p>This information has been sent to the authorities . Get rekt</p>
    </div>
  )
}

export default GeolocationInfo
