import { LitElement, html, css } from '@polymer/lit-element'
import { genericSheet } from '../../assets/css/styles.js'
import '../a-binding/a-binding.js'
import '../a-slot/a-slot.js'
import '../a-compose/a-compose.js'
import '../a-properties/a-properties.js'
import '../a-events/a-events.js'
import '../a-lifecycle/a-lifecycle.js'

const spanColor = css`red`;

class Template extends LitElement {
    
    static get styles() {
        /* background-color: var(--main-bg-color); */
        return [
            genericSheet,
            css`
            :host { display: block;
                border: 1px solid yellow;
            }
            h3 { 
                color: ${spanColor}; 
            },
        `]
    }

    static get properties() {
        return {
            name: String,
            names: Array,
            isSummerDay: Boolean
        }
    }

    constructor() {
        super()
        this.name = 'template'
        this.names = [
            'Jose',
            'Jorge',
            'Daniel',
            'David'
        ]
        this.isSummerDay = true
    }

    render() {
        return html`
            <div class="centerText">
                <h2>${this.name} works!</h2>
            </div>
            <div>
                <h3>Propiedad simple</h3>
                <span>${this.name}</span>
            </div>
            <div>
                <h3>Iteración</h3>
                ${this.names.map(develop =>html`<li>${develop}</li>`)}
            </div>
            <div>
                <h3>Condicional</h3>
                ${
                    this.isSummerDay ? 
                    html`<span>Deberias dar un paseo</span>` 
                    : 
                    html`<span>Podrías descansar en casa</span>`
                }
            </div>
            <a-binding></a-binding>
            <a-slot>
                <p slot="middle">esto quiero que vaya en una parte en especifico del a-slot</p>
                <p slot="final">ahora si lo ultimo xD</p>
            </a-slot>
            <a-compose></a-compose>
            <a-properties></a-properties>
            <a-events></a-events> 
            <a-lifecycle></a-lifecycle>
        `
    }

}

customElements.define('a-template', Template)