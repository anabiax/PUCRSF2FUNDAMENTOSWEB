import './Login.css';
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate(); // criando instancia p/ redirecionamento

    const handleButtonClick = () => {
        navigate('/cadastroPet');  // rota p/ redirecionar a outra pagina 
    };

    return (
        <>
            <Grid container className="container body">
                <Grid item xs={6} className="imagem2"></Grid>
                <Grid item xs={6} alignItems="center">
                    <Box paddingX={10}>

                        <form>
                            <Typography
                                variant="h3"
                                gutterBottom
                                component="h3"
                                className="title"
                            >
                                Entrar
                            </Typography>

                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                name="email"
                                margin="normal"
                                fullWidth
                                required
                            />

                            <TextField
                                id="senha"
                                label="Senha"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                type="password"
                                className="senhaConfirmar"
                                required
                                fullWidth
                            />

                            <Box marginTop={2} textAlign="center">
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    className="cadastrar" 
                                    size='large'
                                    onClick={handleButtonClick}
                                >
                                    Entrar
                                </Button>
                            </Box>
                        </form>
                        
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}