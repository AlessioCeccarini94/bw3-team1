const Footer = () => {

    return(
        <footer className="bg-light pt-5 pb-3 border-top">
    <div className="container" style={{maxWidth: "1200px"}}>
        <div className="row">
            
            <div className="col-md-6">
                <div className="row">
                    
                    <div className="col-4 col-md-3 mb-4">
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Informazioni</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Informativa sulla community professionale</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Privacy e condizioni</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Sales Solutions</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Centro sicurezza</a></li>
                        </ul>
                    </div>

                    <div className="col-4 col-md-3 mb-4">
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Accessibilità</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Carriera</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Opzioni per gli annunci pubblicitari</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Mobile</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-4 col-md-3 mb-4">
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Talent Solutions</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Soluzioni di marketing</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Pubblicità</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none small">Piccole imprese</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6">
                <div className="row">

                    <div className="col-sm-6 mb-4">
                        
                        <div className="d-flex align-items-start mb-4">
                            <i className="bi bi-question-circle-fill text-muted me-2" style={{fontSize: "1.25 rem"}}></i>
                            <div>
                                <p className="mb-0 fw-bold">Domande?</p>
                                <p className="small text-muted">Visita il nostro Centro assistenza.</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start mb-4">
                            <i className="bi bi-gear-fill text-muted me-2" style={{fontSize: "1.25 rem"}}></i>
                            <div>
                                <p className="mb-0 fw-bold">Gestisci il tuo account e la tua privacy</p>
                                <p className="small text-muted">Vai alle impostazioni</p>
                            </div>
                        </div>
                        
                        <div className="d-flex align-items-start">
                            <i className="bi bi-shield-fill-check text-muted me-2" style={{fontSize: "1.25 rem"}}></i>
                            <div>
                                <p className="mb-0 fw-bold">Trasparenza sui contenuti consigliati</p>
                                <p className="small text-muted">Scopri di più sui contenuti consigliati.</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-sm-6 mb-4">
                        <label className="form-label fw-bold small">Seleziona lingua</label>
                        <select className="form-select" id="select-lingua">
                            <option defaultValue={"Italiano"}>Italiano (Italiano)</option>
                            <option>English (English)</option>
                            <option>Español (Español)</option>
                        </select>
                    </div>

                </div>
            </div>
            
        </div>
        
        <div className="row mt-3">
            <div className="col">
                <p className="text-muted small">LinkedIn Corporation © 2025</p>
            </div>
        </div>
        
    </div>
     </footer>
    )
    
}

export default Footer