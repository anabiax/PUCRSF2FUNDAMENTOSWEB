import './CompraNegada.css';
import { Grid, Typography, Box } from '@mui/material';
import { CancelOutlined } from '@material-ui/icons';


export default function CompraNegada() {
    
    return (
        <>
            <Grid container className="container body" justify="center" alignItems="center">
                <Grid item xs={12} md={8} className="error-message">
                    <Box textAlign="center" padding={5}>
                        <CancelOutlined style={{ color: '#ff1744', fontSize: 80 }} />

                        <Typography variant="h4" component="h2" gutterBottom>
                            Compra não concluída
                        </Typography>

                        <Typography variant="body1">
                            Infelizmente, não foi possível concluir sua compra. Por favor, tente novamente mais tarde.
                        </Typography>
                        
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}