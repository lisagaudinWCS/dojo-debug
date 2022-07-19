import { useEffect, useState } from "react";

const Beers = () => {

    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        fetch('https://api.punkapi.com/v2/beers')
        .then(r => r.json())
        .then(data => setBeers(data));
    }, []);

    return (
        <div>
                {beers && beers.map((beer, index) => (
                    <tr key={index}>
                    <td>{beer.id}</td>
                    <td>{beer.name}</td>
                    <td>{beer.description}</td>
                    <td><img src={beer.image_url} height="200px" alt={beer.index}/></td>
                </tr>
                ))}
        </div>
    );
}

export default Beers;