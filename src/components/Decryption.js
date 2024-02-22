import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Decryption.css';
import axios from 'axios';

function Decryption() {
  const [encryptedText, setEncryptedText] = useState('');
  const [plainText, setPlainText] = useState('');
  const [encryptionKey,setEncryptionKey] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log("NOGH");
    try {
      const response = await axios.post('https://blowfish-z13b.onrender.com/decrypt', {
        cipherText: encryptedText,
        key: encryptionKey,
      });

      setPlainText(response.data['Decrypted Text']);

    } catch (error) {
      console.error('Error during POST request:', error);
    }
  };

  const handleEncryptedTextChange = (event) => {
    setEncryptedText(event.target.value);
  };
  
  const handleEncryptionKeyChange = (event) => {
    setEncryptionKey(event.target.value);
  };

  return (
    <div id="decryption" className="decryption-container" style={{ padding:'65px', fontFamily:'Times New Roman,Serif fonts'}}>
      <div className="App">
        <header className="App-header">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="encryptedText">
              <Form.Label style={{ fontWeight:'bold',fontSize:'40px'}}>Enter Cipher Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your cipher text here"
                value={encryptedText}
                onChange={handleEncryptedTextChange}
                style={{borderColor:'blue', backgroundColor:'lightblue' , height:'80px' , width:'500px'}}
              />
            </Form.Group>
            <Form.Group controlId="key">
              <Form.Label style={{ fontWeight: 'bold', fontSize: '40px' }}>Enter Decryption Key </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your decryption key here"
                value={encryptionKey}
                onChange={handleEncryptionKeyChange}
                style={{ borderColor: 'blue', backgroundColor: 'lightblue', height: '80px', width: '500px' }}
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
                readOnly 
              />
            </Form.Group>
          </Form>
        </header>
      </div>
    </div>
  );
}

export default Decryption;

