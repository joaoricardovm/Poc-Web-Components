import { html, TemplateResult } from 'lit';
import '../src/components/poc-webcomponent.js';

export default {
  title: 'PocWebcomponent',
  component: 'poc-webcomponent',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <poc-webcomponent style="--poc-webcomponent-background-color: ${backgroundColor}" .header=${header}></poc-webcomponent>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
