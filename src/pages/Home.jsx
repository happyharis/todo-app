import { useContext } from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";

export default function Home() {
  const todos = useContext(TodoContext).todos;
  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} />
      </Row>
    </Container>
  );
}

function CardGroup({ todos }) {
  // todos = [{
  // id: 123456,
  // title: 'Get dev job',
  // description: '1. Listen to Haris not-boring lecture',
  // completed: false
  // }]
  return todos.map((todo) => {
    // todo = {
    // id: 123456,
    // title: 'Get dev job',
    // description: '1. Listen to Haris not-boring lecture',
    // completed: false
    // }
    const completed = todo.completed;
    // const completed = false;
    const bg = completed ? "success" : "danger";
    // const bg = false ? "success" : "danger";
    // const bg = "danger";

    return (
      <Col md={4} key={todo.id}>
        {/* <Col md={4} key={123456}> */}
        <Card className="my-3">
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            {/* <Card.Title>{'Get dev job'}</Card.Title> */}
            <Card.Text>{todo.description}</Card.Text>
            {/* <Card.Text>{'1. Listen to Haris not-boring lecture'}</Card.Text> */}
            <Badge bg={bg}>{!completed && "Not"} Completed</Badge>
            {/* <Badge bg={bg}>{!false && "Not"} Completed</Badge> */}
            {/* <Badge bg={bg}>{true && "Not"} Completed</Badge> */}
            {/* <Badge bg={bg}>Not Completed</Badge> */}
          </Card.Body>
        </Card>
      </Col>
    );
  });
}
