import { LitElement, html } from '@polymer/lit-element'

class NameComponent extends LitElement {
    
    static get properties() {
        return {
            nameComponent: String
        }
    }

    constructor() {
        super()
        this.nameComponent = 'nameComponent'
    }

    render() {
        return html`
            <h1>${this.nameComponent} works!</h1>
        `
    }

}

customElements.define('a-namecomponent', NameComponent)