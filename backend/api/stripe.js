const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = function(app) {
  app.post('/payment', async (req, res) => {
    const { amount, id } = req.body;

    try {
      const payment = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'CAD',
        description: 'Example payment',
        payment_method: id,
        confirm: true,
      });
      console.log('Payment successful:', payment);
      res.send('Payment successful');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error processing payment');
    }
  });
};