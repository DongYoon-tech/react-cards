import { useState } from 'react';
import axios from "axios";

const useAxios = (URL) => {

    const [state, setState] = useState([]);

    const fetchData = async (formatter = data => data, restOfUrl = "") => {
        const res = await axios.get(`${URL}${restOfUrl}`);
        setState(data => [...data, formatter(res.data)])
    }

    return [state, fetchData]
}

export default useAxios;