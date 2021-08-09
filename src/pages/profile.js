import React, { useState } from 'react'
import { Card, Button, Alert, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

export default function Profile() {

    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout(e) {
        e.preventDefault()
        setError('')
        try {
            await logout()
            history.push("/login")
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <Container className="d-flex align-item-center justify-content-center" style={{minHeight: '100vh'}}>
                <div className="w-100 mt-3" style={{maxWidth: '400px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Profile</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <strong>Email: </strong> {currentUser.email}
                            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-3">
                        <Button variant="link" onClick={handleLogout}>Log Out</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}
