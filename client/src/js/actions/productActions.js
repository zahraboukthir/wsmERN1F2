import {ADDPRODUCTFAILED, ADDPRODUCTSUCCESS, GETPRODUCTFAILED, GETPRODUCTSUCCESS, PRODUCT_LOAD } from "../const/productconst"
import axios from 'axios'

export const getAllProducts=()=>async(dispatch)=>{
dispatch({type :PRODUCT_LOAD})
try {
    const response=await axios.get("http://localhost:7000/prodcut")
    
    dispatch({type: GETPRODUCTSUCCESS,
    payload: response.data.allProducts})
} catch (error) {
    dispatch({type: GETPRODUCTFAILED,
    payload: error})
}
}
export const addProduct=(newProduct)=> async(dispatch)=>{
    console.log(newProduct)
    try {
        const response=await axios.post("http://localhost:7000/prodcut/addproduct",newProduct)
        
        dispatch({type:ADDPRODUCTSUCCESS})
        console.log(response.data)
        dispatch(getAllProducts())
    } catch (error) {
        dispatch({type:ADDPRODUCTFAILED,payload:error})
    }
}