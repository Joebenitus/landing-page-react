import React from 'react';
import useCurrentLocation from './../hooks/useCurrentLocation'

const Main = (props) => {
  const currentLocation = useCurrentLocation(props.location);

  return (
    <div>
      <h1>I am the body</h1>
      <h3>state: {currentLocation}</h3>
    </div>
  )
}

export default Main;