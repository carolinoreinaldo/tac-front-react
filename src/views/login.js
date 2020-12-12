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
            <fieldset>
                {this.state.email}
                <FormGroup id="emailId" label="Email" tipoInput="text" mudarValor={this.mudarEmail} />
                <FormGroup id="senhaId" label="Senha" tipoInput="password" mudarValor={this.mudarSenha} />
            </fieldset>
        );
    }
}

export default Login;