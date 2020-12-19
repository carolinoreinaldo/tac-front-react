
export default class LocalStorageService  {

    static #chaveUsuarioLogado = '_usuario_logado';

    static obterUsuarioLogado() {
        const usuarioLogado =  localStorage.getItem(LocalStorageService.#chaveUsuarioLogado);
        return JSON.parse(usuarioLogado);
    }

    static salvarUsuarioLogado(usuario) {
        const usuarioString = JSON.stringify(usuario);
        localStorage.setItem(LocalStorageService.#chaveUsuarioLogado, usuarioString);
    }

    static salvarItem(chave, item) {
        localStorage.setItem(chave, item);
    }
}