import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Api.module.css'

function Projetos() {

    const [ repositories, setRepositories ] = useState([])
    
    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://raw.githubusercontent.com/gu1h77/cruzeiro2023/main/elenco2023.json')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <>
        <section className={styles.projetos}>
            <h2>ELENCO 2023</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    posicao={repo.posicao}
                                    nome={repo.nome}
                                    status={repo.status}
                                    imagem={repo.imagem}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
        </>
    )
}

export default Projetos