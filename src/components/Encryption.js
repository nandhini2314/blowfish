import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import './Encryption.css';
import axios from 'axios';


function Encryption() {
  const [plainText, setPlainText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://blowfish-z13b.onrender.com/encrypt', {
        plainText: plainText,
        key: encryptionKey,
      });

      setEncryptedText(response.data['Encrypted Text']);

    } catch (error) {
      console.error('Error during POST request:', error);
    }
  };

  const handleEncryptionKeyChange = (event) => {
    setEncryptionKey(event.target.value);
  };
  
  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value);
  };

  return (
    <div id="encryption" className="encryption-container">
      <div className="App">
        <header className="App-header">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="plain">
              <Form.Label style={{ fontWeight: 'bold', fontSize: '40px' }}>Enter Plain Text </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your plain text here"
                value={plainText}
                onChange={handlePlainTextChange}
                style={{ borderColor: 'blue', backgroundColor: 'lightblue', height: '80px', width: '500px' }}
              />
            </Form.Group>
  
            <Form.Group controlId="key">
              <Form.Label style={{ fontWeight: 'bold', fontSize: '40px' }}>Enter Encryption Key </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your encryption key here"
                value={encryptionKey}
                onChange={handleEncryptionKeyChange}
                style={{ borderColor: 'blue', backgroundColor: 'lightblue', height: '80px', width: '500px' }}
              />
            </Form.Group>
            <Button type="submit" className="blue-button" style={{ marginTop: '15px' }}>
  Submit
</Button>
            <Form.Group controlId="answer">
              <Form.Label style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '40px' }}>Encrypted Text </Form.Label>
              <Form.Control
                type="text"
                placeholder="Encrypted text"
                value={encryptedText}
                style={{ backgroundColor: 'lightblue', borderColor: 'blue', height: '80px', width: '500px' }}
                readOnly
              />
            </Form.Group>
          </Form>
        </header>
      </div>
    </div>
  );
  
}

export default Encryption;
