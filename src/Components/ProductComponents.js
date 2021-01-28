import { Link } from "react-router-dom"
import {Card, Button} from 'react-bootstrap';
import {Sale} from '../Services/SalesServices'; //clase 18 p1 25'
import NetContext from "../Context/NetContext";
import {useHistory} from 'react-router-dom';


function ProductComponents({product, seeBuy,seeDetail}){
    const history = useHistory()
    console.log("See BUY " + seeBuy)
    console.log("See DETAIL " + seeDetail)

    const handleClick = async (e)=>{
        // console.log(seeBuy)
        e.preventDefault();
        let result = await Sale({
            "products":[product._id]
        })
        history.push("/checkout/" + product._id)
        console.log("Result", result)
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
                        { context.login && seeBuy &&
                            <Link to={"/checkout/" + product._id}><Button variant="primary" onClick={handleClick} style={{margin:"5px"}}>Buy</Button></Link>
                        }
                    </Card.Body>
                </Card>
            )}
        </NetContext.Consumer>
    )    
}

export default ProductComponents;