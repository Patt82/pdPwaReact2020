import React from "react"
import { Link } from "react-router-dom"
import {Card, Button} from 'react-bootstrap';
import {Sale} from '../Services/SalesServices'; //clase 18 p1 25'
import NetContext from "../Context/NetContext";
import {useHistory} from 'react-router-dom';


function ProductComponents({product, seeDetail}){
    const history = useHistory()
    const handleClick = async (e)=>{
        e.preventDefault();
        let result = await Sale({
            "products":[product._id]
        })
        
        history.push("/checkout")
        console.log(result)
        if(result["data"]["efectivo"]){
            window.open(result["data"]["mp"]["body"]["init_point"],'_blank');
        }
    }
    return(
        <NetContext.Consumer>
            {context=>(
                <Card style={{ width: '50rem', margin:"auto" }}>
                    <Card.Img variant="top" src={product.image_path} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                        {
                            seeDetail &&
                            <Link to={"/products/" + product._id}><Button variant="primary" style={{margin:"5px"}}>Details</Button></Link>
                        }
                        {context.login &&
                           <Link to={"/checkout"}><Button variant="primary" onClick={handleClick} style={{margin:"5px"}}>Buy</Button></Link>
                        }
                    
                        
                    </Card.Body>
                </Card>
            )}
        </NetContext.Consumer>
    )    
}

export default ProductComponents;