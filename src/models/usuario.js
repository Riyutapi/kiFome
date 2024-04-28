class User {
    constructor(id, login, xp, level, titulo, imagem = null) {
        this.id = id;
        this.login = login;
        this.xp = xp;
        this.level = level;
        this.titulo = titulo;
        this.imagem = imagem;
    }
}
