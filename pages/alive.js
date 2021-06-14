import Link from 'next/link'
import { useState } from 'react'

export default function AlivePage(props) {
    const [count, setCount] = useState(0)
    return (
        <div hidden={!props.active}>
            <h1>Keep Alive Page</h1>
            <div>
                <Link href="/">
                    <a>Back Home</a>
                </Link>
            </div>
            <br/>
            <div>
                <span>Count: {count}</span>
                <button onClick={() => setCount(count + 1)}>Add</button>
                <br />
                <input placeholder="Enter text"></input>
            </div>
        </div>
    )
}
