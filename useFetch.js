import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {

    //? IMPLEMENTACION DE useRef ACA EN EL useFecth:

    const montado = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(()=>{
        //!no tiene cuerpo, solo un return
        return () => {
            montado.current = false;
        } 

    }, []);

    useEffect(()=>{

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // setTimeout(() => {
                //     //! si montado.current es verdadero entonces se llama al setState
                //     if (montado.current){

                //         setState({
                //             loading: false,
                //             error: null,
                //             data: data
                //         });
                //     }else{
                //         console.log('El setState no se llamo');
                //     }
                    
                // }, 1000);
                
                setState({
                    loading: false,
                    error: null,
                    data: data
                });
            });

    },[url]);

    return state;
};