import { Box, Grid } from '@mui/material';
import {ReactElement} from "react";
import AuthCard from "./cards/authCard";

const AuthWrapper = ({ children }: { children: ReactElement }) => (
    <Grid
        container
        justifyContent='center'
        alignItems='center'
        paddingTop={8}
    >
        <Grid
            item
            sm={5}
            xs={12}
        >
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    borderRadius: 1,
                    boxShadow: 2,
                    display: 'flex'
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems='center'
                >
                    <Grid item xs={12}>
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            alignItems="center"
                            //sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
                        >
                            <Grid item>
                                <AuthCard>{children}</AuthCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
);

export default AuthWrapper;
