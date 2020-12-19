
export default class LocalStorageService  {

    static #chaveUsuarioLogado = '_usuario_logado';

    static obterUsuarioLogado() {
        return localStorage.getItem(LocalStorageService.#chaveUsuarioLogado);
    }

    static salvarUsuarioLogado(usuario) {
        localStorage.setItem(LocalStorageService.#chaveUsuarioLogado, usuario);
    }

    static salvarItem(chave, item) {
        localStorage.setItem(chave, item);
    }
}