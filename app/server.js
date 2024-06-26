/* eslint-disable no-console */
import Express from 'express';
import morgan from 'morgan';
import sendEmail from './sendEmail.js';
import formatEmailText from './formatEmailText.js';

export default () => {
  const app = new Express();

  app.use(Express.json());
  app.use(morgan('short'));

  app.post('/api/applications', async (req, res) => {
    const formData = req.body;
    console.log({ formData });

    try {
      const mailText = formatEmailText(formData);
      const info = await sendEmail(mailText);
      console.log({ info });
      res.status(200).end();
    } catch (error) {
      console.error({ error });
      res.status(500).end();
    }
  });

  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error(err.stack);
    res.status(500).end();
  });

  return app;
};
