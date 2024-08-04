const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Adjust the path as needed

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Register routes
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://shreyastambe:shreyastambe103@mernapp.i3htolw.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp', {
  useNewUrlParser: true, // Optional but harmless
  useUnifiedTopology: true // Optional but harmless
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 4000; // Make sure this port is available
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));