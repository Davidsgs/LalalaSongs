import React from 'react'

const HomeView = () => {

    const style = {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        height : '80vh',
        fontSize: "2em"
    }

    return (
        <div style={style}>
            <h1 className="mb-5" style={{fontWeight : "bold", fontSize: "2.3em"}}>Lalala Songs</h1>
            <p>😎Busca la letra de tus canciones favoritas, no dejes de cantar.🎶</p>
        </div>
    )
}

export default HomeView
