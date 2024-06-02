import { html } from 'lit';
import './breadboard-element';

export default {
  title: 'Breadboard',
  component: 'wokwi-breadboard',
  argTypes: {
    color: { control: { type: 'string' } },
  },
  args: {
    color: '#AA0000',
  },
};

const Template = ({ color }) => html`<wokwi-breadboard color=${color}></wokwi-breadboard>`;

export const Default = Template.bind({});
Default.args = { color: '#AA0000' };
