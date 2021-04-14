import { useState, useEffect } from 'react';

const getCurrentLocation = (key, initialValue) => {
  
}

const useCurrentLocation = (locationId) => {
  const [currentLocation, setCurrentLocation] = useState(locationId);

  useEffect(() => {
    return setCurrentLocation(locationId);
  }, []);

  return [currentLocation, setCurrentLocation];
}

export default useCurrentLocation;
