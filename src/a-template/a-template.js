import { LitElement, html, css } from '@polymer/lit-element'
import { genericSheet } from '../../assets/css/styles.js'
import '../a-binding/a-binding.js'
import '../a-slot/a-slot.js'
import '../a-compose/a-compose.js'
import '../a-properties/a-properties.js'
import '../a-events/a-events.js'
import '../a-lifecycle/a-lifecycle.js'
import '../hijo-comp/hijo-comp.js'
import '../hijo2-comp/hijo2-comp.js'

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
            isSummerDay: Boolean,
            valor: { type: Number },
            student: { type: Object},
            teacher: { type: Object}
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
        this.valor = 10
        this.student = {
            name: 'snoppy dog'
        }
        this.teacher = {
            name: 'brenda sedeño'
        }

        document.addEventListener('value-seted', (e) => {
            this.valor = e.detail
        })

        document.addEventListener('name-seted', (e) => {
            this.student = { name: e.detail.studentName }
            // this.teacher = { name: e.detail.teacherName }
        })
    }

    updated(changedProperties) {
        console.log('===== PADRE =====')
        console.log(changedProperties)
    }

    render() {
        return html`
            <div class="centerText">
                <h2>${this.name} works!</h2>
            </div>
            <div> 
                <h1>example with prop</h1>
                <span>Valor: ${this.valor}</span>
                <button @click=${this.changeValor}>incremente</button>
                Valor: <input .value=${this.valor}>
                <hijo-comp valorpadre=${this.valor}></hijo-comp>

                <br/>
                <button @click=${this.cleanValor}>clean</button>

                <div>
                    <h1>example with obj.prop</h1>
                    <span>Nombre: ${this.student.name}</span>
                    Nombre: <input .value=${this.student.name}>
                    <button @click=${this.changeStudentName} >cambia nombre</button>
                    
                    
                    <hijo2-comp .studentPadre=${this.student} 
                                .teacherPadre=${this.teacher}
                    ></hijo2-comp>
                    EN PADRE : ${this.teacher.name}
                </div>

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

    changeValor() {
        this.valor++
        console.log('valor: ', this.valor)
    }

    cleanValor() {
        this.valor = 0
    }

    changeStudentName() {
        this.student = { name: 'juanito perez' }
        this.teacher = { name: 'lucia muñoz' }
        this.requestUpdate()
    }

}

customElements.define('a-template', Template)