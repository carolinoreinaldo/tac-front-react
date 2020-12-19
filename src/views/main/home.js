import React from 'react';
import {withRouter} from 'react-router-dom';
import LocalStorageService from '../../services/LocalStorageService';

class Home extends React.Component {

    state = {
        usuarioLogado: ''
    }

    componentDidMount() {
        const usuario = LocalStorageService.obterUsuarioLogado();
        this.setState({usuarioLogado: usuario});
    }

    render() {
        return (
            <div>
                <h1>Bem vindo {this.state.usuarioLogado.nome}</h1>
            </div>
        )
    }
}

export default withRouter(Home);