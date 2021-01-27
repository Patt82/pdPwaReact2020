import React, {useState, useContext} from "react"
import {Form,Container} from 'react-bootstrap'
import {useHistory} from 'react-router-dom';
import FormGroup from "../Components/Forms/FormGroup"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import {login} from '../Services/UserServices'
import AlertCustom from '../Components/AlertCustom'
import NetContext from '../Context/NetContext'

function LoginPages() {
    const context = useContext(NetContext);
    const [form,setForm]=useState({email:'',password:''});
    const [loading,setLoading] = useState(false);
    const [alert,setAlert]= useState ({variant:"", text:""})
    const history = useHistory()
    const handleChange = (e)=>{ //e = elemento sobre el que se modifica/escribe
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = (e)=>{
        setLoading(true)
        console.log(form);
        login(form)
        .then(data=>{
            console.log("Data",data)
            if(data.data.token){
                context.loginUser(data.data.token)
                localStorage.setItem("token",data.data.token)
                setAlert({variant:"success",text:"Welcome!"})
                history.push("/") //Al loguearte te manda a la homepage
            }else{
                setAlert({variant:"error!",text:"An error has occurred."})
            }
            setLoading(false)
        },
        error=>{
            console.log("error",error)
            setLoading(false)
        })
        e.preventDefault()
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* <FormGroup label="Name" type="text" placeholder="Enter your name" name="name" value={form.name} change={handleChange}/> */}
                <FormGroup label="Email" type="email" placeholder="Enter your email" name="email" value={form.email} change={handleChange}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <FormGroup label="Password" type="password" placeholder="Enter your password" name="password" value={form.password} change={handleChange}/> 
                <ButtonWithLoading text="Login" loading={loading} />
            </Form>
            <AlertCustom variant={alert.variant} text={alert.text}/>
        </Container>
    )
}

export default LoginPages;