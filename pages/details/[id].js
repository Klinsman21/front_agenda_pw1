import Head from 'next/head';
import Detalhes from '../../components/detalhes';
import utilStyles from '../../styles/utils.module.css'
import { getInfoUser } from '../../lib/infos';


export default function DetalhesPage({ UserInfo, id }) {
  return (
    <center>
      <title>Detalhes</title>
      <section className={utilStyles.headingMd}>
        <p>Detalhes do Contato</p>
        <h1>{UserInfo.name}</h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Detalhes info={UserInfo} />
      </section>
    </center>
  );
}

export async function getStaticPaths() {
  const path = [
    { params: { id: "klinsman" } },
    { params: { id: "joseane" } },
    { params: { id: "maria" } }
  ]
  return {
    paths: path,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const UserInfo = getInfoUser(params.id)
  const id = params.id
  return {
    props: {
      UserInfo,
      id,
    },
  };
}