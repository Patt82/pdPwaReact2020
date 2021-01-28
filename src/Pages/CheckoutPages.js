import React, { useState, useEffect } from "react"
import ProductComponents from "../Components/ProductComponents"
import { getProduct } from "../Services/ProductsServices"

function CheckoutPages(props) {


    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [got_product, setGotProduct] = useState(false);
    
    useEffect(
        () => {
            if(got_product === false){
            //"componentDidMount - hook equivalente")
            async function fetchData() {
                const response = await getProduct(props.match.params.id)
                setProduct(response.data);
                setLoading(false)

                if(response){
                    setGotProduct(true)
                }
            }
            fetchData();
            }    
            setGotProduct(true);    
        },[got_product, props.match.params.id]);
        

    return (
        <>
        <div style={{textAlign:"center", margin:"20px"}}>
            <h1>Thanks for shopping with us!</h1>
            <h4>Your order was completed successfully.</h4>
            <h5>You bought:</h5>
    
        </div>
            {
                loading && <div>Loading ...</div>
            }
            {
                !loading &&
                <div>
                    <ProductComponents key={product.id} product={product}  seeBuy={false}/>
                </div>
                
            }
            <p style={{textAlign:"center", margin:"20px"}}>You can now contact +1 404-249-8555 via text message to arrange your cash payment and delivery.</p>
        </>
    )
}

export default CheckoutPages;