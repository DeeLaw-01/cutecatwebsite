import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Normal } from './normal.jsx'
import GeolocationInfo from './assets/Gotyounigga.jsx'

function App () {
  const [clicked, setClicked] = useState(false)
  // ! ||--------------------------------------------------------------------------------||
  // * ||                                Get Ip address                                  ||
  // ! ||--------------------------------------------------------------------------------||
  const [IPaddress, setIPaddress] = useState('')

  useEffect(() => {
    getCustomerIP()
  }, [])

  const getCustomerIP = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json')
      const data = await response.data
      setIPaddress(data.ip)
      console.log('IP ADDRESS IS: ', data.ip)
    } catch (error) {
      console.log('ERROR NIGGA ERROR WHEN GETTING USERIP!!')
      console.log(error)
    }
  }

  // ! ||--------------------------------------------------------------------------------||
  // * ||                                   getGeoInfo                                   ||
  // ! ||--------------------------------------------------------------------------------||

  const [geoInfo, setGeoInfo] = useState({})

  useEffect(() => {
    getGeolocation()
  }, [])

  const headers = {
    'Fastah-Key': '638eec4613e64929aa0a4d7505b6d8cb'
  }

  const getGeolocation = async () => {
    try {
      const response = await axios.get(
        `https://ep.api.getfastah.com/whereis/v1/json/auto`,
        { headers }
      )

      const data = response.data // No need for await here
      setGeoInfo(data)
      console.log(data)
    } catch (error) {
      console.log("COULDN'T GET GEO LOCATION FROM IP ", error) // Log the error for debugging
    }
  }

  return (
    <>
      <div className='parentDiv'>
        {!clicked ? (
          <div>
            <Normal />
            <button style={{ margin: '20px' }} onClick={() => setClicked(true)}>
              CLICK ME TO MAKE THE CAT PIC!!
            </button>
          </div>
        ) : (
          <div>
            <GeolocationInfo data={geoInfo} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
