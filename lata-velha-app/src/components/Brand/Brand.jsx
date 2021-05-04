import React from 'react';
import { Button, FormControl, FormHelperText, Input, InputLabel, useTheme } from '@material-ui/core';
import style from './style'

const Brand = () => {
    const theme = useTheme();
    const classes = style(theme);
    const handleSubmitForm = (e) =>{
        e.preventDefault()
        console.log("HUHULLLLLLLL")
    }
    return (
        <form>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="my-input">Marca </InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Informe a marca do veículo</FormHelperText>
            </FormControl>
            <Button 
                className={classes.formButton}
                variant="contained" 
                color="default" 
                type="submit"
                onClick={handleSubmitForm}
            >
                Cancelar
            </Button>
            <Button 
                className={classes.formButton}
                variant="contained" 
                color="primary" 
                type="submit"
                onClick={handleSubmitForm}
            >
                Cadastrar
            </Button>
        </form>
    )
}

export default Brand