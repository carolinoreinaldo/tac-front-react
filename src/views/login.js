import React from 'react';

//components
import FormGroup from '../components/form-group';

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    mudarEmail = (valor) => {
        this.setState({ email: valor });
    }

    mudarSenha = (valor) => {
        this.setState({ senha: valor });
    }

    render() {
        return (
            /*
            col-md-6 offset-md-3 
            isso significa que tem um espaço a esquerda e a direita no tamanho de 3 colunas, 
            e o forma com 6 colunas fica centralizado no meio da tela
            */
            <div className="container">
                <form className="col-md-6 offset-md-3">
                    <FormGroup id="emailId" label="Email" tipoInput="text" mudarValor={this.mudarEmail} />
                    <FormGroup id="senhaId" label="Senha" tipoInput="password" mudarValor={this.mudarSenha} />
                    <button type="submit" className="btn btn-primary mx-sm-3">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Login;