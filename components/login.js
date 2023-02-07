import styles from './layout.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
// import { getSession, setSession, endSession } from '../lib/session';
export const siteTitle = 'Next.js Sample Website';



export default function FormLogin() {
    function sendData(e) {
        const formData = new FormData(e);
        const data = new URLSearchParams
        data.append('password', formData.get('password'))
        data.append('email', formData.get('email'))

        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }).then(response => response.json()).then(data => {

            console.log(data['id']);
            if (data['token'] != null) {
                let session = {
                    user: formData.get('email'),
                    login: true,
                    token: data['token'],
                    id: data['id'],
                    admin: data['admin'],
                }

                window.sessionStorage.setItem('session', JSON.stringify(session))
                window.location.href = "/"
            }
            else {
                alert(data['message']);
            }

            // document.getElementById('test').innerHTML = data['usuario'] == null
        })
    }
    return (

        <section>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                                        <form id='form' class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="email" name='email' id="email" class="form-control" />
                                                    <label class="form-label" for="email">Email</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" name='password' id="password" class="form-control" />
                                                    <label class="form-label" for="password">Senha</label>
                                                </div>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button onClick={() => sendData(document.getElementById('form'))} type="button" class="btn btn-primary btn-lg">Entrar</button>
                                                <Link href="/"><button style={{ marginLeft: '10px' }} type="button" class="btn btn-danger btn-lg">Home</button></Link>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
