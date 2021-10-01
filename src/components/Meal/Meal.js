import { Button, Stack } from '@mui/material';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const {idMeal, strMeal, strInstructions, strMealThumb} = props.meal;
    const history = useHistory();
    const url = `/meal/${idMeal}`;

    const handleDetailClick= () => {
        history.push(`/meal/${idMeal}`);
    }
    return (
        <div className="meal-container">
            <img src={strMealThumb} alt="" srcset="" />
            <h2>{strMeal}</h2>
            <p>{strInstructions.slice(0,100)}</p>
            <Stack direction="row" spacing={3} marginLeft={4}>
                <NavLink
                    to={url}
                    style={{
                        textDecoration : "none"
                    }}>
                    <Button variant="contained" color="secondary" size="small">Show Detail</Button>
                </NavLink>
                <Button variant="contained" color="secondary" size="small" onClick={handleDetailClick}>Detail</Button>
            </Stack>
        </div>
    );
};

export default Meal;