import styles from "./Alert.module.css";

function Alert(props) {
    return(
        <div className={styles.alert}>{props.children}</div>
    );
}

export default Alert;