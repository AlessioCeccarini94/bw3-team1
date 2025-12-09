import { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';
import { BsFillDiamondFill } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZWRkZmQzMjJmNTAwMTUxMDc2YmYiLCJpYXQiOjE3NjUyNzMwNTUsImV4cCI6MTc2NjQ4MjY1NX0.3pdvM420w6CNDEHCQg05Zw7AkXCGRfOQBvo7-4xJF3g';
const API_URL = 'https://striveschool-api.herokuapp.com/api/profile/me';

const Informazioni = function () {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = function () {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Errore nella chiamata API: ${response.status} ${response.statusText}`
          );
        }
      })
      .then((data) => {
        console.log('Dati del profilo ricevuti:', data);
        setProfileData(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Si è verificato un errore durante la fetch:', error);
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // Gestione stati di Caricamento e Errore
  if (isLoading) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" role="status" className="me-2" />
        <p>Caricamento dati...</p>
      </div>
    );
  }

  if (error || !profileData) {
    return (
      <div className="text-center p-5 text-danger">
        <p>{error || 'Dati profilo non disponibili.'}</p>
      </div>
    );
  }

  return (
    <>
      <Card className=" rounded p-3 mb-3 shadow">
        <Card.Body>
        <div className="d-flex justify-content-between">
          <h4>Informazioni</h4>
          <span>
            <BsFillPencilFill />
          </span>
        </div>
        <p>{profileData.bio}</p>
        <div className=" rounded p-3 shadow">
          <div className="d-flex justify-content-between align-items-center">
            <h6>
              <BsFillDiamondFill className="me-3" />
              Competenze principali
            </h6>
            <BsArrowRight />
          </div>
          <p>
            CSS <BsDot /> HTML <BsDot /> JS
          </p>
        </div>
         </Card.Body>
      </Card>
    </>
  );
};

export default Informazioni;
