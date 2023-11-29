import useForm from "../hook/useForm"

const Login = () => {
  const {OnchangeForm, setForm, state} = useForm({
    email: '',
    password: '',
  })
  console.log(state)
  return (
    <div style={{height: '100vh', width: '100%', backgroundImage: "url('/img/LoginSteam.png')", backgroundPosition: 'center', backgroundSize: 'cover'}}>
      hello
      <input type="text" placeholder='inge' name="email" onChange={({target:{value, name}}) => OnchangeForm(value, name )}/>
      <input type="text" placeholder='inge' name="email" onChange={(e) => console.log(e)}/>
    </div>
  )
}

export default Login