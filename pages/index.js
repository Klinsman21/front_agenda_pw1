import Usuarios from '../components/usuarios';
import { getSession, setSession, endSession } from '../lib/session';
import styles from '../components/layout.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react";


export default function Home({ session, teste }) {
  const [data, setData] = useState("");
  const [contatos, setContatos] = useState("");
  useEffect(() => {
    try {
      setData(JSON.parse(sessionStorage.getItem('session')));
      if (sessionStorage.getItem('session').length > 5) {
        console.log(JSON.parse(sessionStorage.getItem('session')).token)
        fetch(`https://pw2-2023-api-agenda.onrender.com/contato/listForUser/${JSON.parse(sessionStorage.getItem('session')).id}`, {
          headers: {
            'Auth-Token': JSON.parse(sessionStorage.getItem('session')).token,
          },
        })
          .then(response => response.json())
          .then(response => {
            console.log(response)
            setContatos(response)
          })
      }
    } catch (error) {
      setData(null);
    }
  }, [])

  function remove(id) {
    fetch(`https://pw2-2023-api-agenda.onrender.com/contato/${id}`, {
      headers: {
        'Auth-Token': JSON.parse(sessionStorage.getItem('session')).token,
      },
      method: 'DELETE',
    })
      .then(response => {
        window.location.href = '/'
      })
  }

  function logout() {
    window.sessionStorage.removeItem("session");
    window.location.href = '/'
  }

  return (
    <div>
      {
        data ? (
            <div>
              <h1 style={{ textAlign: 'center' }}>Agenda de contatos do usuário: {data.user}</h1>
              <div className={styles.container}>
                {
                  contatos.contatos && (
                    contatos.contatos.map((contato) => (
                      <div class="card" style={{ height: '100px;', margin: '10px' }}>
                        <div class="card-body">
                          <h5 class="card-title">Nome: {contato.nome}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Telefone: {contato.telefone}</h6>
                          <button onClick={() => remove(contato.id)} type="button" class="btn btn-danger btn-sm">Excluir Contato</button>
                          <button style={{ marginLeft: '10px' }} onClick={() => remove()} type="button" class="btn btn-warning btn-sm">Editar Contato</button>
                          {/* <a href="javascript:remove()" class="card-link"></a>
                        <a href="/update" class="card-link">Editar Contato</a> */}
                        </div>
                      </div>
                    ))
                  )
                }
              </div>
              <center>
                <Link href="/criarContato"><button style={{ marginLeft: '10px', marginTop: '20px' }} type="button" class="btn btn-success btn-lg">Criar Contato</button></Link>
                <button onClick={() => logout()} style={{ marginLeft: '10px', marginTop: '20px' }} type="button" class="btn btn-danger btn-lg">Sair</button>
              </center>
            </div>

        ) : (
          <div>
            <h1 style={{ textAlign: 'center' }}>Agenda de contatos</h1>
            <div className={styles.container}>
              <Link href={"/login"}>
                <button type="button" class="btn btn-primary">Fazer Login</button>
              </Link>
              <Link href={"/register"}>
                <button type="button" class="btn btn-success">Cadastre-se</button>
              </Link>
            </div>
          </div>
        )

      }

    </div>
  );
}

export async function getStaticProps() {
  const session = getSession()

  return {
    props: {
      session,
    },
  };
}
