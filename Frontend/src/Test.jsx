import React from "react";
import { Card, Carousel } from "react-bootstrap";

const Test = () => {
   return (
      <Carousel>
         <Carousel.Item>
            <Card>
               <Card.Img variant="top" src="https://via.placeholder.com/150" />
               <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>This is card 1 content.</Card.Text>
               </Card.Body>
            </Card>
            <Card>
               <Card.Img variant="top" src="https://via.placeholder.com/150" />
               <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>This is card 2 content.</Card.Text>
               </Card.Body>
            </Card>
            <Card>
               <Card.Img variant="top" src="https://via.placeholder.com/150" />
               <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>This is card 3 content.</Card.Text>
               </Card.Body>
            </Card>
            <Card>
               <Card.Img variant="top" src="https://via.placeholder.com/150" />
               <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>This is card 4 content.</Card.Text>
               </Card.Body>
            </Card>
         </Carousel.Item>
      </Carousel>
   );
};

export default Test;
