import React, { useEffect, useMemo, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { getAxios } from '../../helpers/useAxios';
import debounce from 'lodash.debounce';

const SearchSongView = () => {

    const [loading, setLoading] = useState(false);
    const [autor, setAutor] = useState("");
    const [cancion, setCancion] = useState("");
    const [letra, setLetra] = useState(null);
    

    useEffect(() => {
        if(autor.length > 2 && cancion.length > 2) {
            const axiosData = async () => {
                setLoading(true);
                const data = await Promise.all([getAxios(`https://api.vagalume.com.br/search.php?art=${autor}&mus=${cancion}&apikey={5db6479fc482989a89a61ada398fa188}`)]);
                setLoading(false);
                if(data[0].type === "notfound"){
                    setLetra("Autor no existe.")
                }else if(data[0].type === "song_notfound"){
                    setLetra("Canción no encontrada.");
                } else{
                    setLetra(data[0].mus[0].text);
                }
            }
            axiosData();
        }else{
            setLetra(null);
        }
    }, [autor,cancion])

    const debouncedHandleAuthor = useMemo(
        (e) => debounce((e) => {
            setAutor(e.target.value);
        }, 300)
      , []);

    const debouncedHandleLyrics = useMemo(
        (e) => debounce((e) => {
            setCancion(e.target.value);
        }, 300)
    , []);

    const style = {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        height : '80vh',
        width : '100vw',
        fontSize: "2em"
    }

    return (
        <div style={style}>
            <h1 className="mb-5" style={{fontWeight : "bold", fontSize: "1.6em"}}>Buscar Canción</h1>
            <Form.Control onChange={debouncedHandleAuthor} className="formPlaceholder" style={{width : "30vw", marginBottom : "1rem"}} size="lg" type="text" placeholder="Autor"/>
            <Form.Control onChange={debouncedHandleLyrics} className="formPlaceholder" style={{width : "30vw", marginBottom : "1rem"}} size="lg" type="text" placeholder="Nombre de la Canción"/>
            {loading && <Spinner animation="border" variant="dark" />}
            {letra && <p style={{backgroundColor: "#C0FEFC", width : "30vw", marginTop : "1rem", border: "1px solid #ced4da", overflowY: "scroll", fontSize:"0.7em"}}>{letra}</p>}
        </div>
    )
}

export default SearchSongView

