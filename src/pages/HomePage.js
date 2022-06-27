import React, { useContext } from 'react';
import { BandAdd } from '../components/BandAdd';
import { BandChart } from '../components/BandChart';
import { BandList } from '../components/BandList';
import { SocketContext } from '../context/SocketContext';

function HomePage() {
const {online} = useContext(SocketContext);

   return (
    <div className='container'>
      <div className='alert'>
        <p>
          Services Status:
          {
            online
            ? <span className='text-success'> online </span>
            : <span className='text-danger'> offline </span>
          }
        </p>
      </div>

      <h1>BandNames</h1>
      <hr></hr>

      <div className='row'>
        <div className='col'>
        <BandChart/>
        </div>
      </div>

      <div className='row'>
        <div className='col-8'>
          <BandList/>
        </div>

        <div className='col-4'>
          <BandAdd/>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
