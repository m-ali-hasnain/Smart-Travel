import { Ticket } from "../models/ticket.js";

export const getTickets = async () => {
  const response = await Ticket.find({});
  if (!response) throw new Error("Tickets could not be found");
  return response;
};

export const getTicketById = async (tid) => {
  if (!tid) throw new Error("Ticket Id empty:", tid);
  const response = await Ticket.findById({ _id: tid });
  if (!response) throw new Error("Ticket could not be found: ", tid);
  return response;
};

export const createTicket = async (ticketDetails) => {
  if (!ticketDetails) throw new Error(`Ticket Details empty: ${ticketDetails}`);
  const response = await Ticket.create(ticketDetails);
  if (!response)
    throw new Error("Ticket could not be created: ", ticketDetails);
  return response;
};

export const updateTicketById = async (ticketDetails, tid) => {
  if (!tid || !ticketDetails)
    throw new Error(
      `Ticket Id empty: ${tid} or Ticket Details empty: ${ticketDetails}`,
    );
  const response = await Ticket.findOneAndUpdate({ _id: tid }, ticketDetails, {
    upsert: true,
    returnOriginal: false,
  });
  if (!response)
    throw new Error("Ticket could not be updated: ", ticketDetails);
  return response;
};

export const deleteTicketById = async (tid) => {
  if (!tid) throw new Error("Ticket Id empty:", tid);
  const response = await Ticket.findByIdAndDelete({ _id: tid });
  if (!response) throw new Error("Ticket could not be deleted: ", tid);
  return response;
};
