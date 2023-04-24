import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl }) => {  //3 values it will receive title,description and image url
  return (
    <Col size={12} sm={6} md={4}>      
      <div className="proj-imgbx">
        <img src={imgUrl} />

      {/* text appear on hover */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
