import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {},
    }),
);

function Footer(): JSX.Element {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography variant="body1">Footer</Typography>
        </div>
    );
}

export default Footer;
