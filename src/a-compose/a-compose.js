import { LitElement, html, css } from '@polymer/lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { styleMap } from 'lit-html/directives/style-map'

class Compose extends LitElement {
    
    static get styles() {
        return [
            css`
            :host { display: block;
                border: 1px solid black;
            }
            .myDiv {
                background-color: yellow;
            }
            `
        ]
    }

    static get properties() {
        return {
            nameCompose: String,
            styleForDiv: Object
        }
    }

    constructor() {
        super()
        this.nameCompose = 'compose'
        this.styleForDiv = { color: 'white', backgroundColor: 'black' }
        this.classes = { myDiv: false, otherClass: false }
    }

    render() {
        return html`
            <h2>${this.nameCompose} works!</h2>
            ${this.getHeader()}
            ${this.getBody()}
            ${this.getFooter()}

            <div class=${classMap(this.classes)} style=${styleMap(this.styleForDiv)}>
                este es un div estilizado
            </div>
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