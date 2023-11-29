import useForm from "../hook/useForm"

const Login = () => {
  const {OnchangeForm, setForm, state} = useForm({
    email: '',
    password: '', 
  })
  console.log(state)
  return (
    <div style={{height: '100vh', width: '100%', backgroundImage: "url('/img/LoginSteam.png')", backgroundPosition: 'center', backgroundSize: 'cover'}}>

      <form action="">
      <input type="text" placeholder='email' name="email" onChange={({target:{value, name}}) => OnchangeForm(value, name )}/>
      <input type="password" placeholder='password' name="password" onChange={({target:{value, name}}) => OnchangeForm(value, name )}/>
      </form>
    </div>
  )
}

export default Login