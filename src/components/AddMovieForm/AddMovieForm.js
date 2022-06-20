import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../../features/moviesSlice";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";

function AddMovieForm() {

    // Membuat dispatch
    const dispatch = useDispatch();

    // Membuat navigation
    const navigation =  useNavigate();

    // membuat state object
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
    });

     // State untuk error title,date, type, dan  poster
     const [isTitleError, setIsTitleError] = useState(false);
     const [isDateError, setIsDateError] = useState(false);
     const [isPosterError, setIsPosterError] = useState(false);
     const [isTypeError, setIsTypeError] = useState(false);
 
     const{ title, date, poster, type } = formData;

    // membuat fungsi handle change untuk handle semua input form
    function handleChange(e) {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });
    }


    function validate() {
          // Jika title atau date kosong, set error menjadi true dan jika tidak maka akan menambahkan data
          if (title === "") {
            setIsTitleError(true);
            return false;
        }

        else if(date === "") {
            setIsDateError(true);
            setIsDateError(false);
            return false;
        }
        else if(poster === "") {
            setIsPosterError(true);
            setIsPosterError(false);
            return false;
        }
        else if(type === "") {
            setIsTypeError(true);
            setIsTypeError(false);
            return false;
        }
        else {
            setIsTitleError(false);
            setIsDateError(false);
            setIsPosterError(false);
            return true;
        }
    }

    function submitMovie() {
        const movie = {
            id:nanoid(),
            title: title,
            year: date,
            type: type,
            poster:poster,
        };
        
        dispatch(addMovie(movie));

        navigation("/")
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate() && submitMovie();
    }
 
    
    
    return(
        <div className={styles.container}>
            <section className={styles.addmovieform}>
                <div className={styles.addmovieform__left}>
                    <img className={styles.addmovieform__image} src="https://picsum.photos/600/400" alt=""></img>
                </div>
                <div className={styles.addmovieform__right}>
                    <form onSubmit={handleSubmit}>
                            <h2 className={styles.addmovieform__title}>Add Movie Form</h2>
                        <div className={styles.addmovieform__group}>
                            <label   className={styles.addmovieform__label} htmlFor="title">Title</label>
                            <input   className={styles.addmovieform__input} type="text" id="title" value={title} name="title" onChange={handleChange}/>
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>

                        <div className={styles.addmovieform__group}>
                            <label   className={styles.addmovieform__label} htmlFor="title">Date</label>
                            <input   className={styles.addmovieform__input} type="number" id="date" value={date} name="date" onChange={handleChange}/>
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>

                        <div className={styles.addmovieform__group}>
                            <label   className={styles.addmovieform__label} htmlFor="poster">Poster</label>
                            <input className={styles.addmovieform_picture} type="text" value={poster} name="poster" onChange={handleChange}/>
                            {isPosterError && <Alert>Link Gambar Wajib Diisi</Alert>}
                        </div>

                        <div className={styles.addmovieform_group2}>
                            <label   className={styles.addmovieform__label} htmlFor="type">Type</label>
                            <select className={styles.addmovieform_select}  id="" value={type} name="type" onChange={handleChange}>
                                <option value="">Pilih Kategori</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Horor">Horor</option>
                                <option value="Comedy">Comedy</option>
                            </select>
                            {isTypeError && <Alert>Link Gambar Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.addmovieform__group}>
                            <Button variant="secondary" size="sm, md, lg" full>Add Movie</Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;