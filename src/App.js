// Mengimport halaman Home
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import PopularMovie from "./pages/movie/Popular";
import Create from "./pages/movie/Create";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated"
// import theme provider;
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/Detail";


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/create" element={<Create  />} />
          <Route path="movie/popular" element={<PopularMovie />} />
          <Route path="movie/now" element={<NowPlayingMovie />} />
          <Route path="movie/top" element={<TopRatedMovie />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;
