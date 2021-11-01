import React from "react";
import './Burger.css';
import Ingredient from "../Ingredient/Ingredient";



const Burger = props => {
    let ingredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredient type={item.type} key={Math.random()} />
        })
    })
        /* using reduce function to make one array for gathering all separate ingredient array.
        reduce function take two parameters by default. first one will take first arrat elemet and then
        it will iterate all element arrays one by one by it's second parameter. */


        .reduce((arr, element) => {
            return arr.concat(element);
        }, []);

    /* When reduce will be called the first array will enter automatically into
    the emty array [] */

    if (ingredientArr.length === 0) {
        ingredientArr = <p>Please add some ingredients!!</p>;
    }

    return (
        <div className="Burger">
            <Ingredient type="bread-top" />
            {ingredientArr}
            <Ingredient type="bread-bottom" />

        </div>
    )
}
export default Burger;