import { Card } from 'react-bootstrap';

function About() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: 'black' }}>
            <header className="home-header">
            </header>
            <Card className="mb-3" style={{ backgroundColor: "black", color: "rgb(83, 170, 213)", width: '110rem', height:'50rem', alignContent: 'center', fontWeight: 'bold' }}>
                <Card.Body style={{ fontFamily: 'Georgia, Serif Fonts', textAlign: 'center' }}>
                    <Card.Title style={{ fontSize: '50px',padding:'100px' }}>
                        About the Algorithm Used
                    </Card.Title>
                    <Card.Text style={{ fontSize: '30px', width: '60%', margin: '0 auto'}}>
                        Blowfish is an encryption technique designed by Bruce Schneier in 1993 as an alternative to DES Encryption Technique. It is significantly faster than DES and provides a good encryption rate with no effective cryptanalysis technique found to date. It is one of the first, secure block ciphers not subject to any patents and hence freely available for anyone to use. It is symmetric block cipher algorithm. We have implemented this algorithm in Python along with Flask for backend and React.js for Frontend.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default About;
