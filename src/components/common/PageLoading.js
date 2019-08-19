import React from "react";

import { makeStyles } from "@material-ui/styles";

import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
    center: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const PageLoading = () => {

    const classes = useStyles();

    return (

        <div className={classes.center}>
            <CircularProgress/>
        </div>

    )

};

export default PageLoading;