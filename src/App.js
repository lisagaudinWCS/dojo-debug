
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beers from './Components/Beers';
function App() {
  const [beers, setBeers] = useState();

  useEffect(() => {
    setBeers(beers);
    // return true;
  }, [beers]);

    return (
    <div className="container">
      <table className="table">

        <thead className="thead-dark">

          <tr>
            
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          <Beers />
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
