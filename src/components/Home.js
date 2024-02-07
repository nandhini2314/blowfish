import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css'

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <Card style={{fontFamily:'Times New Roman,Serif Fonts ',backgroundColor:'black' ,padding:'20px',width: '110rem',height:'50rem', alignContent:'center'}}>
      <Card.Body>
        
        <Card.Title style={{fontFamily:'Times New Roman,Serif Fonts ',fontSize:'50px',color: 'white',fontWeight:'bold' }}>Information Security IA-2</Card.Title>
        <Card.Text style={{fontSize:'30px',color:'white'}} >
          We have implemented the Blowfish algorithm to encrypt plaintext and decrypt encrypted texts.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{ backgroundColor: 'rgb(141, 11, 234)', color: 'white' ,fontSize:'35px'}}>Batch - A3</ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: 'lightblue', color: 'black',fontSize:'35px',fontWeight:'bold' }}>Tejas Pundlik - 16010121152</ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: 'lightblue', color: 'black',fontSize:'35px',fontWeight:'bold' }}>Priyansh Rajusth - 16010121156</ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: 'lightblue', color: 'black',fontSize:'35px',fontWeight:'bold' }}>Nandhini Ramesh - 16010121157</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" style={{ color: 'red',fontSize:'35px' }}> Github Link</Card.Link>
       
      </Card.Body>
    </Card>
    </div>
  );
}

export default Home;