const TICKET_PRICE = 350;
const SERVICE_FEE = 12;
const MAX_TICKETS = 8;

function maxTickets(isMember = false) {
  return isMember ? 4 : MAX_TICKETS;
}

function calcTotal(qty, isMember = false) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }

  const discountedTicketPrice = isMember ? TICKET_PRICE * 0.8 : TICKET_PRICE;
  return qty * (discountedTicketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, maxTickets, calcTotal };
}