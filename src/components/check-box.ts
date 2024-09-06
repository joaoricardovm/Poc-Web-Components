/* eslint-disable wc/guard-super-call */
import { LitElement, html, CSSResult, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { checkboxStyles } from './checkboxStyles.css.js';
import { store } from './store.js';
import { incrementClick } from './checkboxSlice.js';


@customElement('checkbox-component')
export class Checkbox extends LitElement {
  @property({ type: Boolean, reflect: true }) checked = false;

  @property({ type: String }) label: string = '';

  @property({ type: Number }) clickCount: number = 0;

  static styles: CSSResult = checkboxStyles;

  connectedCallback(): void {
    super.connectedCallback();
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      this.clickCount = state.checkbox.clickCount;
      console.log('Current state:', state);
      this.requestUpdate();
    });
  }


  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  private unsubscribe?: () => void;

  private _toggleCheckbox(): void {
    this.checked = !this.checked;
    store.dispatch(incrementClick());
    this.dispatchEvent(new CustomEvent('change'));
  }

  private _onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._toggleCheckbox();
    }
  }

  render(): TemplateResult {
    const colorClass = this.checked ? 'checked' : '';
    console.log('Rendering checkbox');
    return html`
      <div class="checkbox-container">
        <div
          class="checkbox ${colorClass}"
          @click=${this._toggleCheckbox}
          @keydown=${this._onKeyDown}
          role="checkbox"
          aria-checked=${this.checked ? 'true' : 'false'}
          tabindex="0"
        >✓</div>
        <div class="label">${this.label}</div>
        <div class="click-count">Clicks: ${this.clickCount}</div>
      </div>
    `;
  }
}
