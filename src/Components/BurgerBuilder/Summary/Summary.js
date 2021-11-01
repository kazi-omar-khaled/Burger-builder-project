/*import React from "react";

const Summary = props => {
    const ingredientSummary = props.ingredientss.map(item => {
        return (
            <li key={item.type}>
                <span style={{ textTransform: "capitalize" }}>{item.type}</span>: {item.amount}

            </li>
        )
    })

    return (
        <div>
            <ul>
                {ingredientSummary}

            </ul>
        </div>
    )
}
/* <span style={{ textTransform: "capitalize" }}>{item.type}</span> is used to capitalize first letter of each items.


export default Summary; */