import './Footer.css';
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <>
            <Grid container className="footer" justify="center">
            <Grid item xs={12}>
                <Box textAlign="center" padding={2}>
                    <Typography variant="body2" color="textSecondary">
                        &copy; 2024 Petshop. Todos os direitos reservados. <br />
                        <Link to="/contatos" color="inherit">Contato</Link> | 
                        <Link to="/" color="inherit"> Sobre Nós</Link> | 
                        <Link to="/" color="inherit"> Termos de Uso</Link> | 
                        <Link to="/" color="inherit"> Política de Privacidade</Link>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        </>
    );
}