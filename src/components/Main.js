/**
 * Membuat component main => menampilkan content utama
 */
 import Hello from "./Hello";
 const Main = () => {
    // Mengirimkan props nama nya : name
    return(
        <main>
            <Hello name="Rahman" job="Hacker" />
            <Hello name="Rizal" job="Frontend Developer" />
            <Hello name="Rendi" job="Backend developer" />
            <Hello name="Raka" job="Software Developer" />
            <Hello name="Riska" job="Desainer" />
        </main>
    );
}
export default Main;
