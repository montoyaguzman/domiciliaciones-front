import { LitElement, html } from '@polymer/lit-element'

class HijoComp extends LitElement {
    
    static get properties() {
        return {
            hijoComp: { type: String },
            valorPadre: { type: Number }
        }                            
    }

    constructor() {
        super()
        this.hijoComp = 'hijo-comp'
        this.valorPadre = 0
    }

    render() {
        return html`
            <h3>${this.hijoComp} works!</h3>
            <span>${this.valorPadre}</span>
            <button @click=${this.changeAllValor}>set other value</button>
            
        `
    }

    changeAllValor() {
        let event = new CustomEvent('value-seted', {
            detail: 5,
            bubbles: true,
            composed: true 
        })
        this.dispatchEvent(event)
    }

}

customElements.define('hijo-comp', HijoComp)