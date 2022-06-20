/**
 * Membuat component hello
 * Mencetak UI atau elements
 */

const Hello = (props) => {
    // Melakukan destruction props (object)
    // Di dalam return adalah jsx
    return (
        <div className="hello">
            <h2>Hallo React</h2>
            <p>Saya {props.name} - Bekerja sebagai {props.job} </p>
        </div>
    );
}

export default Hello;