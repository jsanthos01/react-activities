import React from 'react'

function Header() {
    const headerStyle = {
        background: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "10px"
    }
    return (
        <header style={headerStyle}>
            <h1>My Grocery List</h1>
        </header>
    )
}

export default Header
