import React from 'react'
import NavBar from './NavBar'


const Settings = props => {

  const handleUrlRoute = url => {
    props.history.push(url)
  }

  return (
    <div>
      <NavBar
        showMapMenu={false}
        handleUrlRoute={handleUrlRoute}
      />
    <div className="settings-wrapper">
        <h2>GOOM lOGISTICS</h2>
        <div>
          <div>Users</div>
          <div onClick={() => handleUrlRoute('/settings/drivers')}>Drivers</div>

          <div onClick={() => handleUrlRoute('/settings/vehicles')}>Vehicles</div>

          <div onClick={() => handleUrlRoute('/settings/journeys')}>Journeys</div>
        </div>
      </div>
    </div>
  )
}

export default Settings
