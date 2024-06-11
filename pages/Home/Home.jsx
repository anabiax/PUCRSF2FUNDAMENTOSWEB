//import styles from './home.module.css'

import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';
import img from '../../components/img/imza.jpg';  // importando a imagem p/ ser chamada como variável lá embaixo


export default function Home(){
    return(
        <>
            <header className="header-menu">
                <div className='title'>
                    <h2><span className='title2'>Pet</span>shop</h2>
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
                <aside className="link-wrapper">
                    <h3 className="text-gradient">Cuidado e carinho para o seu <br/> melhor amigo, sempre!</h3>
                    <p>Banho, tosa, saúde e diversão: tudo o que seu pet precisa em um só lugar!</p>

                    <Link to='/servicos' className="enviar-link">
                        <input type="submit" value="Visualizar serviços" className="enviar" />
                    </Link>

                    <Link to='/produtos' className="enviar-link">
                        <input type="submit" value="Visualizar produtos" className="enviar" />
                    </Link>

                </aside>

                <article>
                    <img 
                        src={img} 
                        alt="Cachorro branco sorrindo em um fundo de cor roxa" 
                    />
                </article>
            </Grid>        
        </>
    )
}