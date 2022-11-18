import { Link } from 'react-router-dom';

import { Grid, Stack, Typography } from '@mui/material';

import AuthWrapper from "./authWrapper";
import AuthLogin from "./forms/loginForm";

const LoginComponent = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Вхід</Typography>
                    <Typography component={Link} to="/signup" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Не маєте акаунту?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthLogin />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default LoginComponent;
