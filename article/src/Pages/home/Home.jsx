import "./Home.css";
import MyNavbar from "../../Components/navbar/MyNavbar";
import ArticleItem from "../../Components/articleItem/ArticleItem";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

    let [articleData , setArticleData] = useState([]);
 
    useEffect(()=>{
        axios.get('http://localhost:3000/articels/')
        .then(response => {
          setArticleData(response.data)
          // console.log(response.data);
        });
        
    } , [])


  return (
    <>
      <MyNavbar />
      <Container>
        <h1 style={{ marginTop: "15px" }}>مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-3 py-3">
            {
              articleData.map((articels)=>(
              
                    <Col key={articels.id}>
                    <ArticleItem  {...articels}/>
                    </Col>
                ))
            }
        </Row>
      </Container>
    </>
  );
}

export default Home;
