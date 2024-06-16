import { useState } from 'react';
import './Pagamento.css';
import { Grid, Box, Button, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Pagamento() {

    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleButtonClick = (option) => {
        console.log(`Opção selecionada: ${option}`);

        navigate('/compraSucesso');
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    
    return (
        <>
            <Grid container className="container body">
                <Grid item xs={12} md={4} className="left-buttons">
                    <h2 style={{ fontSize: '40px' }}>Escolha sua forma de pagamento</h2>
                    <p>Por favor, selecione uma opção abaixo:</p>
                    <Box paddingX={2} display="flex" flexDirection="column" alignItems="flex-start">
                        <Button 
                            variant="contained" 
                            className="payment-button" 
                            size='large'  
                            style={{ marginTop: '20px', marginLeft: '100px', height: '60px', borderRadius: '50px', width: '245px', backgroundColor: '#022534' }} 
                            onClick={() => handleOptionClick('Cartão de Crédito')}
                        >
                            Cartão de Crédito
                        </Button>

                        <Button 
                            variant="contained" 
                            className="payment-button" 
                            size='large' 
                            style={{ marginTop: '20px', marginLeft: '100px', height: '60px', width: '245px', borderRadius: '50px', backgroundColor: '#022534' }} 
                            onClick={() => handleOptionClick('Cartão de Débito')} 
                        >
                            Cartão de Débito
                        </Button>

                        <Button 
                            variant="contained" 
                            className="payment-button" 
                            size='large' 
                            style={{ marginTop: '20px', marginLeft: '100px', height: '60px', width: '245px', borderRadius: '50px', backgroundColor: '#022534' }} 
                            onClick={() => handleOptionClick('Boleto Bancário')}
                        >
                            Boleto Bancário
                        </Button>

                        <Button 
                            variant="contained" 
                            className="payment-button" 
                            size='large' 
                            style={{ marginTop: '20px', marginLeft: '100px', height: '60px', width: '245px', backgroundColor: '#022534', borderRadius: '50px' }} 
                            onClick={() => handleOptionClick('Pix')}
                        >
                            Pix
                        </Button>
                        
                    </Box>
                </Grid>

                <Grid item xs={12} md={8} className="payment-details">
                    <Typography variant="h5" gutterBottom>Detalhes do Pagamento</Typography>
                    <form>
                        <TextField
                            label="Número do Cartão"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                        />

                        <TextField
                            label="Data de Validade"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                        />

                        <TextField
                            label="CVV"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                        />

                        <Box marginTop={2}>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                className="submit-button" 
                                onClick={handleButtonClick}
                                size='large' 
                                style={{ height: '60px', borderRadius: '50px', backgroundColor: '#022534' }}
                            >
                                Confirmar Pagamento
                            </Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}