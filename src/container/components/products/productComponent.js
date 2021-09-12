import {React, useEffect} from "react";
import ProductList from "./productList";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { PROD_URLS } from "../../../baseUrls/prodUrls";
import { setproduct } from "../../../redux/actions/productActions";
import { Link } from "react-router-dom";



const ProdComponent = () =>{
    
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const response = await axios.get(`${PROD_URLS}`).catch((err) =>{
            console.log("Err", err);
        });
        
        dispatch(setproduct(response.data));
    }

    useEffect(() =>{
        fetchProducts();
    }, );

    console.log("Products:", products);

    const renderList = products.map((product) =>{
        const {id, category, description, image, price, title, rating} = product
        return(
            <div className="container">
            <div className="row d-flex justify-content" key={id}>
            <div className="col-md-4">
            
            <div className="card">
            <img src={image} class="card-img-top" alt="title"/>
                <div className="card-body">
                    <div className="card-title">
                        <h5>{title}</h5>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Category: {category}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        );
    });

    return <>{renderList}</>
}

export default ProdComponent;