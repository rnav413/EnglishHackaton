import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <header className="my-5 text-center">
            <h1 className="display-4">Linguistic Assessment Platform</h1>
            <p className="lead">Regístrate para comenzar:</p>
          </header>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Nombre Completo</label>
              <input type="text" className="form-control" id="fullName" />
            </div>
            <div className="mb-3">
              <label htmlFor="documentType" className="form-label">Tipo de documento de identidad</label>
              <select className="form-select" id="documentType">
                <option value="" disabled selected hidden>Seleccione</option>
                <option value="CC">CC</option>
                <option value="TI">TI</option>
                <option value="CE">CE</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="document" className="form-label">Documento de identidad</label>
              <input type="document" className="form-control" id="document" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Celular</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;