import "./ArticleItem.css";
import Card from 'react-bootstrap/Card';
import { BiTimeFive } from 'react-icons/bi';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from "react-router-dom";


function ArticleItem(props) {


  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.imge} />
        <Card.Body>
          <Card.Title className="py-2"> {props.desk} </Card.Title>
          <Card.Text>
           {props.title} 
          </Card.Text>
          <div className="read-more">
            <Link to={`/articlePage/${props.id}`}>
            <span>ادامه مقاله </span>
            <span><BsArrowLeftShort size={'25px'}/></span>
            </Link>
          </div>
        </Card.Body>
        <Card.Footer>
          <span className="read-time d-flex justify-content-between">
            <span>نویسنده :{props.wraitter}</span>
            <span><BiTimeFive/>{props.readingtime}دقیقه</span>
          </span>
        </Card.Footer>
      </Card>
    </>
  );
}
export default ArticleItem;
