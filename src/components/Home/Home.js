import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Home.css';

const Home = () => {

    const [searchText,setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

      fetch(url)
      .then(res=>res.json())
      .then(data=>setMeals(data.meals))
    }, [searchText]);

    const handleSearchButton = e =>{
      const searchTextValue = e.target.value;
      setSearchText(searchTextValue);
    }

    return (
        <div className="home-container">
            <h1>Welcome to food world!!!</h1>
            <Box
                   component="form"
                   sx={{
                    '& > :not(style)': { m: 1, width: '25ch'}, boxShadow : 6, p: 1, color:"primary"
                   }}
                   noValidate
                   autoComplete="off"
                >
                <TextField
                   onChange={handleSearchButton}
                   id="filled search"
                   label="Search Meals"
                   type="search"
                   color="secondary"
                   focused
                />
                </Box>
                <div className="meal">
                  {
                    meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
                  }
                </div>
        </div>
    );
};

export default Home;