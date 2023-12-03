import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import Container from '@mui/material/Container';

export default function Main() {
    const [data, setData] = useState([]);
    useEffect(() => {
        /* let data = fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(response => console.log(response)) */

        fetch('https://dummyjson.com/products?limit=80')
            .then(res => res.json())
            .then(response => {
                setData([...response.products]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        /*  fetch('https://fakestoreapi.com/products?limit=19')
         .then(res=>res.json())
         .then(json=>console.log(json)) */

    }, []);

    return (<div className="body">
        {data ? (
            <Container sx={{ paddingTop: '2.5rem' }}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'space-around'

                }}>
                {/* {
                    console.log(data)

                } */}
                {/*  {data.map((item) => { console.log(item.images[0]) })} */}
                {


                    data.map((item) => (item.category != 'laptops' & item.category != 'smartphones') ? (<ProductCard key={item.id} data={item} />) : null)
                }

            </Container>) : null
        }

    </div>
    )
}