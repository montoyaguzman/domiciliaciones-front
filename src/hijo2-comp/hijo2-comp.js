import { LitElement, html } from '@polymer/lit-element'

class Hijo2Comp extends LitElement {
    
    static get properties() {
        return {
            hijo2Comp: { type: String },
            auxName: { type: String },
            teacherPadre: { type: Object }
        }
    }

    constructor() {
        super()
        this.hijo2Comp = 'hijo-comp2'
        this.auxName = ''
    }

    
    updated(changedProperties) {
        console.log('===== HIJO 2 =====')
        console.log(changedProperties)
    }
    

    render() {
        return html`
            <h3>${this.hijo2Comp} works!</h3>
            ${this.studentPadre && this.studentPadre.name
                ? html`<span>${this.studentPadre.name}</span>`
                : html`<div>no hay nombre</div>`
            } 
            <button @click=${this.changeStudentFromChildren}>set from children</button>
            
            <br/>
            <br/>
            <br/>
            <div>
                EN HIJO: 
                ${this.teacherPadre && this.teacherPadre.name
                    ? html`<span>${this.teacherPadre.name}</span>`
                    : html`<span>no hay teacherPadre</span>`
                }
            </div>
            
        `
    }

    changeStudentFromChildren() {
        let newName ='miguel angel'
        let newTeacher = 'ruben albor'

        this.studentPadre = { name: newName }
        this.teacherPadre = { name: newTeacher }

        let event = new CustomEvent('name-seted', {
            detail: { studentName: newName, teacherName:  newTeacher },
            bubbles: true,
            composed: true 
        })
        this.dispatchEvent(event)
    }

}

customElements.define('hijo2-comp', Hijo2Comp)