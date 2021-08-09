import React, {useRef, useState } from 'react'
import { Card, Button, Form, Alert, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

export default function ForgotPassword() {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }

    return (
        <>
            <Container className="d-flex align-item-center justify-content-center" style={{minHeight: '100vh'}}>
                <div className="w-100 mt-3" style={{maxWidth: '400px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Password Reset</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-3" type="submit" on>
                                    Reset Password
                                </Button>
                            </Form>
                            <div className="w-100 mt-3 text-center">
                              <Link to="/login">Login</Link>
                            </div>
                        </Card.Body>
                    </Card>   
                    <div className="w-100 text-center">
                        Need an account? <Link to="/signup">Sign Up! </Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

