import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PaymentScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [errors, setErrors] = useState({});
  const [paymentStatus, setPaymentStatus] = useState(null); // null for initial state, 'success' for success

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    let errors = {};
    if (!cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
    }
    if (!expiry.trim()) {
      errors.expiry = 'Expiry date is required';
    }
    if (!cvv.trim()) {
      errors.cvv = 'CVV is required';
    }
    if (!cardHolder.trim()) {
      errors.cardHolder = 'Cardholder name is required';
    }

    // Display errors if any
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return; // Exit function early if there are errors
    }

    // Simulate payment processing delay
    setTimeout(() => {
      // Simulate successful payment
      setPaymentStatus('success');
      // Reset form fields and errors
      setCardNumber('');
      setExpiry('');
      setCvv('');
      setCardHolder('');
      setErrors({});
    }, 2000); // 2000 milliseconds (2 seconds) delay
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Cosma Paymentportal</h3>
            </div>
            <div className="card-body">
              {paymentStatus === 'success' ? (
                <div className="alert alert-success" role="alert">
                  Payment successful!
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      className={`form-control ${errors.cardNumber && 'is-invalid'}`}
                      id="cardNumber"
                      placeholder="Enter card number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                    {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="expiry">Expiry Date</label>
                        <input
                          type="text"
                          className={`form-control ${errors.expiry && 'is-invalid'}`}
                          id="expiry"
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                        />
                        {errors.expiry && <div className="invalid-feedback">{errors.expiry}</div>}
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          className={`form-control ${errors.cvv && 'is-invalid'}`}
                          id="cvv"
                          placeholder="CVV"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                        {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardHolder">Cardholder Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.cardHolder && 'is-invalid'}`}
                      id="cardHolder"
                      placeholder="Cardholder name"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                    />
                    {errors.cardHolder && <div className="invalid-feedback">{errors.cardHolder}</div>}
                  </div>
                  <div className="form-group mt-4 text-center">
                    <button type="submit" className="btn btn-primary btn-lg text-dark">Pay Now</button>
                  </div>
                </form>
              )}

             
            </div>  
          </div>
        </div>
      </div>
    <Link to='/home'><button className='btn btn-primary btn-lg text-white' >Go To Home</button></Link>  
    </div>
  );
}
