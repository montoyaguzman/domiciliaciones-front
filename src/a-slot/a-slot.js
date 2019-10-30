import { LitElement, html, css } from '@polymer/lit-element'

class Slot extends LitElement {

    static get styles() {
        return [
            css`
            :host { display: block;
                border: 2px solid blue;
            }`
        ]
    }
    
    static get properties() {
        return {
            nameComponent: String
        }
    }

    constructor() {
        super()
        this.nameComponent = 'slot'
    }

    render() {
        return html`
            <h2>${this.nameComponent} works!</h2>
            <p>primera linea del componente slot</p>
            <slot name="middle"></slot>
            <p>ultima linea del componente slot</p>
            <slot name="final"></slot>
        `
    }

}

customElements.define('a-slot', Slot)