import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import axios from 'axios';

const name1 = 'Klinsman';
const name2 = 'Joseane';
const name3 = 'Maria';
export const siteTitle = 'Next.js Sample Website';



export default function Usuarios({ users }) {
    const config = {
        headers:{
          'Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzEwNTM1fQ.8qGlet3RBMaXEfEPcNTsjdayUJ1wMHuqjw80Sb_gm_M',
        }
      };
    let teste = async () => {
        try {
            const response = await axios.get('https://pw2-2023-api-agenda.onrender.com/contato/listForUser/1', config);

            console.log(response.data);

        } catch (err) {
            // TODO
            // adicionar tratamento da exceção
            console.error(err);
        }
    }
        return (
            <div className={styles.containerAgenda}>
                {users.map((user) => (
                    <div>
                        <Image
                            priority
                            src="/images/profile.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name2}
                        />
                        <h1 className={utilStyles.heading2Xl}>
                            <Link href={"/details/" + user.id} className={utilStyles.colorInherit}>
                                {user.name}
                            </Link>
                            <button onClick={teste}>Make API call</button>
                        </h1>
                    </div>
                ))}
            </div>
        );
    }
