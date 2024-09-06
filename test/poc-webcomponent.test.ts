import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { PocWebcomponent } from '../src/components/poc-webcomponent.js';
import '../src/components/poc-webcomponent.js';

describe('PocWebcomponent', () => {
  let element: PocWebcomponent;
  beforeEach(async () => {
    element = await fixture(html`<poc-webcomponent></poc-webcomponent>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
