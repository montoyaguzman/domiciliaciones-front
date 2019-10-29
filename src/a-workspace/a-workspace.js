import { LitElement, html } from '@polymer/lit-element'

class Workspace extends LitElement {
    
    static get properties() {
        return {
            nameWorkspace: String,
            names: Array,
            isSummerDay: Boolean
        }
    }

    constructor() {
        super()
        this.nameWorkspace = 'workspace works!'
        this.names = [
            'Jose',
            'Jorge',
            'Daniel',
            'David'
        ]
        this.isSummerDay = true
    }

    render() {
        return html`
            <h1>${this.nameWorkspace}</h1>
            <div>
                <h3>Propiedad simple</h3>
                <span>${this.nameWorkspace}</span>
            </div>
            <div>
                <h3>Iteración</h3>
                ${this.names.map(develop =>html`<li>${develop}</li>`)}
            </div>
            <div>
                <h3>Condicional</h3>
                ${
                    this.isSummerDay ? 
                    html`<span>Deberias dar un paseo</span>` 
                    : 
                    html`<span>Podrías descansar en casa</span>`
                }
            </div>

        `
    }

}

customElements.define('a-workspace', Workspace)