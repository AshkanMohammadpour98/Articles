import axios from "axios";
import MyNavbar from "../../Components/navbar/MyNavbar";
import "./ArticleAdd.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Swal from 'sweetalert2'

function ArticleAdd() {
  let [formData, setFormData] = useState({});

  const resetform = () => {
    setFormData({
      title: "",
      desk: "",
      wraitter: "",
      category: "",
      readingtime: "",
      imge: "",
      readingTime: 0
    });
  };
  const chingeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addHandler = () => {
    axios.post("http://localhost:3000/articels/", formData)
    .then( response => {
    
      if(response.status === 200){
        Swal.fire({
          // icon: 'tue',
          text: 'مقاله ساخته شد',
          timer: 1500,
          timerProgressBar: true,
          icon : 'success',
          showConfirmButton : false

        })
      }
    })
    .catch(error =>{
      Swal.fire({
        // icon: 'tue',
        text: 'مقاله ساخته نشد',
        timer: 1500,
        timerProgressBar: true,
        icon : 'error'
      })
    })
    resetform();
  };

  return (
    <>
      <MyNavbar />
      <div className="container-form">
        <h1>ساخت مقاله</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              onChange={chingeInput}
              name="title"
              value={formData.title}
              type="text"
              placeholder="نام مقاله خود را ورد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              onChange={chingeInput}
              name="desk"
              value={formData.desk}
              type="text"
              placeholder="یه توضیح کوتاه برای مقاله"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              onChange={chingeInput}
              name="wraitter"
              value={formData.wraitter}
              type="text"
              placeholder="نام نویسنده ی مقاله"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              onChange={chingeInput}
              name="category"
              value={formData.category}
              type="text"
              placeholder="موضوع (دسته بندی مقاله)"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              onChange={chingeInput}
              name="imge"
              value={formData.imge}
              type="text"
              placeholder="آدرس عکس مقاله"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>مدت زمان مقاله</Form.Label>
            <Form.Control
              onChange={chingeInput}
              name="readingTime"
              value={formData.readingTime}
              type="number"
              placeholder="مدت زمان خواندن این مقاله"
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={addHandler}>
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}
export default ArticleAdd;
