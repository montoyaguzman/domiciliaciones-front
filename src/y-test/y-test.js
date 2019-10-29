import { LitElement, html } from '@polymer/lit-element'

class CompTestTwo extends LitElement {
    
    static get properties() {
        return {
            componentName: String
        }
    }

    constructor() {
        super()
        this.componentName = '<y-test> component works!'
    }

    render() {
        return html`
            <p>${this.componentName}</p>
        `
    }
}

customElements.define('y-test', CompTestTwo)