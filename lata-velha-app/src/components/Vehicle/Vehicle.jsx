import React from 'react';
import { Button, FormControl, FormHelperText, Input, InputAdornment, InputLabel, MenuItem, Select, useTheme } from '@material-ui/core';
import style from './style'

const Vehicle = () => {
    const theme = useTheme();
    const classes = style(theme);
    const handleSubmitForm = (e) =>{
        e.preventDefault()
        console.log("HUHULLLLLLLL")
    }
    return (
        <form>
            <FormControl fullWidth margin="normal">
                <InputLabel id="brand-select-label">Marca</InputLabel>
                <Select
                    labelId="brand-select-label"
                    id="brand-select"
                    value={10}
                    onChange={handleSubmitForm}
                >
                    <MenuItem value={10}>Fiat</MenuItem>
                    <MenuItem value={20}>BMW</MenuItem>
                    <MenuItem value={30}>Ferrari</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="my-input">Modelo </InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Informe o modelo do veículo</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="my-input">Ano </InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Informe o ano do veículo</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="amount-input">Preço</InputLabel>
                <Input
                    id="amount-input"
                    value={10}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                />
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

export default Vehicle