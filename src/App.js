
import {useState} from "react";
import './App.css';
import Header from "./Components/Header"
import RecipeTile from "./RecipeTile";
import './RecipeTile'




function App() {

    const[query, Setquery] = useState("");

    const [recipes, Setrecipes] = useState([])

    // const [healthLabel, sethealthLabel] = useState("vegan")
    


  async function getRecipe(){
    const YOUR_APP_ID = `82e453da`;
    const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=pork-free&&imageSize=SMALL`;
    // console.log(process.env)

    try {
      // &&health=${healthLabel} form_healthlabels
      const result = await fetch(url);
      const data = await result.json();
      Setrecipes(data.hits);
      // console.log(data.hits);

    }

    catch(err) {
      // catches errors both in fetch and response.json
      alert(err);
    }



  }
  

 


  const onSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  }

  return (
    <div className="app">
      <Header/>
      <div className="app_header text-center">
        
        <div className="title">
          <h1> food.JSON </h1>
        </div>
      </div>

      <div className="form_main">
        <form className="form_recipe_main text-center" onSubmit={onSubmit}>
        <div className="wrapper">
        <p className="pType line-1 anim-typewriter" col-12>Search Recipe below </p>
        </div>
            <input className="form_input" type="text" placeholder="Search" value={query} onChange={(e) => Setquery(e.target.value)}
            />

            <input className="form_submit" type="submit" value="Search" />

      

            
        </form>

      </div> 


      <div className="recipy_main mt-5 mb-5">
        
      <div className="row app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
      </div>


      </div>

    {/* <div>
  {recipes.map((recipe) => {
    return <RecipeTile recipe={recipe} />;
  })}

</div> */}

      
        
    </div>
  );
}

export default App;
