import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Normal } from './normal.jsx'
import { Gotyounigga } from './assets/Gotyounigga.jsx'
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

  const getGeolocation = async () => {
    try {
      const response = await axios.get(
        `https://api.ip2location.io/?key=B9566EF164ED964C863A366AE579AC05&ip=${IPaddress}`
      )
      const data = await response.data
      setGeoInfo(data)
      console.log(data)
    } catch (error) {
      console.log("COULDN'T GET GEO LOCATION FROM IP ")
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
          <Gotyounigga data={geoInfo} />
        )}
      </div>
    </>
  )
}

export default App
