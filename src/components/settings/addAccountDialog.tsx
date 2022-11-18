import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import React from "react";

export interface AddAccountDialogProps {
    open: boolean;
    service: 'olx.ua' | 'ria.com';
    onCancel: () => void;
    onClose: (value: boolean) => void;
}

export default function AddAccountDialog(props: AddAccountDialogProps) {

    const { open, service, onCancel, onClose } = props;

    const handleClose = () => {
        onClose(true);
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <div>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Прив'яжіть акаунт {service}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Щоб прив'язати акаунт введіть свої client_id та client_secret з кабінета розробника {service}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
