import { LitElement, html } from '@polymer/lit-element'
import '../y-test/y-test.js'

class CompTest extends LitElement {
    
    static get properties() {
        return { 
            myName: String 
        }
    }

    constructor() {
        super()
        this.myName = 'José Mont'
    }

    render() {
        return html`
            <p> TestApp works! </p>
            <p> Mi nombres es: ${this.myName} </p>
            <y-test></y-test>
        `
    }
}
customElements.define('x-test', CompTest)