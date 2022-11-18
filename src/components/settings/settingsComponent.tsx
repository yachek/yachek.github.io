import { Box, Container, Typography } from '@mui/material';
import {SettingsLink} from "./settingsLink";
import {SettingsPassword} from "./settingsPassword";

const SettingsComponent = () => (
    <>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
                boxShadow: 2
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    sx={{ mb: 3 }}
                    variant="h4"
                >
                    Налаштування
                </Typography>
                <SettingsLink />
                <Box sx={{ pt: 3 }}>
                    <SettingsPassword />
                </Box>
            </Container>
        </Box>
    </>
);

export default SettingsComponent;
