import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import "../styles/writingAdmin.css";

const WritingAdmin = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, { 
      id: Date.now(), 
      theme: '', 
      times: '', 
      duration: '', 
      question: '', 
      responseTime: '', 
      grammaticalTime: '', 
      questionType: '', 
      isInvalid: { 
        theme: false, 
        times: false, 
        duration: false, 
        responseTime: false, 
        grammaticalTime: false, 
        questionType: false 
      } 
    }]);
  };

  const updateQuestion = (id, field, value) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, [field]: value } : q));
  };

  const removeQuestion = id => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const validateFields = (question) => {
    const newInvalid = {
      theme: question.theme === '',
      times: question.times === '',
      duration: question.duration === '',
      responseTime: question.responseTime === '',
      grammaticalTime: question.grammaticalTime === '',
      questionType: question.questionType === ''
    };
    updateQuestion(question.id, 'isInvalid', newInvalid);
    return !Object.values(newInvalid).some(value => value === true);
  };

  const generateQuestion = id => {
    const question = questions.find(q => q.id === id);
    if (validateFields(question)) {
      updateQuestion(id, 'question', 'Pregunta generada automáticamente');
    }
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
                  <Form.Label>Temática:</Form.Label>
                  <Form.Control
                    type="text"
                    value={q.theme}
                    onChange={e => updateQuestion(q.id, 'theme', e.target.value)}
                    isInvalid={q.isInvalid.theme}
                  />
                  <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId={`times-${q.id}`}>
                  <Form.Label>Tiempos:</Form.Label>
                  <Form.Control
                    type="text"
                    value={q.times}
                    onChange={e => updateQuestion(q.id, 'times', e.target.value)}
                    isInvalid={q.isInvalid.times}
                  />
                  <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId={`duration-${q.id}`} className="mb-3">
                  <Form.Label>Duración:</Form.Label>
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
                
                <Form.Group controlId={`responseTime-${q.id}`} className="mb-3">
                  <Form.Label>Tiempo de Respuesta Estimado:</Form.Label>
                  <Form.Control
                    as="select"
                    value={q.responseTime}
                    onChange={e => updateQuestion(q.id, 'responseTime', e.target.value)}
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
                    <option value="historias sobre actividades pasadas">Contar historia del pasado</option>
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
