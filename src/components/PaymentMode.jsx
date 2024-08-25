import React from 'react';

const PaymentMode = () => {
  return (
    <section id='payment' className="bg-white p-4 rounded-lg shadow-md mx-4 md:mx-8 lg:mx-16">
      <h2 className="text-lg font-bold mb-4">Payment Mode</h2>
      <ul className="list-none">
        <li>
          <input type="checkbox" className="mr-2" />
          <label>Deposit to Account</label>
        </li>
        <li>
          <input type="checkbox" className="mr-2" />
          <label>Net Banking</label>
        </li>
        <li>
          <input type="checkbox" className="mr-2" />
          <label>Credit Card/Debit Card</label>
        </li>
        <li>
          <input type="checkbox" className="mr-2" />
          <label>UPI</label>
        </li>
        <li>
          <input type="checkbox" className="mr-2" />
          <label>Wallets (PayTM/PhonePe/Amazon. etc.)</label>
        </li>
      </ul>
    </section>
  );
};

export default PaymentMode;