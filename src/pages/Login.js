import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async () => {
        const res = await axios.post("/api/login", { email, password })
        if (res.data.success) {
            console.log(res.data)
            localStorage.setItem("_hr@authToken", res.data.token)
            navigate('/')
        }
        else{
            toast.error(res.data.message)
        }
    }

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                {/* <!-- Basic login form--> */}
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header justify-content-center"><h3 className="font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        {/* <!-- Login form--> */}
                                        <form>
                                            {/* <!-- Form Group (email address)--> */}
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                <input onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmailAddress" type="email" placeholder="Enter email address" />
                                            </div>
                                            {/* <!-- Form Group (password)--> */}
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                <input onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword" type="password" placeholder="Enter password" />
                                            </div>
                                            {/* <!-- Form Group (remember password checkbox)--> */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                                                </div>
                                            </div>
                                            {/* <!-- Form Group (login box)--> */}
                                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="auth-password-basic.html">Forgot Password?</a>
                                                <button className="btn btn-primary" onClick={handleSubmit} type="button">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small"><Link to="/register">Need an account? Sign up!</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="footer mt-auto footer-dark">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">Copyright &copy; Your Website 2021</div>
                            <div className="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy</a>
                                &middot;
                                <a href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Login