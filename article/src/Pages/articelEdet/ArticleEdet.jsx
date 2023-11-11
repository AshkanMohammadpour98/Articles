import { useEffect, useState } from "react";
import "./ArticleEdet.css";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import MyNavbar from "../../Components/navbar/MyNavbar";
import { Container , Button } from "react-bootstrap";

import Swal from "sweetalert2";
import axios from "axios";

function ArticleEdet() {

  const articleId = useParams().articleId;

  let [formData, setFormData] = useState("");

  useEffect(()=>{
    axios.get(`http://localhost:3000/articels/${articleId}`).then((response) => {
      setFormData(response.data[0])
    });
  },[])
  
  const editArticleHandler = ()=>{
    
        axios.put(`http://localhost:3000/articels/${articleId}` , formData)
    Swal.fire({
  
      icon: 'success',
      title: 'مقاله باموفقیت تغبر کرد',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(formData);


  }
  const formHandler = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    
  }


  return (
    <>
      <MyNavbar />
      <Container>
        <h4>ویرایش مقاله</h4>

        <Form style={{ maxWidth: "700px", margin: "auto" }}>
          <Form.Group className="mb-3" >
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control type="text" name="title" value={`${formData.title}`} onChange={formHandler} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control type="text" name="desk" value={`${formData.desk}`} onChange={formHandler}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label name="wraitter">نویسنده مقاله</Form.Label>
            <Form.Control type="text" name="wraitter" value={`${formData.wraitter}`} onChange={formHandler}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control type="text" name="category" value={`${formData.category}`} onChange={formHandler}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control type="text" name="imge" value={`${formData.imge}`} onChange={formHandler}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>مدت زمان خواندن مقاله</Form.Label>
            <Form.Control type="number" name="readingtime" value={`${formData.readingtime}`} onChange={formHandler}/>
          </Form.Group>

          <Button variant="primary" type="button" onClick={editArticleHandler} >
            ویرایش
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default ArticleEdet;
