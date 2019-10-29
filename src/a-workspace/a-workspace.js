import { LitElement, html } from '@polymer/lit-element'

class Workspace extends LitElement {
    
    static get properties() {
        return {
            nameWorkspace: String
        }
    }

    constructor() {
        super()
        this.nameWorkspace = 'workspace works!'
    }

    render() {
        return html`
            <div>
                ${this.nameWorkspace}
            </div>
        `
    }

}

customElements.define('a-workspace', Workspace)