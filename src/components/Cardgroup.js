import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../components/Navbar.css'

function GroupExample() {
  return (
    <CardGroup>
      <Card >
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card tittle1</Card.Title>
          <Card.Text>
            fnewnfweonlfwemlkmfw mkregmelkr
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">TODAYS DEALS</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">TODAYS DEALS</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title3</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">TODAYS DEALS</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;