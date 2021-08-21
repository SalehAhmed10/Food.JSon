import React from 'react'
import "./RecipeTile.css"


export default function RecipeTile({recipe}) {
    return (

        
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|png|gif)$/)
        != null && (

    
<>
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-4 mb-5 card_main col-lg-4 align-items-stretch">
        {/* <div className="col-lg-4 col-md-6 my-3 col-sm-6 mb-4 mb-lg-0"> */}

            <div className="card shadow-sm border-0 rounded">

                <div className="card-body p-0">
                    <div className="img-box">
                    <a href={recipe["recipe"]["url"]} target="_blank" rel="noopener noreferrer"> <img src={recipe["recipe"]["image"]} alt="recipe-img" className="card-img-top img-thumbnail"/> </a>
                    </div>
                    <div className="p-4 recipe_cont">
                        <h5 className="mb-0 recipe_name">{recipe["recipe"]["label"]}</h5>
                        <br />
                        <p className="small text-muted">CuisineType: <b>{recipe["recipe"]["cuisineType"][0]}</b></p>
                        <p className="small text-muted">DishType: <b>{recipe["recipe"]["mealType"][0]}</b> </p>
                        <p className="small text-muted"><b>{recipe["recipe"]["healthLabels"][0]}</b></p>
                        <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item m-0">
                   <i className="fas fa-link"></i> <a href={recipe["recipe"]["url"]} target="_blank" rel="noopener noreferrer"><small> Click here to get Recipe</small></a></li>

                        </ul>
                    </div>
                </div>
                
            </div>

        </div>
        
</>
        )
    )
}


        /* <div className="col-12 recipeTile">
            <small>Click here to get Recipy <a href={recipe["recipe"]["url"]} target="_blank" rel="noopener noreferrer"> <i className="fas fa-external-link-alt"></i> </a>
</small>
           <a href={recipe["recipe"]["url"]} alt="recipe_link" target="_blank" rel="noreferrer"> <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt="" /> </a>

            <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
            <li className="recipeTile_cuisine"> CuisineType:  <span className="cousin_style"> {recipe["recipe"]["cuisineType"][0]}  </span></li>
            <li className="recipeTile_cuisine _li"> MealType:  <span className="mealtype_style"> {recipe["recipe"]["mealType"][0]}  </span></li>
            <li className="recipeTile_cuisine _li"> MealType:  <span className="mealtype_style"> {recipe["recipe"]["healthLabels"][0]}  </span></li>
        </div> */