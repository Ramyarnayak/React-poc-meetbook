import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const genderRef = useRef()
  const dobRef = useRef()
  const cityRef = useRef()
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const { signup , userInfo} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      await userInfo (firstnameRef.current.value, lastnameRef.current.value,  emailRef.current.value, dobRef.current.value, 
        genderRef.current.value , cityRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)


  }

  return (
    <>
          <Container
      className="d-flex align-items-center justify-content-center"
       style={{ minHeight: "100vh" }}
     >
       <div className="w-100" style={{ maxWidth: "400px" }}> 
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="firstname">
              <Form.Label>Firstname</Form.Label>
              <Form.Control type="text" ref={firstnameRef} required />
            </Form.Group>
            <Form.Group id="lastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" ref={lastnameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="dob">
              <Form.Label>DOB</Form.Label>
              <Form.Control type="date" placeholder="dd/mm/yy" ref={dobRef} required />
            </Form.Group>
            <Form.Group id="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" ref={genderRef} required />
            </Form.Group>
            <Form.Group id="gender">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" ref={cityRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div>
      </Container>
    </>
  )
}
