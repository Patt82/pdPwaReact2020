import React, { useState, useEffect } from "react"
import ProductComponents from "../Components/ProductComponents"
import { getProducts } from "../Services/ProductsServices"
import { Container, Spinner } from 'react-bootstrap'
import FormGroup from "../Components/Forms/FormGroup"

function HomePages() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            //"componentDidMount - hook equivalente")
            async function fetchData() {
                setLoading(true);
                const response = await getProducts(search)
                setProducts(response.data.docs); //axios maneja una propiedad data por lo que cambiamos el nombre de la const data anterior por response
                setLoading(false);
            }
            fetchData();
        }, [search]);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <Container>

                <FormGroup label="Search" type="text" placeholder="Search" name="search" value={search} change={handleChange} />
                {
                    loading &&
                    <div style={{ position: "fixed", top: "50%", left: "50%" }}>
                        <Spinner animation="grow" />
                        <Spinner animation="grow" />
                        <Spinner animation="grow" />
                    </div>
                }
                {
                    !loading &&
                    <>
                        {products.map(p => <ProductComponents key={p.id} product={p} seeDetail={true} />)}
                    </>
                }
            </Container>
        </>
    )

}
export default HomePages;