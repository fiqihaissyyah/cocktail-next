import React, { useState, useEffect } from 'react'
import '../styles/Home.module.css'
import { Container, Form, FormGroup, FormControl, Card  } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'


export const Post = (props) => {
    const item = props.drink
  return (
    <div className='col-lg-3 py-3'>
        <Link href={`/drinkdetail/${item.idDrink}`} style={{textDecoration: "none"}}>
        <div className='rounded'>
            <Image
            width='100%' 
            src={item.strDrinkThumb} 
            alt='Cocktails Image'/>
        </div>
            <h5 className='text-center title' style={{color: "#EFEADD" }}>{item.strDrink}</h5>
        </Link>
    </div>
        
  )
}



const Drink = () => {
    const [state, setState] = useState({
        posts: [],
        searchDrink: []
    })

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
                    console.log(result.drinks);
        })
    }, [])

    const handleChange = (e) => {
        const search = e.target.value;

        if(search) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks, searchDrink: search })
                })
        } else {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
                })
        }

        console.log(state)
    }

    if(!state.posts) {
        return (
            <div className='py-24 text-center'>
                <h2>No Data Found</h2>
                <a href='/'><strong>Go Back To Home</strong></a>
            </div>
        )
    }

  return (
    <div>
        <Container className='p-3'>
            <h1 className='text-center mt-2 mb-4' style={{ color: "#5B3547"}}>Welcome to Cocktails Corner!</h1>
            <div className='row'>
                <div className='col-lg-4'></div>
                <Form className='form mb-2 col-lg-4'>
                    <FormGroup>
                        <Form.Control type="text" name="searchDrink" id="searchDrink" 
                        placeholder="Search here ..." value={state.searchDrink}
                        onChange={handleChange}/>
                    </FormGroup>
                </Form>
                <div className='col-lg-4'></div>
            </div>
            <div className='row' >
                { state.posts.length > 0 && state.posts.map(i => 
                    <Post key={i.idDrink} drink={i} />
                )}
                
            </div>
        </Container>
    </div>
  )
}

export default Drink