import { LitElement, html, css } from '@polymer/lit-element'
import './my-element.js'

class Properties extends LitElement {
    
    static get styles() {
        return [css`
            :host { display: block;
                border: 1px solid black;
            }
        `]
    }

    static get properties() {
        return {
            propertiesComponent: { type: String } ,
            notes: Array
        }
    }

    constructor() {
        super()
        this.propertiesComponent = 'properties'
        this.notes = [
            { description: 'La conversion por defecto entre atributos y propiedades no es la misma.' },
            { description: 'La conversion entre atributos y propiedades es personalizable en \'converter\'. ' },
            { description: 'Para no hacer cambiar una prop use \'theProp: { attribute: false }.\' ' },
            { description: 'El atributo reflect hace que cuando una propiedad cambie, avise al atributo observado con \'reflect: true\'' },
            { description: 'LitElement utliza toAttribute para convertir el valor de la propiedad en un valor valido para el atributo.' },
            { description: 'Si toAttribute retorna null, el atributo es removido, si retorno undefined, no cambia.' },
            { description: 'LitElment da seguimiento a la refleccion de estados, para no realizar un bucle infinito de updates.' },
            { description: 'Se puede definir explicitamente la funcion hasChanged(oldValue, newValue) para una prop' },
        ]
    }

    render() {
        return html`
            <h3>${this.propertiesComponent} works!</h3>
            <div>
            Existen propiedades(aceptan distintos tipos) y atributos(solo aceptan strings).
            <br/>
            <b>Observar:</b> atributo <= propiedad
            <br/>
            <b>Reflejar:</b> propiedad <= atributo
            </div>
            <my-element></my-element>
            <br/>
            <br/>
            <div>
                <b>NOTAS:</b>
                <br/>
                ${this.notes.map(note =>  html`<li>${note.description}</li>` )}
            </div>
        `
    }

}

customElements.define('a-properties', Properties)