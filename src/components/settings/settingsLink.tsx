import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Divider, Fab,
    Grid
} from '@mui/material';
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete'
import AddAccountDialog from "./addAccountDialog";

export const SettingsLink = (props: any) => {

    const [olxLinked, setOlxLLinked] = useState<boolean>();
    const [riaLinked, setRiaLinked] = useState<boolean>();
    const [openOlx, setOpenOlx] = useState(false);
    const [openRia, setOpenRia] = useState(false);

    const handleOlxAdd = () => {
        setOpenOlx(true);
    }

    const handleRiaAdd = () => {
        setOpenRia(true);
    }

    const handleCancelOlx = () => {
        setOpenOlx(false);
    }

    const handleCancelRia = () => {
        setOpenRia(false);
    }

    const handleOlxClose = (value: boolean) => {
        setOpenOlx(false);
        setOlxLLinked(value);
    }

    const handleRiaClose = (value: boolean) => {
        setOpenRia(false);
        setRiaLinked(value);
    }

    const handleDeleteOlx = () => {
        setOlxLLinked(false);
    }

    const handleDeleteRia = () => {
        setRiaLinked(false);
    }

    return (
        <form {...props}>
            <AddAccountDialog open={openOlx} service='olx.ua' onClose={handleOlxClose} onCancel={handleCancelOlx}/>
            <AddAccountDialog open={openRia} service='ria.com' onClose={handleRiaClose} onCancel={handleCancelRia}/>
            <Card>
                <CardHeader
                    subheader="Прив'язати профілі онлайн-магазинів"
                    title="Профілі"
                />
                <Divider/>
                <CardContent>
                    <Grid
                        container
                        spacing={6}
                        wrap="wrap"
                    >
                        <Grid
                            item
                            md={4}
                            sm={6}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            xs={12}
                            alignItems='center'
                        >
                            {
                                !olxLinked && (
                                    <Fab color="primary" aria-label="add" onClick={handleOlxAdd}>
                                        <AddIcon />
                                    </Fab>
                                )
                            }
                            {
                                olxLinked && (
                                    <Fab color="error" aria-label="delete" onClick={handleDeleteOlx}>
                                        <DeleteIcon />
                                    </Fab>
                                )
                            }
                            <Avatar
                                src='https://uaspectr.com/wp-content/uploads/2020/04/Screenshot_144-1024x605.png'
                                sx={{
                                    width: 128,
                                    height: 128,
                                    m: 2
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            md={4}
                            sm={6}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            xs={12}
                            alignItems='center'
                        >
                            {
                                !riaLinked && (
                                    <Fab color="primary" aria-label="add" onClick={handleRiaAdd}>
                                        <AddIcon />
                                    </Fab>
                                )
                            }
                            {
                                riaLinked && (
                                    <Fab color="error" aria-label="delete" onClick={handleDeleteRia}>
                                        <DeleteIcon />
                                    </Fab>
                                )
                            }
                            <Avatar
                                src='https://upload.wikimedia.org/wikipedia/commons/8/81/Ria.com_logo.png'
                                sx={{
                                    width: 128,
                                    height: 128,
                                    m: 2
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </form>
    )
};
