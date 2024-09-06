import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('section-title')
export class SectionTitle extends LitElement {

  @property({ type: String }) text = '';

  @property({ type: String }) color = '#344054';

  static styles = css`
    .icon-text-container {
      display: flex;
      align-items: center;
      padding: 16px 0px;
      gap: 8px;
    }

    .text {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      text-align: left;
    }

    .icon {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  render() {
    return html`
      <div class="icon-text-container">
        <span class="icon" style="color: ${this.color}">
          <slot ></slot>
        </span>
        <span class="text" style="color: ${this.color}">${this.text}</span>
      </div>
    `;
  }
}
