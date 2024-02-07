import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Decryption.css';

function Decryption() {
  const [encryptedText, setEncryptedText] = useState('');
  const [plainText, setPlainText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform Decryption here
    // const decrypted = blowfishDecrypt(encryptedText);
    // setPlainText(decrypted);
  };

  const handleEncryptedTextChange = (event) => {
    setEncryptedText(event.target.value);
  };

  return (
    <div id="decryption" className="decryption-container" style={{ padding:'65px', fontFamily:'Times New Roman,Serif fonts'}}>
      <div className="App">
        <header className="App-header">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="encryptedText">
              <Form.Label style={{ fontWeight:'bold',fontSize:'40px'}}>Enter Encrypted Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your encrypted text here"
                value={encryptedText}
                onChange={handleEncryptedTextChange}
                style={{borderColor:'blue', backgroundColor:'lightblue' , height:'80px' , width:'500px'}}
              />
            </Form.Group>
            <Button type="submit" className="pink-button" style={{marginTop:'15px',}}>Submit</Button>
            <Form.Group controlId="plainText">
              <Form.Label style={{fontWeight: 'bold', marginTop: '10px',fontSize:'40px'}}>Plain Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Plain text"
                value={plainText}
                style={{ backgroundColor: 'lightblue', borderColor: 'blue' ,height:'80px' , width:'500px'}}
                readOnly // Only set readOnly for the plain text field
              />
            </Form.Group>
          </Form>
        </header>
      </div>
    </div>
  );
}

export default Decryption;

