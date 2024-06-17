
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

// conceito de SPA - aplicativo web que carrega apenas uma unica pagina HTML e atualiza o conteudo dinamicamente usando JavaScript
//oferecendo assim uma experiencia fluida sem a necessidade de recarregar toda a pagina
export default function Header(){
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
        </>
    )
}