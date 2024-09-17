const express = require('express');
const router = express.Router();
const { createTicket, getTickets, updateTicket, deleteTicket } = require('../controllers/ticketControllers.js');

router.post('/create', createTicket);
router.get('/tickets', getTickets);
router.put('/update/:id', updateTicket);
router.delete('/delete/:id', deleteTicket);

module.exports = router;