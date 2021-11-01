import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Contols from "./Controls/Controls";
/*import Summary from "./Summary/Summary"; */
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

import { connect } from "react-redux";
import { addIngredient, removeIngredient, updatePurchasable } from '../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}
/* age jegulo state e chilo segulo ekhon redux theke ashbe props hisebe */

/*const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 90,
}*/

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable()),
    }
}


class BurgerBuilder extends Component {
    state = {
        /*  ingredients: [
              { type: 'salad', amount: 0 },
              { type: 'cheese', amount: 0 },
              { type: 'meat', amount: 0 },
          ],
          totalPrice: 80,
          purchasable: false, */
        modalOpen: false,

    }

    addIngredientHandle = type => {
        this.props.addIngredient(type);
        this.props.updatePurchasable();

    }

    removeIngredientHandle = type => {
        this.props.removeIngredient(type);
        this.props.updatePurchasable();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    handleCheckout = () => {
        this.props.history.push("/checkout");

    }

    /*componentDidMount() {
        console.log(this.props);
    } we can see some valueable build in props of router here for using router like: push*/



    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients} />
                    <Contols
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.props.purchasable} />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader> Your Order Summury </ModalHeader>

                    <ModalBody>
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT Find summury component below in code</h5>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleCheckout}>Continue to checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);

/*<Summary ingredientss={this.state.ingredients} /> */

/*<div className="d-flex flex-md-row flex-column"> by using this we can show both components side by side.
and when the window is small, both components will be shown one below another. */