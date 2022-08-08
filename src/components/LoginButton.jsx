
import {useNavigate} from 'react-router-dom'

const LoginButton=()=>{
    const navigate=useNavigate()

    const goToNextPage=()=>{
        navigate('/list')
    }
    return(
        <div>
            <button class="loginbutton" onClick={goToNextPage}>Login</button>
        </div>
    )
}
export default LoginButton;