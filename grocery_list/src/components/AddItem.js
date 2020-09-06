import React, { Component } from 'react'
import PropTypes from "prop-types"

class AddItem extends Component {
    state = {
        item: "",
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({item: ""});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input 
                    type="text"
                    name="item"
                    placeholder="Add Item"
                    style={{flex: "10", padding: "5px"}}
                    value={this.state.item}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    name="Submit"
                    className="btn"
                    style={{flex: "1"}}
                />
            </form>
        )
    }
}

AddItem.propTypes = {
    addItem: PropTypes.func.isRequired,
}
export default AddItem
