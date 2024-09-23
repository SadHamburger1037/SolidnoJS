import { createMemo, createSignal } from "solid-js";

function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

export default function Najjacibrojac() {
    const [count, setCount] = createSignal(1);
    const fib = createMemo(() => {
        console.log("Računam!");
        return fibonacci(count());
    })

    return (
        <>
            <div>
                <button onClick={() => setCount(count() + 1)}>+1</button>
                <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
                <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
                <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
                <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
                <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
                <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
                <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
            </div>
        </>
    );
}