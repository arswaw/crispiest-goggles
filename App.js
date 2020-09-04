import { html } from 'https://unpkg.com/htm/preact/index.mjs?module'

export default function App (props) {
    return html`<h1>Hello ${props.name}!</h1>`;
}