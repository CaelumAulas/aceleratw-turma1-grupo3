import React from 'react';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';

const SignIn = () => {
    const handleSubmitForm = (e) =>{
        e.preventDefault()
        console.log("HUHULLLLLLLL")
    }
    return (
        <form onSubmit={handleSubmitForm}>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="my-input">Email </InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Informe seu e-mail</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="my-input">Senha</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">Informe sua senha</FormHelperText>
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
                Entrar
            </Button>
        </form>
    )
}

export default SignIn