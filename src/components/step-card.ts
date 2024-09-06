import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('step-card')
export class StepCard extends LitElement {
  @property({ type: String }) StepCardtitle: string = 'Passo 1';

  @property({ type: String }) description: string = 'Abra o app do seu banco e entre no ambiente PIX';

  static styles = css`
    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      border-radius: 4px;
      margin-top: 1rem;
      padding: 1rem;
      background-color: #434d66;
      max-width: 100%;
      box-sizing: border-box;
      border: 1px solid navajowhite;
      align-content: start;
    }

    .title {
      font-size: 1rem;
      color: #657499;
      margin-bottom: 1rem;
      background-color: black;
      padding: 4px 16px;
      border: 1px solid blue;
      border-radius: 100px;
      display: inline-block;
      float: left;
      margin-right: 1rem;
      text-align: left;
    }

    .description {
      font-size: 1rem;
      font-weight: 500;
      color: red;
      margin-top: 0;
      margin-right: 1rem;
      text-align: left;
    }

    .container,
    .container-timer {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 0.5rem;
      margin-right: 1rem;
    }
  `;

  render() {
    return html`
      <div class="card">
        <div class="title">${this.StepCardtitle}</div>
        <div class="description">${this.description}</div>
      </div>
    `;
  }
}
