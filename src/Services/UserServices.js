import instance from "../Config/axios"

const service = "users";
export const create = (data) => {
    return instance.post (service+"/web/register",data) //habia quedado /web/registro y lo cambie a /register, tenerlo en cuenta por potenciales errores
}
export const login = (data) => {
    return instance.post (service+"/web/login",data)
}

//Cambie el nombre del archivo de UsuarioServices.js a UserServices.js