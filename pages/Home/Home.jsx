//import styles from './home.module.css'

import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';
import img from '../../components/img/imza.jpg';  // importando a imagem p/ ser chamada como variável lá embaixo


export default function Home(){
    return(
        <>
            {/* página principal  */}
            <Grid xs= {12} className="main" >

                <aside className="link-wrapper">
                    <h3 className="text-gradient">Cuidado e carinho para o seu <br/> melhor amigo, sempre!</h3>
                    <p>Banho, tosa, saúde e diversão: tudo o que seu pet precisa em um só lugar!</p>

                    <Link to='/servicos' >
                        <input type="submit" value="Visualizar serviços" className="botao-servicos" />
                    </Link>

                    <Link to='/produtos' >
                        <input type="submit" value="Visualizar produtos" className="botao-produtos" />
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