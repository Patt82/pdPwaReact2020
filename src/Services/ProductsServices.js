import instance from "../Config/axios"
export const getProducts = (search="") => {
    return instance.get("/products?search="+search)
}

export const getProduct = (id) => {
    return instance.get("/products/"+id)
} 