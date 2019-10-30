import { LitElement, html, css } from '@polymer/lit-element'
import { genericSheet } from '../../assets/css/styles.js'

class Binding extends LitElement {

    static get styles() {
        return [
            genericSheet,
            css`
            :host { display: block;
                border: 1px solid black;
            }`
        ]
    }

    static get properties() {
        return {
            nameBinding: String,
            arrayBinding: Array,
            id: String,
            inputValue: String,
            activeButton: Boolean
        }
    }

    constructor() {
        super()
        this.nameBinding = 'binding'
        this.arrayBinding = [
            { type: 'Texto (contenido)', description: '$\{this.myProp\}' },
            { type: 'En id de un elemento', description: '<div id="$\{myId\}"></div>' },
            { type: 'Propiedades', description: '<input .value="$\{myId\}"></input>' },
            { type: 'Atributos Boolean', description:  '<button $disabled="${\myBoolean\}">nameButton</button>' },
            { type: 'Eventos', description: '<button @onclick="$\{myHandle\}">nameButton</button>' }
        ],
        this.id = 'divId'
        this.inputValue = '12370'
        this.activeButton = true
    }

    render() {
        return html`
            <h2>${this.nameBinding} works!</h2>
            ${this.arrayBinding.map(bindeo => {
                return html`
                <li>
                    <b>${bindeo.type}: </b> <span>${bindeo.description}</span>
                </li>`
            })}
            <div>
                El bindeo siempre es one-way,un hijo comparte datos a un padre
                mediante eventos, los datos se recuperan en la prop detail.
            </div>
            <div>
                <h3>En id de un elemento</h3>
                <div id="${this.id}">expect element id</div>
            </div>
            <div>
                <h3>Propiedades</h3>
                <input type="text" .value="${this.inputValue}"/>
            </div>
            <div>
                <h3>Atributos boolean</h3>
                <input type="text" ?disabled="${this.activeButton}"/>
            </div>
            <div>
                <h3>Eventos</h3>
                <button @click="${this.clickHandler}">fire a event</button>
            </div>
        `
    }

    clickHandler(e) {
        console.log(e) //event
        console.log(e.target) //elemento
    }

}

customElements.define('a-binding', Binding)