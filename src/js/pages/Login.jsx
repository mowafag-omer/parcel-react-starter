import React, { useState } from "react"
import { InputGroup } from "../components/inputGroup"
import { SubmitButton } from "../components/submitButton"
import api from '../utils/api'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()

    setError(null)
    setIsLoading(false)

    try {
      setIsLoading(true)
      const res = await api.post('users/authenticate', { email, password })
      console.log('result :', res.data)
      setIsLoading(false)
    }
    catch (err) {
      console.log('err :', err.response.data)
      setError(err.response?.data?.message)
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <InputGroup
          handleChange={setEmail}
          isValid={true}
          label="Email"
          type="email"
          required
        />
        <InputGroup
          handleChange={setPassword}
          isValid={true}
          label="Password"
          type="password"
          required={true}
          minLength="3"
          maxLength="15"
        />
        <SubmitButton name="Login" />
      </form>
    </div>
  )
}

export default Login
