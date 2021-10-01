import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {useHistory} from 'react-router-dom';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const MealDetail = () => {
    const {idMeal} = useParams();
    const [meal , setMeal] = useState({});
    const history = useHistory();

    useEffect(()=>{
       fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
       .then(res=>res.json())
       .then(data=>setMeal(data.meals[0]))
    },[idMeal]);


    const handleButton = () =>{
        history.push('/home');
    }
    return (
        <div>
            <Card sx={{ maxWidth: 700, maxHeight: 900, marginLeft: 50, marginTop: 5, marginBottom: 5, boxShadow: 10}}>
                <CardMedia
                    component="img"
                    width="250"
                    height="250"
                    image={meal.strMealThumb}
                    alt="food picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" color="secondary" component="div">
                       Meal Detail of : {idMeal}
                    </Typography>
                    <Typography gutterBottom variant="h4" color="secondary" component="div">
                       {meal.strMeal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {meal.strInstructions}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" size="small" display="block" onClick={handleButton}>Back to the Home Page</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default MealDetail;