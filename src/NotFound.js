import React from 'react'
import not_found from './not_found.png'

const NotFound = () => {
  return (
    <div className="App-header">
      <img src={not_found} alt='404'/>
      <h2>Page not found</h2>
    </div>
  )
}

export default NotFound
