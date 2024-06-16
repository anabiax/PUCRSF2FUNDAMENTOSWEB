import { Grid, Box, Button, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function CadastroPet() {

    const navigate = useNavigate();

    const handleButtonClickServico = () => {
        navigate('/servicos');  // rota p/ redirecionar a outra pagina
    };

    const handleButtonClickProdutos = () => {
        navigate('/produtos');   // rota p/ redirecionar a outra pagina
    };

    const handleButtonClickMeusDados = () => {
        navigate('/minhaConta');  // rota p/ redirecionar a outra pagina          
    };

    // importando itens do material-ui para facilitar a manipulacao dos componentes a partir de elementos pré-prontos

    
    return (
        <>
            <Grid container className="container body">
                <Grid item xs={6} className="left-buttons">
                    <h2 style={{ marginLeft: '80px', fontSize: '50px' }}>Ainda nao cadastrou o seu pet? </h2>
                    <p style={{ marginLeft: '80px', fontSize:'25px' }}>Não perca mais tempo!!!</p>
                    <Box paddingX={2} display="flex" flexDirection="column" alignItems="flex-start">
                        <Button variant="contained" className="cadastrar" size='large'  style={{ marginTop: '20px', marginLeft:'300px', height:'60px', borderRadius:'50px' }} onClick={handleButtonClickMeusDados}>
                            Visualizar Meus Dados
                        </Button>
                        <Button variant="contained" className="cadastrar" size='large' style={{ marginTop: '20px', marginLeft:'300px', height:'60px', width: '245px', borderRadius:'50px' }} onClick={handleButtonClickServico} >
                            Visualizar Serviços
                        </Button>
                        <Button variant="contained" className="cadastrar" size='large' style={{ marginTop: '20px', marginLeft:'300px', height:'60px', width: '245px', borderRadius:'50px' }} onClick={handleButtonClickProdutos}>
                            Visualizar Produtos
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={6} alignItems="center">
                    <Box paddingX={10}>
                        <form>
                            <Typography
                                variant="h3"
                                gutterBottom
                                component="h3"
                                className="title"
                            >
                                Cadastre seu pet
                            </Typography>
                            <TextField
                                id="nome"
                                label="Nome"
                                variant="outlined"
                                name="nome"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <TextField
                                id="tipo"
                                label="Tipo"
                                variant="outlined"
                                name="tipo"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <TextField
                                id="raca"
                                label="Raça"
                                variant="outlined"
                                name="raca"
                                margin="normal"
                                required
                                fullWidth
                            />
                            <TextField
                                id="temperamento"
                                label="Temperamento"
                                variant="outlined"
                                name="temperamento"
                                margin="normal"
                                required
                                fullWidth
                            />
                            <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" className="cadastrar" size='large'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}