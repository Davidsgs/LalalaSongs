import React from 'react'

const AboutUsView = () => {

    const style = {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        height : '80vh',
        fontSize: "2em"
    }

    return (
        <div className="mx-5" style={style}>
            <h1 className="mb-5" style={{fontWeight : "bold", fontSize: "2.3em"}}>Acerca de...</h1>
            <p>LalalaSongs es una AppWeb para buscar la letra de tus canciones favoritas, fue desarrollada por David García, estudiante de programación de la Universidad de Hurlingham.</p>
        </div>
    )
}

export default AboutUsView
