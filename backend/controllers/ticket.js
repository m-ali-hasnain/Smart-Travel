import * as ticketService from "../services/ticket.js";
import { handleError } from "../middleware/error.js";
import { handleResponse } from "../middleware/response.js";

export const getTickets = async (req, res, next) => {
  try {
    const data = await ticketService.getTickets();
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const createTicket = async (req, res, next) => {
  try {
    const data = await ticketService.createTicket(req.body);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const updateTicketById = async (req, res, next) => {
  try {
    const data = await ticketService.updateTicketById(
      req.body,
      req.params.ticketId,
    );
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const getTicketById = async (req, res, next) => {
  try {
    const data = await ticketService.getTicketById(req.params.ticketId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};

export const deleteTicketById = async (req, res, next) => {
  try {
    const data = await ticketService.deleteTicketById(req.params.ticketId);
    handleResponse(res, 200, data);
  } catch (error) {
    handleError(error, res, next);
  }
};
