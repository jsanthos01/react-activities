import React, { Component } from 'react'
import PropTypes from "prop-types"

class ListItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.obj.completed ? "line-through": "none"
        }
    }

    getBtnStyle = {
        background: "#ff0000",
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }
    render() {
        const { id, item } = this.props.obj;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {item}
                    <button onClick={this.props.delItem.bind(this, id)} style={this.getBtnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//Proptypes
ListItem.propTypes = {
    obj: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delComplete: PropTypes.func.isRequired
}


export default ListItem
