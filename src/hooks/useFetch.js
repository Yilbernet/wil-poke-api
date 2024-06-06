import axios from "axios";
import { useState } from "react";

const useFetch = () => {
    const [apiData, setApiData] = useState();
    const [isLoading, setIsLoading] = useState();
    const [hasError, setHasError] = useState();
    const getApi = (url) => {
        setIsLoading(true);
        axios.get(url)
            .then(res => {
                setHasError(false);
                setApiData(res.data);
            })
            .catch(err => {
                setHasError(true);
                console.log(err);
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 100);
            });
    }
    const getType = (url) => {
        setIsLoading(true);
        axios.get(url)
            .then(res => {
                setHasError(false);
                setApiData({
                    results: res.data.pokemon.map(poke => poke.pokemon),
                });
            })
            .catch(err => {
                setHasError(true);
                console.log(err);
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 100);
            });
    }
    return [apiData, getApi, getType, isLoading, hasError];
}

export default useFetch;