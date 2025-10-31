  module.exports = (err, req, res, next) => {
    console.error(err);
    if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ error: messages.join(', ') });
    }
    
    
    // CastError (invalid ObjectId)
    if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID' });
    }
    
    
    // fallback
    res.status(500).json({ error: err.message || 'Server error' });
    };