import { html } from 'https://unpkg.com/htm/preact/index.mjs?module'

export default function () {
    const [value, setValue] = useState(0);

    return (
        html`
            <div>Counter: {value}</div>
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setValue(value - 1)}>Decrement</button>
        `
    )
}