import React, { useState } from 'react';
//import { Button, Form, Container, Row, Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../styles/writingAdmin.css";

const WritingAdmin = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { 
      id: Date.now(), 
      theme: '', 
      duration: '', 
      question: '', 
      responseTime: '', 
      grammaticalTime: '', 
      questionType: '', 
      isInvalid: { 
        theme: false, 
        duration: false, 
        responseTime: false, 
        grammaticalTime: false, 
        questionType: false 
      } 
    }]);
  };

  const updateQuestion = (id, field, value) => {
    setQuestions(questions.map(q => q.id === id ? { 
      ...q, 
      [field]: value,
      isInvalid: { 
        ...q.isInvalid, 
        [field]: field !== 'theme' && value === '' 
      } 
    } : q));
  };

  const updateInvalidFields = (id, newInvalid) => {
    setQuestions(questions.map(q => q.id === id ? { 
      ...q, 
      isInvalid: newInvalid 
    } : q));
  };

  const removeQuestion = id => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const validateFields = (question) => {
    const newInvalid = {
      duration: question.duration === '',
      responseTime: question.responseTime === '',
      grammaticalTime: question.grammaticalTime === '',
      questionType: question.questionType === ''
    };
    updateInvalidFields(question.id, newInvalid);
    return !Object.values(newInvalid).some(value => value === true);
  };


  const generateQuestion = async (id) => {
    const question = questions.find(q => q.id === id);
    if (validateFields(question)) {
      try {
        const prompt = `Generate 1 question to evaluate the use of ${question.grammaticalTime} tense with an expected response time of ${question.responseTime}, covering ${question.questionType} type.`;
        
        const response = await fetch(`http://127.0.0.1:5000/api/writing/generate-question`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: prompt })
        });

        const responseData = await response.json();
        updateQuestion(id, 'question', responseData.question || 'No response from server');
      } catch (error) {
        console.error('Error:', error);
        updateQuestion(id, 'question', 'Error occurred while fetching data from server');
      }
    }
  };

  const handleResponseTimeChange = (id, value) => {
    let duration = '';
    switch (value) {
      case '30 segundos':
        duration = '0.5';
        break;
      case '2-5 minutos':
        duration = '3.5';
        break;
      case '10-15 minutos':
        duration = '12.5';
        break;
      case '20-30 minutos':
        duration = '25';
        break;
      default:
        duration = '';
    }
    setQuestions(questions.map(q => q.id === id ? { 
      ...q, 
      responseTime: value, 
      duration: duration,
      isInvalid: { 
        ...q.isInvalid, 
        responseTime: value === '', 
        duration: duration === '' 
      } 
    } : q));
  };
  
  return (
    <Container className="d-flex flex-column justify-content-between vh-100">
      <header className="my-4 text-center">
        <h1 className="display-4">Linguistic Assessment Platform</h1>
        <p className="lead">Writing Test Design Tool</p>
      </header>
      <Row className="my-4">
        <Col>
          <Button onClick={addQuestion} variant="primary" className="w-100">+</Button>
        </Col>
      </Row>
      <div>
        {questions.map((q, index) => (
          <Row key={q.id} className="mb-4">
            <Col>
              <div className="border p-3">
                <h5>Pregunta {index + 1}</h5>
                <Form.Group controlId={`theme-${q.id}`}>
                  <Form.Label>Temática (Opcional):</Form.Label>
                  <Form.Control
                    type="text"
                    value={q.theme}
                    onChange={e => updateQuestion(q.id, 'theme', e.target.value)}
                    isInvalid={q.isInvalid.theme}
                  />
                </Form.Group>
                
                <Form.Group controlId={`responseTime-${q.id}`} className="mb-3">
                  <Form.Label>Tiempo de Respuesta Estimado:</Form.Label>
                  <Form.Control
                    as="select"
                    value={q.responseTime}
                    onChange={e => handleResponseTimeChange(q.id, e.target.value)}
                    isInvalid={q.isInvalid.responseTime}
                  >
                    <option value="">Seleccione...</option>
                    <option value="30 segundos">Corto (30 segundos)</option>
                    <option value="2-5 minutos">Medio (2-5 minutos)</option>
                    <option value="10-15 minutos">Largo (10-15 minutos)</option>
                    <option value="20-30 minutos">Muy Largo (20-30 minutos)</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId={`duration-${q.id}`} className="mb-3">
                  <Form.Label>Duración (minutos):</Form.Label>
                  <Form.Control
                    type="text"
                    value={q.duration}
                    onChange={e => updateQuestion(q.id, 'duration', e.target.value)}
                    isInvalid={q.isInvalid.duration}
                  />
                  <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId={`grammaticalTime-${q.id}`} className="mb-3">
                  <Form.Label>Tiempo Gramatical a Evaluar:</Form.Label>
                  <Form.Control
                    as="select"
                    value={q.grammaticalTime}
                    onChange={e => updateQuestion(q.id, 'grammaticalTime', e.target.value)}
                    isInvalid={q.isInvalid.grammaticalTime}
                  >
                    <option value="">Seleccione...</option>
                    <option value="presente">Presente</option>
                    <option value="pasado">Pasado</option>
                    <option value="futuro">Futuro</option>
                    <option value="cualquiera">Cualquiera</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
              
                  <Form.Group controlId={`questionType-${q.id}`} className="mb-3">
                  <Form.Label>Tipo de Pregunta:</Form.Label>
                  <Form.Control
                    as="select"
                    value={q.questionType}
                    onChange={e => updateQuestion(q.id, 'questionType', e.target.value)}
                    isInvalid={q.isInvalid.questionType}
                  >
                    <option value="">Seleccione...</option>
                    <option value="respuesta simple o completar oraciones">Simple/Completar oración</option>
                    <option value="argumentativa o de opinion">Argumentativa/Opinión</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="border p-2 mb-2">{q.question}</div>
                <div className="d-flex">
                  <Button
                    onClick={() => generateQuestion(q.id)}
                    variant="outline-danger"
                    className="me-2 w-50"
                  >
                    Generar
                  </Button>
                  <Button onClick={() => removeQuestion(q.id)} variant="dark" className="w-50">Eliminar</Button>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
      <Row className="mt-auto">
        <Col className="text-end">
          <Button variant="primary btn-lg" className="me-2">Terminar Sección</Button>
          <Button variant="dark btn-lg">Salir</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WritingAdmin;
