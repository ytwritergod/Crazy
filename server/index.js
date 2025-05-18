const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const downloadRoutes = require('./routes/download');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet());
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per IP
  })
);

// Routes
app.use('/api', downloadRoutes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
