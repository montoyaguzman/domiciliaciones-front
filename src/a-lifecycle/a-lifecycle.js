import { LitElement, html } from '@polymer/lit-element'

class LifeCycle extends LitElement {
    
    static get properties() {
        return {
            lifecycle: { type: String },
            callbacks: { type: Array },
            methods: { type: Array }
        }
    }

    constructor() {
        super()
        this.lifecycle = 'lifecycle'
        this.callbacks = [
            { id: 1, name:'connectedCallback', description: 'Invocado cuando se agrega un componente al DOM.' },
            { id: 2, name:'disconnectedCallback', description: 'Invocado cuando un componente se remueve del del DOM.' },
            { id: 3, name:'adoptedCallback', description: 'Se ejecuta si un componente cambia de documento.' },
            { id: 4, name:'atributeChangedCallback', description: 'Se ejecuta cuando los atributos de un componente cambian' },
            { id: '**', name:'NOTA', description: 'TODOS LOS METODOS INVOCAN A SU METODO SUPER \'super()\' AL INICIO' }
        ]
        this.methods = [
            { id: 1, name: 'hasChanged', description: 'Funcion de todas las propiedas que valida si hubo un cambio y programa el update.' },
            { id: 2, name: 'requestUpdate', description: 'Ejecuta las actualizaciones programadas.' }
        ]
    }

    render() {
        return html`
            <h1>${this.lifecycle} works!</h1>
            <div>
                Lit Element actualiza de forma asincrona con base en observar cambios en las propiedades.
                <br/>
                A grandes rasgos:
                <br/>
                1. Una propiedad es seteada.
                <br/>
                2. Verifica si se requiere una actualizacion, si se requiere se realiza.
                <br/>
                3. Durante el update se procesan las propiedades y atributos y se ejecuta el render.
                <br/>
                4. Resolucion de la promesa, indicando la completitud de la actualizacion.
                <br/>
                5. Basado en eventloop.
            </div>
            <br/>
            <div>
                <b>Callbacks del ciclo de vida en Lit</b>
                ${this.callbacks.map( callback => html`
                        <li>
                            <b>${callback.name}</b> : <span>${callback.description}</span>
                        </li>
                    `)
                }
            </div>
            <br/>
            <div>
                <b>Métodos y propiedades</b>
                ${this.methods.map( item => html`
                        <li>
                            <b>${item.name}</b> : <span>${item.description}</span>
                        </li>
                    `)
                }
            </div>
        `
    }

}

customElements.define('a-lifecycle', LifeCycle)