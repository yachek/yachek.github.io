import {useEffect, useState} from 'react';
import {
    Box, Button, Card, CardContent, CardHeader, Divider, FormControl, FormHelperText, Grid, IconButton,
    InputAdornment, InputLabel, OutlinedInput, Stack, Typography
} from '@mui/material';
import { Formik } from 'formik';
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import * as Yup from 'yup';
import {strengthColor, strengthIndicator} from "../../utils/password";

export const SettingsPassword = (props: any) => {

    const [level, setLevel] = useState() as [{ color: string; label: string; }, Function];
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowNewPassword: any = () => {
        setShowNewPassword(!showNewPassword);
    };

    const handleClickShowOldPassword: any = () => {
        setShowOldPassword(!showOldPassword);
    };

    const handleClickShowConfirmPassword: any = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword: any = (event: Event) => {
        event.preventDefault();
    };

    const changePassword = (value: string) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp) as any);
    };

    useEffect(() => {
        changePassword('');
    }, []);

    return (
        <form {...props}>
            <Card>
                <CardHeader
                    subheader="Змінити чи відновити пароль"
                    title="Пароль"
                />
                <Divider />
                <CardContent>
                    <Formik
                        initialValues={{
                            oldPassword: '',
                            newPassword: '',
                            confirmPassword: '',
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            oldPassword: Yup.string().max(255).required('Потрібно ввести старий пароль'),
                            newPassword: Yup.string().max(255).required('Потрібно ввести новий пароль'),
                            confirmPassword: Yup.string().max(255).required('Потрібно підтвердити новий пароль')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                setStatus({ success: false });
                                setSubmitting(false);
                            } catch (err: any) {
                                console.error(err);
                                setStatus({ success: false });
                                setErrors({ submit: err.message });
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="oldPassword">Введіть старий пароль</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.oldPassword && errors.oldPassword)}
                                                id="oldPassword"
                                                type={showOldPassword ? 'text' : 'password'}
                                                value={values.oldPassword}
                                                name="oldPassword"
                                                onBlur={handleBlur}
                                                onChange={(e) => {
                                                    handleChange(e);
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle old password visibility"
                                                            onClick={handleClickShowOldPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            size="large"
                                                        >
                                                            {showOldPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                placeholder="******"
                                                inputProps={{}}
                                            />
                                            {touched.oldPassword && errors.oldPassword && (
                                                <FormHelperText error id="password-old">
                                                    {errors.oldPassword}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="newPassword">Введіть новий пароль</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.newPassword && errors.newPassword)}
                                                id="newPassword"
                                                type={showNewPassword ? 'text' : 'password'}
                                                value={values.newPassword}
                                                name="newPassword"
                                                onBlur={handleBlur}
                                                onChange={(e) => {
                                                    handleChange(e);
                                                    changePassword(e.target.value);
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowNewPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            size="large"
                                                        >
                                                            {showNewPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                placeholder="******"
                                                inputProps={{}}
                                            />
                                            {touched.newPassword && errors.newPassword && (
                                                <FormHelperText error id="helper-text-password-signup">
                                                    {errors.newPassword}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                        <FormControl fullWidth sx={{ mt: 2 }}>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item>
                                                    <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" fontSize="0.75rem">
                                                        {level?.label}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="confirmPassword">Підтвердження паролю</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                                id="confirmPassword"
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                value={values.confirmPassword}
                                                name="confirmPassword"
                                                onBlur={handleBlur}
                                                onChange={(e) => {
                                                    handleChange(e);
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle confirm password visibility"
                                                            onClick={handleClickShowConfirmPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            size="large"
                                                        >
                                                            {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                placeholder="******"
                                                inputProps={{}}
                                            />
                                            {touched.confirmPassword && errors.confirmPassword && (
                                                <FormHelperText error id="password-old">
                                                    {errors.confirmPassword}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    {errors.submit && (
                                        <Grid item xs={12}>
                                            <FormHelperText error>{errors.submit}</FormHelperText>
                                        </Grid>
                                    )}
                                    <Grid item xs={12}>
                                        <Button
                                            disableElevation
                                            disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Змінити пароль
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
        </form>
    );
};
