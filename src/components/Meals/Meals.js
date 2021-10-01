import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import './Meals.css';

const Meals = () => {
    const [meals,setMeals] = useState([]);

    useEffect(()=>{
       const url= "https://www.themealdb.com/api/json/v1/1/categories.php";
       fetch(url)
       .then(res=>res.json())
       .then(data=>setMeals(data.categories))
    }, [])

    return (
        <div>
            <h2 style={{color:'purple'}}>Total number of meals categories : {meals.length}</h2>
            <div className="categories">
                {
                    meals.map(meal=><Categories key={meal.idCategory} meal={meal}></Categories>)
                }
            </div>
        </div>
    );
};

export default Meals;