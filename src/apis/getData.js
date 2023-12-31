import axios from "axios";


const api = "https://fakestoreapi.com/products";


async function getData() {
    let result = await axios.get(api);

    return result.data;
}

export default  getData;

