
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
      
   console.log(process.env)

    try {
      // &&health=${healthLabel} form_healthlabels
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_kEY}&health=pork-free&&imageSize=SMALL`);

      const data = await res.json();

      Setrecipes(data.hits);
//       console.log(data);

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

            {/* <select className="form_healthlabels">
              <option onClick={() => sethealthLabel("None")}> None </option>
              <option onClick={() => sethealthLabel("vegan")}> Vegan </option>
              <option onClick={() => sethealthLabel("vagetarian")}> Vagetarian </option>
              <option onClick={() => sethealthLabel("paleo")}> Paleo </option>
              <option onClick={() => sethealthLabel("dairy-free")}> Dairy-free </option>
              <option onClick={() => sethealthLabel("gluten-free")}> Gluten-free </option>
              <option onClick={() => sethealthLabel("wheet-free")}> Wheet-free </option>
              <option onClick={() => sethealthLabel("wheet-free")}> low-sugar </option>
              <option onClick={() => sethealthLabel("egg-free")}> Egg-free </option>
              <option onClick={() => sethealthLabel("peanut-free")}> Peanut-free </option>
              <option onClick={() => sethealthLabel("fish-free")}> Fish-free </option>
              <option onClick={() => sethealthLabel("soy-free")}> Soy-free </option>
              

            </select> */}

            
        </form>

      </div> 


      <div className="row recipy_main mt-5 mb-5">
        
        

        {recipes.map((recipe) => { 

        return <RecipeTile recipe={recipe}/>

        })}

      </div>

        
    </div>
  );
}

export default App;
