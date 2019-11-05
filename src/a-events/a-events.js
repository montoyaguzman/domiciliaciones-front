import { LitElement, html, css } from '@polymer/lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { styleMap } from 'lit-html/directives/style-map'

class EventComponent extends LitElement {
    
    static get styles() {
        return [
            css`
                .paleta {
                    border: solid 1px black;
                    background-color: yellow;
                }
                .paleta2 {
                    padding: 30px;
                }
            `
        ]
    }

    static get properties() {
        return {
            eventsComponent: { type: String, reflect: true },
            messages: { type: Array, reflect: true },
            paleta2: { type: Object },
            paleta3: { type: Object },
            statusEvent: { type: String}
        }
    }

    constructor() {
        super()
        this.eventsComponent = 'events'
        this.messages = []
        this.paleta2 = { paleta2: true },
        this.paleta3 = { borderRadius: '10px' }
        this.statusEvent = 'no fire!'

        this.addEventListener('change-value', async (e) => {
            console.log(e.detail.message)
            this.statusEvent = e.detail.message
            console.log(await this.requestUpdate())
        })
    }

    render() {
        return html`
            <h1>${this.eventsComponent} works!</h1>
            <div>
                <button @click="${this.docWrite}">escribe un saludo</button>
            </div>
            <br/>
            <div>
                <b>Custom event ${this.statusEvent}</b>
                <br/>
                <button @click="${this.fireMyEvent}">fire custom event</button>
                <br/>
                <div 
                    class='paleta ${classMap(this.paleta2)}'
                    style='${styleMap(this.paleta3)}'
                >paleta</div>
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
        console.log('eventsComponent', this.eventsComponent)
        console.log('messages', this.messages)
        this.requestUpdate()
    }

    fireMyEvent() {
        let newMessage = new CustomEvent('change-value', {
            detail: { message: 'done!!!' }
        })
        this.dispatchEvent(newMessage)
    }

}

customElements.define('a-events', EventComponent)