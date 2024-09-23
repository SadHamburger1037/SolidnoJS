import { createEffect, createSignal } from "solid-js";

export default function Counter() {

    const [count, setCount] = createSignal(0);

    createEffect(() => {
        console.log("Varijabla se resila na " + count())
    });

    setInterval(() => {
        setCount(count() + 0.1);
    }, 100);

    return (
        <>
            <div>
                Brojač: {Math.round(count()*10)/10}
            </div>
        </>
    );
}