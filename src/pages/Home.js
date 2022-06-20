import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home() {
    
    return(
        <>
            <Hero />
            <Movies title="Latest Movies" />
        </>
    );
}

// Export halaman
export default Home;