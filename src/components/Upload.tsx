import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { UploadProps } from '../types/UploadProps';
import { TextField } from '@material-ui/core';
import { AppState } from '../types/AppState';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(0),
            },
        },
        hidden: {
            display: 'none',
        },
        containar: {
            width: '100%',
            float: 'left',
        },
    }),
);

function Upload(props: UploadProps, state: AppState): JSX.Element {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.hidden}
                id="contained-button-file"
                type="file"
                onChange={(event): void => props.Callback(event)}
            />
            <label htmlFor="contained-button-file" className={classes.containar}>
                <Button variant="contained" color="secondary" component="span">
                    Upload
                </Button>
                <TextField
                    key="localfile"
                    placeholder="LocalFile"
                    value={state.LocalFile}
                    variant="outlined"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </label>
        </div>
    );
}

export default Upload;
