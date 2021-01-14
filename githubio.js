customElements.define('x-graph', class extends HTMLElement {
  constructor() {
    super();
    let num = parseInt(this.getAttribute('numbers'), 10) || 1;
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>
        :host {
        --width: var(--size, '480px');
        --num: ${ num };
        width: var(--width);
        min-width: var(--width);
      }
      .graph {
        --cell-size: calc(var(--size, 80vh) / var(--num) * 5);
        width: var(--cell-size);
        height: var(--cell-size);
        background: #fafafa;
        position: relative;
        float: left;
      }
      .graph:after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        border-radius: var(--corner, '100% 0 0 0');
        background: var(--color, #a00);
      }
      </style>
      ${ '<div class="graph"></div>'.repeat(num) }
    `;
  }
  _random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  connectedCallback() {
    const graphs = this.shadowRoot.querySelectorAll('.graph');
    [].forEach.call(graphs, g => {
      g.style.setProperty('--color', this._random([
        '#272884', '#c73095', '#90278a', '#4c207f'
      ]));
      g.style.setProperty('--corner', this._random([
        '100% 0 0 0', '0 100% 0 0',
        '0 0 100% 0', '0 0 0 100%'
      ]));
    });
  }
});
