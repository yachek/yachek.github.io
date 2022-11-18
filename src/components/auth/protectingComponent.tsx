import React, {useEffect, useRef, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {Backdrop, CircularProgress} from "@mui/material";

export const WithAuth = (props: any) => {

    const { children } = props;

    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);
    const ignore = useRef(false);

    useEffect(() => {

        if (ignore.current) {
            return;
        }

        ignore.current = true;

        setTimeout(() => {
            setLoading(false);
        }, 1000);

        /*fetch('http://localhost:8080/user/checktoken')
            .then((resp) => {
                if (resp.status === 200) {
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
                setRedirect(true);
            });*/

    });

    if (loading) {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress/>
            </Backdrop>
        );
    }

    if (redirect) {
        return <Navigate to="/login"/>;
    }

    return children;
}
