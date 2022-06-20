import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies(props) {
   // Membuat state movies
  const {title}= props;
  
  const movies = useSelector((store) => store.movies.movies);
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__judul}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Movies;