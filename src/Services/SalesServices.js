import instance from '../Config/axios'

export function Sale(data){
    return instance.post('/sales',data) //pasas con el post la info de la venta
}