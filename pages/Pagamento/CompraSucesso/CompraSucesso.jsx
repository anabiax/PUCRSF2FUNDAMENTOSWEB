import { Grid, Typography, Box } from '@mui/material';
import { CheckCircleOutline } from '@material-ui/icons';


export default function CompraSucesso() {
    return (
        <Grid container className="container body" justify="center" alignItems="center">
            <Grid item xs={12} md={8} className="success-message">

                <Box textAlign="center" padding={5}>
                    <CheckCircleOutline style={{ color: '#00e676', fontSize: 80 }} />

                    <Typography variant="h4" component="h2" gutterBottom>
                        Compra efetuada com sucesso!
                    </Typography>
                    <Typography variant="body1">
                        Agradecemos pela sua compra. Em breve você receberá um e-mail com os detalhes.
                    </Typography>

                </Box>
            </Grid>
        </Grid>
    );
}