import './CadastroPet.css';
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";


export default function CadastroPet() {

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
                        type="password"
                        required
                        />
                        

                        <TextField
                        id="temperamento"
                        label="Temperamento"
                        variant="outlined"
                        name="temperamento"
                        margin="normal"
                        type="password"
                        required
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
    )
}