import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Rodape from '../../components/Footer';
import Footer from '../../components/Footer';

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);

  const fazerLogin = () => {
    if (login === "") {
      setErroLogin(true);
    } else {
      setErroLogin(false);
    }
    if (senha === "") {
      setErroSenha(true);
    } else {
      setErroSenha(false);
    }
    if (login !== "" && senha !== "") {
      console.log('Iniciando sessão com:', { login, senha });
    }
  };

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Box p={3} boxShadow={3} borderRadius={5} bgcolor="#424242">
          <FormControl fullWidth error={erroLogin}>
            <InputLabel htmlFor="login_nome" style={{ color: '#ffffff' }}>Login</InputLabel>
            <Input
              id="login_nome"
              aria-describedby="login_nome_helper_text"
              value={login}
              onChange={e => setLogin(e.target.value)}
              style={{ color: '#ffffff' }}
            />
            <FormHelperText id="login_nome_helper_text" style={{ color: '#b0bec5' }}>
              {erroLogin ? "O login é obrigatório." : "Digite o seu login."}
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth error={erroSenha} margin="normal">
            <InputLabel htmlFor="login_senha" style={{ color: '#ffffff' }}>Senha</InputLabel>
            <Input
              id="login_senha"
              type="password"
              aria-describedby="login_senha_helper_text"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              style={{ color: '#ffffff' }}
            />
            <FormHelperText id="login_senha_helper_text" style={{ color: '#b0bec5' }}>
              {erroSenha ? "A senha é obrigatória." : "Digite a sua senha."}
            </FormHelperText>
          </FormControl>
          <Box mt={2}>
            <Button variant="contained" color="primary" fullWidth onClick={fazerLogin}>
              Entrar
            </Button>
          </Box>
        </Box>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Login;
