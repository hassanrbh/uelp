import React from 'react'
import Map from "../Map/Map";
import Directions from './Directions';
import HoursOfWorking from './HoursOfWorking';
import EditBusinessInfoB from './EditBusinessInfoB';

const Index = () => {
  return (
    <div className="mt-3">
      <h1 className="font-bold text-lg mb-4">Location & Hours</h1>
      <div className="flex">
        <div>
          <Map />
          <Directions />
        </div>
        <div className="ml-5">
          <HoursOfWorking />
          <EditBusinessInfoB />
        </div>
      </div>
    </div>
  )
}

export default Index