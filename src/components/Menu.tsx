import React from 'react';
import { Button, Grid, Select, MenuItem, Checkbox, TextField } from '@material-ui/core';
import { MenuProps } from '../types/MenuProps';
import Upload from './Upload';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        nav: {},
    }),
);

function Menu(props: MenuProps): JSX.Element {
    const classes = useStyles();
    return (
        <div className={classes.nav}>
            <Upload Callback={props.HandleLocalfileChange}></Upload>
            <Grid container spacing={0}>
                <Grid item md={3}>
                    <Select
                        fullWidth
                        key="microcontroller"
                        placeholder="Microcontroller"
                        value={props.Microcontroller}
                        onChange={props.HandleMicrocontrollerChange}
                        variant="outlined"
                    >
                        {props.Microcontrollers.map((item) => {
                            return (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </Grid>
                <Grid item md={3}>
                    <Select
                        fullWidth
                        key="keyboard"
                        placeholder="Keyboard from qmk.fm"
                        value={props.Keyboard}
                        onChange={props.HandleKeyboardChange}
                        variant="outlined"
                    >
                        {props.Keyboards.map((item) => {
                            return (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </Grid>
                <Grid item md={3}>
                    <TextField
                        key="keymap"
                        placeholder="Keymap"
                        value={props.Keymap}
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item md={3}>
                    <Button variant="contained" color="secondary" onClick={props.HandleLoadClick}>
                        Load
                    </Button>
                </Grid>
            </Grid>
            <div>
                <span>Flashers enabled</span>
                <Grid container spacing={0}>
                    <Grid item>
                        <Checkbox
                            name="dfu"
                            title="DFU"
                            value={props.Keymap}
                            onChange={props.HandleDFUChange}
                            checked={props.DFU}
                        />
                        <label>DFU</label>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            name="halfkay"
                            title="Halfkay"
                            onChange={props.HandleHalfkayChange}
                            checked={props.Halfkay}
                        />
                        <label>Halfkay</label>
                    </Grid>
                    <Grid item>
                        <Checkbox name="stm32" title="STM32" onChange={props.HandleSTM32Change} checked={props.STM32} />
                        <label>STM32</label>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            name="caterina"
                            title="Caterina"
                            onChange={props.HandleCaterinaChange}
                            checked={props.Caterina}
                        />
                        <label>Caterina</label>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            name="flashwhenready"
                            title="Flashwhenready"
                            onChange={props.HandleFlashwhenreadyChange}
                            checked={props.Flashwhenready}
                        />
                        <label>Flash when ready</label>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            name="autoflash"
                            title="Autoflash"
                            onChange={props.HandleAutoflashChange}
                            checked={props.Autoflash}
                        />
                        <label>Auto flash</label>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={props.HandleFlashClick}>
                            Flash
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="default" onClick={props.HandleResetClick}>
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Menu;
