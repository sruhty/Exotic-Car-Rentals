import React, { useState } from 'react';

const StripeForm=()=> {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === 'cardNumber') {
      setCardNumber(value);
    } else if (name === 'expiryDate') {
      setExpiryDate(value);
    } else if (name === 'cvv') {
      setCvv(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number:
        <input type="text" name="cardNumber" value={cardNumber} onChange={handleInputChange} />
      </label>
      <label>
        Expiry date:
        <input type="text" name="expiryDate" value={expiryDate} onChange={handleInputChange} />
      </label>
      <label>
        CVV:
        <input type="text" name="cvv" value={cvv} onChange={handleInputChange} />
      </label>
      <button type="submit">Pay</button>
    </form>
  );
}
export default StripeForm