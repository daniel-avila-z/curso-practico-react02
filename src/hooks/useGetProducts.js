import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {

  const [products, setProducts] = useState([]);

//se saca el fecth de los datos del UseEffec
  async function fetchData() {
    const response = await axios(API);
    setProducts(response.data);
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return products;
};

export default useGetProducts; 

// const useGetProducts =(API)=>{
// 	const [products, setProducts] = useState([]);

//     useEffect(() => {
//         useEffect(async () => {
//             const response = await axios(API);
//             setProducts(response.data);
//         }, []);
//     }, []); 
//     return products;
// };