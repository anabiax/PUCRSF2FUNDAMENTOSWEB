import './CadastroUsuario.css';
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function CadastroUsuario() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/login');  // rota p/ redirecionar a outra pagina
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
                            Crie a sua conta
                            </Typography>

                            <TextField
                            id="nome"
                            label="Nome completo"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth
                            required 
                            />

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
                            />
                            

                            <TextField
                            id="confirmarSenha"
                            label="Confirmar senha"
                            variant="outlined"
                            name="confirmarSenha"
                            margin="normal"
                            className="senhaConfirmar"
                            type="password"
                            required
                            />

                            <TextField
                            id="endereco"
                            label="Endereço"
                            variant="outlined"
                            name="endereco"
                            margin="normal"
                            fullWidth
                            required
                            />

                            <TextField
                            id="cidade"
                            label="Cidade"
                            variant="outlined"
                            name="cidade"
                            margin="normal"
                            fullWidth
                            required
                            />


                            <TextField
                            id="estado"
                            label="Estado"
                            variant="outlined"
                            name="estado"
                            margin="normal"
                            fullWidth
                            required
                            />

                            <TextField
                            id="telefone"
                            label="Telefone"
                            variant="outlined"
                            name="telefone"
                            margin="normal"
                            fullWidth
                            required
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