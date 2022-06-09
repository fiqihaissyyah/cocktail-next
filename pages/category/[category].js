import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import MyNavbar from '../../components/MyNavbar'
import Footer from '../../components/Footer'


export const Card = (props) => {
    const item = props.drink
  return (
    <div className='col-lg-3 py-3'>
        <Link href={`/drinkdetail/${item.idDrink}`}>
        <div className='rounded'>
            <img
            width={"100%"}
            src={item.strDrinkThumb} 
            alt='Cocktails Image'/>
        </div>
        </Link>
        <h5 className='text-center title pt-2' style={{color: "#EFEADD" }}>{item.strDrink}</h5>
        <p> {item.strCategory} </p>
    </div>
        
  )
}

function Category () {
    const router = useRouter()
    const { category } = router.query
    const [state, setState] = useState({ posts: [] })

    useEffect(() => {
      if( category ) {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(response => response.json())
            .then(result => {
                console.log(result.drinks)
                setState({ posts: result.drinks })
        })
      }
        }, [category])

        if(!state.posts) {
            return (
                <div className='pt-100 text-center'>
                    <h2>No Data Found</h2>
                    <Link href='/'><strong>Go Back To Home</strong></Link>
                </div>
            )
        }
    
    

  return (
    <div className='w-100'>
      <MyNavbar/>
        <Container className='p-3'>
            <div className='row d-flex justify-content-center' >
                { state.posts.length > 0 && state.posts.map(i => 
                    <Card key={i.idDrink} drink={i} />
                )}
                
            </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Category