import { Link } from 'react-router-dom';

import { Grid, Stack, Typography } from '@mui/material';

import AuthWrapper from "./authWrapper";
import SignUpForm from "./forms/signUpForm";

const SignUp = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Реєстрація</Typography>
                    <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Вже зареєстровані?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <SignUpForm />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default SignUp;
