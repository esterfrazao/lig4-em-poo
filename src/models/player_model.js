class Player {
    constructor(name, className) {
        this._name = name// Referência ao nome do jogador.
        this._className = className; // Referência a classe dele no css, para denominar se será o jogador um ou dois e sua cor.
    }

    get name()      { return this._name }
    get className() { return this._className }
}
