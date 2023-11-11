import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import ArticlePage from "./Pages/articlePage/ArticlePage";
import ArticleAdd from "./Pages/articleAdd/ArticleAdd";
import ArticleEdet from "./Pages/articelEdet/ArticleEdet";
import { Container } from "react-bootstrap";
// import Articles from "./Pages/articels/Articles";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-article" element={<ArticleAdd />} />
          <Route path="/articlePage/:articleId" element={<ArticlePage />} />
          <Route path="/edet-article/:articleId" element={<ArticleEdet />} />
          {/* <Route path="/articles" element={<Articles />}/> */}
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
