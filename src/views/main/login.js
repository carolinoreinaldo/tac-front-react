import React from 'react';

//components
import FormGroup from '../../components/form-group';
import LocalStorageService from '../../services/LocalStorageService';

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        const emailCerto = 'teste@teste.com';
        const senhaCerta = 'teste';

        if (!this.state.email) {
            console.log('Email não pode estar em branco')
            console.log('email', this.state.email)
            return false;
        }

        if (!this.state.senha) {
            console.log('Senha não pode estar em branco')
            return false;
        }

        if (this.state.email !== emailCerto) {
            console.log('Email inválido')
            return false;
        }

        if (this.state.senha !== senhaCerta) {
            console.log('Senha Inválida')
            return false;
        }

        LocalStorageService.salvarUsuarioLogado({
            id: 1,
            nome: 'Teste',
            email: this.state.email,
            nivel: 'ADMIN'
        });

        console.log(LocalStorageService.obterUsuarioLogado());
        //aqui o usuário é mandado pra home

    }

    render() {
        return (
            /*
            col-md-6 offset-md-3 
            isso significa que tem um espaço a esquerda e a direita no tamanho de 3 colunas, 
            e o forma com 6 colunas fica centralizado no meio da tela
            */
            <div className="container">
                <div className="row">
                    <div className="col-md-4  offset-md-3">
                        <FormGroup
                            id="emailId"
                            label="Email"
                            tipoInput="text"
                            valor={this.state.email}
                            mudarValor={e => this.setState({ email: e.target.value})} />
                        <FormGroup
                            id="senhaId"
                            label="Senha"
                            tipoInput="password"
                            value={this.state.senha}
                            mudarValor={e => this.setState({ senha: e.target.value})} />
                        <button
                            type="submit"
                            className="btn btn-primary mx-sm-3"
                            onClick={this.entrar}>Entrar</button>
                        <button
                            type="submit"
                            className="btn btn-danger">cadastrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;