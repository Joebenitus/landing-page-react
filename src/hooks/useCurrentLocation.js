import { useState, useEffect } from 'react';

const useCurrentLocation = (locationId) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    function handleLocationChange() {
      setCurrentLocation(locationId);
    }
    return () => handleLocationChange;
  });

  return currentLocation;
}

export default useCurrentLocation;
