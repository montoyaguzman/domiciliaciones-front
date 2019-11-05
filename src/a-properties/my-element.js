import { LitElement, html } from '@polymer/lit-element'

class MyElement extends LitElement {
    static get properties() { 
      return {
            stringProp: { type: String, reflect: true },
            numberProp: { type: Number, reflect: true },
            booleanProp: { type: Boolean, reflect: true },
            arrayProp: { type: Array, reflect: true },
            objectProp: { type: Object, reflect: true }
        }
    }

    constructor() {
        super()
        this.stringProp = ''
        this.numberProp = 0
        this.booleanProp = false
        this.arrayProp = []
        this.objectProp = {}
    }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change: ', name, newVal)
    super.attributeChangedCallback(name, oldVal, newVal)
  }

    render() {
        return html`
            <p>stringProp ${this.stringProp}</p>
            <p>numberProp ${this.numberProp}</p>
            <p>booleanProp ${this.booleanProp}</p>

            <p>arrayProp: ${this.arrayProp.map((item, index) =>
                html`<span>[${index}]:${item}&nbsp;</span>`)}
            </p>

            <p>objectProp:
                ${Object.keys(this.objectProp).map(item =>
                html`<span>${item}: ${this.objectProp[item]}&nbsp;</span>`)}
            </p>

            <button @click="${this.changeProperties}">change properties</button>
            <button @click="${this.changeAttributes}">change attributes</button>
        `
  }

    changeAttributes() {
        console.log(' =========== changeAttributes =========== ')
        let randy = Math.floor(Math.random()*10)
        let myBool = this.getAttribute('booleanProp')

        this.setAttribute('stringProp', randy.toString())
        this.setAttribute('numberProp', randy.toString())
        this.setAttribute('booleanProp', myBool? '' : null)
        this.setAttribute('arrayProp', JSON.stringify([...this.arrayProp, randy]))
        this.setAttribute('objectProp',
        JSON.stringify(Object.assign({}, this.objectProp, {[randy]: randy})))
        this.requestUpdate()
    }

  changeProperties() {
    console.log(' =========== changeProperties =========== ')
    let randy = Math.floor(Math.random()*10)
    let myBool = this.booleanProp

    this.stringProp = randy.toString()
    this.numberProp = randy
    this.booleanProp = !myBool
    this.arrayProp = [...this.arrayProp, randy]
    this.objectProp = Object.assign({}, this.objectProp, {[randy]: randy})
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`)
    });
  }

}

customElements.define('my-element', MyElement)