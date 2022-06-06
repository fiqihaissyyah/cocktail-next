import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useState, useEffect } from 'react'
import MyNavbar from '../../components/MyNavbar'

export default function DrinkDetail() {
    const router = useRouter()
    const { id } = router.query
    const [state, setState] = useState({ posts: [] })

    useEffect(() => {
      if(id) {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(result => {
                console.log(result.drinks[0])
                setState({ posts: result.drinks[0] })
        })
      }
        }, [id])

        if(!state.posts) {
            return (
                <div className='pt-100 text-center'>
                    <h2>No Data Found</h2>
                    <a href='/'><strong>Go Back To Home</strong></a>
                </div>
            )
        }

    const item = state.posts;

    let ingredients = [];
    if (item.strIngredient1) { ingredients.push(<li>{item.strIngredient1}</li>) }
    if (item.strIngredient2) { ingredients.push(<li>{item.strIngredient2}</li>) }
    if (item.strIngredient3) { ingredients.push(<li>{item.strIngredient3}</li>) }
    if (item.strIngredient4) { ingredients.push(<li>{item.strIngredient4}</li>) }
    if (item.strIngredient5) { ingredients.push(<li>{item.strIngredient5}</li>) }
    if (item.strIngredient6) { ingredients.push(<li>{item.strIngredient6}</li>) }
    if (item.strIngredient7) { ingredients.push(<li>{item.strIngredient7}</li>) }
    if (item.strIngredient8) { ingredients.push(<li>{item.strIngredient8}</li>) }
    if (item.strIngredient9) { ingredients.push(<li>{item.strIngredient9}</li>) }
    if (item.strIngredient10) { ingredients.push(<li>{item.strIngredient10}</li>) }
    if (item.strIngredient11) { ingredients.push(<li>{item.strIngredient11}</li>) }
    if (item.strIngredient12) { ingredients.push(<li>{item.strIngredient12}</li>) }
    if (item.strIngredient13) { ingredients.push(<li>{item.strIngredient13}</li>) }
    if (item.strIngredient14) { ingredients.push(<li>{item.strIngredient14}</li>) }
    if (item.strIngredient15) { ingredients.push(<li>{item.strIngredient15}</li>) }
    

  return (
    <div className='w-100'>
        <MyNavbar/>
         { item &&
        <div className='row'>
            <div className='col-lg-4'>
                <Image
                    width='100%' 
                    src={item.strDrinkThumb} 
                    alt='Cocktails Image'/>
            </div>
            {/* <div className='col-lg-8'>
                    <h2 className='mb-3'>{item.strDrink}</h2>
                    <p><strong>Ingredients : </strong><br/><ul>{ingredients}</ul></p>
                    <p><strong>Glass : </strong><br/>{item.strGlass}</p>
                    <p><strong>Instructions : </strong><br/>{item.strInstructions}</p>
            </div> */}
        </div>
         }
    </div>
  )
}
