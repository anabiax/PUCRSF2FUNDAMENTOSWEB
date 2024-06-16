import './DadosUsuario.css';
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function DadosUsuario() {

    const navigate = useNavigate();

    const handleButtonClickHome = () => {
        navigate('/');
    };

    return (
        <>
            <Grid container className="container body">
                <Grid item xs={6} className="left-buttons">
                    <h2 style={{ marginLeft: '270px', fontSize: '50px' }}>Dados cadastrais </h2>
                    <Box paddingX={2} display="flex" flexDirection="column" alignItems="flex-start">
                        <Button variant="contained" className="cadastrar" size='large' style={{ marginTop: '20px', marginLeft:'300px', height:'60px', width: '245px', borderRadius:'50px' }} onClick={handleButtonClickHome} >
                            Voltar
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={6} alignItems="center">
                    <Box paddingX={10}>

                        <form>
                            <Typography
                                variant="h4"
                                gutterBottom
                                component="h4"
                                className="title"
                            >
                                Minha conta
                            </Typography>

                            <TextField
                                id="nome"
                                label="Nome"
                                variant="outlined"
                                name="nome"
                                margin="normal"
                                fullWidth
                            />

                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                name="email"
                                margin="normal"
                                fullWidth
                            />

                            <TextField
                                id="endereco"
                                label="Endereco"
                                variant="outlined"
                                name="endereco"
                                margin="normal"
                                fullWidth
                            />

                            <TextField
                                id="telefone"
                                label="Telefone"
                                variant="outlined"
                                name="telefone"
                                margin="normal"
                                fullWidth
                            />

                            <Typography
                                variant="h4"
                                gutterBottom
                                component="h4"
                                className="title"
                            >
                                Meu pet
                            </Typography>

                            <TextField
                                id="nome"
                                label="Nome"
                                variant="outlined"
                                name="nome"
                                margin="normal"
                                fullWidth
                            />

                            <TextField
                                id="tipo"
                                label="Tipo"
                                variant="outlined"
                                name="tipo"
                                margin="normal"
                                fullWidth
                            />

                            <TextField
                                id="raca"
                                label="Raça"
                                variant="outlined"
                                name="raca"
                                margin="normal"
                                fullWidth
                            />

                            <TextField
                                id="temperamento"
                                label="Temperamento"
                                variant="outlined"
                                name="temperamento"
                                margin="normal"
                                fullWidth
                            />

                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}