import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
/* This render method checks to see if comments are there. If so, use the array method map 
  on the comments array.  Inside the callback function return comment in 2 lines*/

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4> Comments </h4>
        {comments.map(comment => {
          return (
            <div key={comment.id}>
              <p>
                {comment.text}
                <br />
                --{comment.author},{' '}
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit'
                }).format(new Date(Date.parse(comment.date)))}{' '}
              </p>{' '}
            </div>
          );
        })}
      </div>
    );
  }
  return <div />;
}

/* Inside the render method check to see if the name "campsite" (passed via props) is there = truthy
  If so, call the renderCampsite method (remember to use this) and pass the campsite to it.
  Lastly, add the renderComments method and pass the object's comments array*/
function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }

  return <div />;
}

export default CampsiteInfo;
