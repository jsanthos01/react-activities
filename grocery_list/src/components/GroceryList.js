import React, { Component } from 'react'
import ListItem from "./ListItem";
import PropTypes from "prop-types"

class GroceryList extends Component {
    render() {
        return this.props.groceryList.map((obj) => (
            <ListItem key={obj.id} obj={obj} delItem={this.props.delItem} markComplete={this.props.markComplete} />
        ))
    }
}

//Proptypes
GroceryList.propTypes = {
    groceryList: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delComplete: PropTypes.func.isRequired
}
export default GroceryList
