import styles from './layout.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
// import { getSession, setSession, endSession } from '../lib/session';
export const siteTitle = 'Next.js Sample Website';



export default function FormContato() {
    function sendData(e) {
        const formData = new FormData(e);
        const data = new URLSearchParams
        let token = JSON.parse(sessionStorage.getItem('session')).token
        let id = JSON.parse(sessionStorage.getItem('session')).id
        data.append('nome', formData.get('username'))
        data.append('telefone', formData.get('tell'))
        data.append('idUsuario', id)

        if(id != null){
            fetch('http://localhost:4000/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Auth-Token': token, 
                },
                body: data
            }).then(response => response.json()).then(data => {
                console.log(data['message']);
                alert("Contato criando com sucesso");
                window.location.href = "/"
                // document.getElementById('test').innerHTML = data['usuario'] == null
            })
        }
        else{
            alert("Erro: faça login");
        }

        
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

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Cadastar Contato</p>

                                        <form id='form' class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" name='username' id="username" class="form-control" />
                                                    <label class="form-label" for="username">Nome</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="number" name='tell' id="tell" class="form-control" />
                                                    <label class="form-label" for="tell">Telefone</label>
                                                </div>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button onClick={() => sendData(document.getElementById('form'))} type="button" class="btn btn-primary btn-lg">Registrar</button>
                                                <Link href="/"><button  style={{ marginLeft: '10px' }} type="button" class="btn btn-danger btn-lg">Home</button></Link>
                                                
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
