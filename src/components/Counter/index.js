import { useEffect, useState } from "react";

function Counter () {

    // USESTATE
    // Mengembalikan sepasang value (array)
    const [angka, setAngka] = useState(0);

    // Membuat fungsi AddAngka
    // Menjalankan di button
    function addAngka () {
        setAngka(angka + 1);
    }

    // USEEFFECT
    /**
     * useEffect dijalankan pada Lifecycle mount dan update
     */

    function updateDOM() {
        console.log("Lifecycle: Dimount");

        // Melakukan side effect: mengakses DOM
        document.title = `Hasil: ${angka}`;
    }

    useEffect(updateDOM, [angka]);

    return(
        <div>
            <p>Hasil : {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;
