import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@emotion/react';

export default function Main({ cartData, setCartData }) {
    const [data, setData] = useState([]);
    const theme = useTheme();
    useEffect(() => {
        console.log("fetching");
        setTimeout(() => {
            fetch('https://dummyjson.com/products?limit=80')
            .then(res => res.json())
            .then(response => {
                /* console.log(response); */
                setData(response.products.map((item) => {
                    return { ...item, count: 0 };
                }));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
        }, 0)


    }, []);

    return (<div className="body">
        {data.length != 0 ? (
            <Container sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                justifyContent: 'space-around',
                paddingTop: '2.5rem',
                [theme.breakpoints.down('md')]: {
                    gap: '2.5rem'
                },
                [theme.breakpoints.down('sm')]: {
                    gap: '0.5rem'
                },
            }}
                style={{
                   /*  display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'space-around', */

                }}>
                {
                    /* console.log(data) */

                }
                {/*  {data.map((item) => { console.log(item.images[0]) })} */}
                {


                    data.map((item) => (item.category != 'laptops' & item.category != 'smartphones') ? (<ProductCard key={item.id} data={item} cartData={cartData} setCartData={setCartData} />) : null)
                }

            </Container>) :
            (<Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>)
        }

    </div>
    )
}