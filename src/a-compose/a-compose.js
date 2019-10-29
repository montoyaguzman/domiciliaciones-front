import { LitElement, html } from '@polymer/lit-element'

class Compose extends LitElement {
    
    static get properties() {
        return {
            nameCompose: String
        }
    }

    constructor() {
        super()
        this.nameCompose = 'compose'
    }

    render() {
        return html`
            <h1>${this.nameCompose} works!</h1>
            ${this.getHeader()}
            ${this.getBody()}
            ${this.getFooter()}
        `
    }

    getHeader() {
        return html`<div>aqui va un header</div>`
    }

    getBody() {
        return html`<article>article</article>`
    }

    getFooter() {
        return html`<footer>footer</footer>`
    }

}

customElements.define('a-compose', Compose)