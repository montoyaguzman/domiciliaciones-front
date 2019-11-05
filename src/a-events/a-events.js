import { LitElement, html } from '@polymer/lit-element'

class EventComponent extends LitElement {
    
    static get properties() {
        return {
            nameComponent: { type: String, reflect: true },
            messages: { type: Array, reflect: true }
        }
    }

    constructor() {
        super()
        this.eventsComponent = 'events'
        this.messages = []
    }

    render() {
        return html`
            <h1>${this.eventsComponent} works!</h1>
            <div>
                <button @click="${this.docWrite}">escribe un saludo</button>
            </div>
            <div>
                ${this.messages.map( message => html`<li>${message}</li>` ) }
            </div>
        `
    }

    docWrite() {
        console.log('Se ejecuto el evento...')
        this.eventsComponent = 'nuevo nombre'
        this.messages.push('un nuevo saludo')
        this.requestUpdate()
    }

}

customElements.define('a-events', EventComponent)