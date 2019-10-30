import { LitElement, html, css } from '@polymer/lit-element'

class Compose extends LitElement {
    
    static get styles() {
        return [
            css`
            :host { display: block;
                border: 1px solid black;
            }`
        ]
    }

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
            <h2>${this.nameCompose} works!</h2>
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