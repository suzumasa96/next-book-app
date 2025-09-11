"use client"

import { useState, useActionState } from "react"
import { checkText } from "./actions"

export default function ServerFunctions() {
    const [text, setText] = useState("")
    const [state, submitAction, isPending] = useActionState(checkText, {
        default: "テキストを入力してください",
    })

    return (
        <form action={submitAction}>
            テキスト ：
            <input
                type="text"
                name="myText"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" disabled={isPending}>
                submit!
            </button>
            {state.default && <p>{state.default}</p>}
            {state.error && <p style={{ color: "red" }}>{state.error}</p>}
            {state.success && <p style={{ color: "green" }}>{state.success}</p>}
        </form>
    )
}