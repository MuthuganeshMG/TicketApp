const TicketModel = require("../models/TicketModel");


exports.createTicket = async (req, res) => {
    try {
        const { title, description, status, priority, createdBy } = req.body;
        const newTicket = await TicketModel.create({ title, description, status, priority, createdBy });
        res.status(200).json(newTicket);
    } catch (error) {
        res.status(400).json('Booking Failed');
    }
};

exports.getTickets = async (req, res) => {
    try {
        const tickets = await TicketModel.find({});
        res.status(200).json(tickets);
    } catch (error) {
        res.status(400).json('Network problem');
    }
};

exports.updateTicket = async (req, res) => {
    try {
        const id = req.params.id;
        // const tickets=await TicketModel.findById(id);
        const updatedTicket = await TicketModel.findByIdAndUpdate(id,req.body ,{new:true});
        res.status(200).json(updatedTicket);
    } catch (error) {
        res.status(400).json('Failed to update your TICKET');
    }
};

exports.deleteTicket = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await TicketModel.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json({ message: 'Ticket deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete ticket' });
    }
};
