import React from 'react';
import './Categories.css';

const Categories = (props) => {
    console.log(props);
    const {idCategory,strCategory,strCategoryThumb} = props.meal;


    return (
        <div className="category">
            <div>
                <img src={strCategoryThumb} alt="" />
            </div>
            <h3>Category no. {idCategory}</h3>
            <h4>Category Name : {strCategory}</h4>
        </div>
    );
};

export default Categories;