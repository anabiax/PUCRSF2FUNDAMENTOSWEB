//import styles from './home.module.css'

import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';
import img from '../../components/img/img.jpg';  // importando a imagem p/ ser chamada como variável lá embaixo


export default function Home(){
    return(
        <>
            <header className="header-menu">
                <div className='title'>
                    <h1>Soluti<span className='title2'>ON</span></h1>
                </div>

                <Grid xs={12} className="nav">
                    <ul className="lista-menu">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/servicos">Serviços</a>
                        </li>

                        <li>
                            <a href="/produtos">Produtos</a>
                        </li>
                        <li>
                            <a href="/contatos">Contatos</a>
                        </li>

                        <li>
                            <a href="/minhaConta">Minha conta</a>
                        </li>

                        <Link to='/cadastro'>
                            <li>
                                <a href="/cadastro" className='login'>Cadastro</a>
                            </li>
                        </Link>

                    </ul>
                </Grid>

            </header>

            {/* página principal  */}
            <Grid xs= {12} className="main" >

                {/* metade da tela p/ o texto */}
                <aside>
                    <h2>Soluti<span>ON</span></h2>
                    <h3 className="text-gradient">Soluções empresariais</h3>
                    <p>Promovendo conexões resilientes e agregando valor aos potenciais negócios.</p>

                    <Link to='/servicos'>
                        <input type="submit" value="Visualizar serviços" className="enviar" />
                    </Link>

                    <Link to='/produtos'>
                        <input type="submit" value="Visualizar produtos" className="enviar" />
                    </Link>

                </aside>

                <article>
                    <img 
                        src={img} 
                        alt="cachorro bege à esquerda e gato cinza à direita" 
                    />
                </article>
            </Grid>        
        </>
    )
}