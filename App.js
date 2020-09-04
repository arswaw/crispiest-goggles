import { html } from 'https://unpkg.com/htm/preact/index.mjs?module'
//import Counter from './Counter.js';

export default function (props) {
    return html`
        <h1>This is ${props.name}!</h1>
    `;
} 