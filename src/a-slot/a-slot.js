import { LitElement, html } from '@polymer/lit-element'

class Slot extends LitElement {
    
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
            <p>primera linea del componente slot</p>
            <slot name="middle"></slot>
            <p>ultima linea del componente slot</p>
            <slot name="final"></slot>
        `
    }

}

customElements.define('a-slot', Slot)