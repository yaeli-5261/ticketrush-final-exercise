const TICKET_PRICE = 350;
const SERVICE_FEE = 12;
const MAX_TICKETS = 8;
const MEMBER_DISCOUNT = 0.20;
const STUDENT_DISCOUNT = 0.15;

function maxTickets(isMember = false) {
  return isMember ? 6 : MAX_TICKETS;
}

function calcTotal(qty, isMember = false, isStudent = false) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }

  const discount = isMember ? MEMBER_DISCOUNT : isStudent ? STUDENT_DISCOUNT : 0;
  return qty * (TICKET_PRICE * (1 - discount) + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE,
    SERVICE_FEE,
    MAX_TICKETS,
    MEMBER_DISCOUNT,
    STUDENT_DISCOUNT,
    maxTickets,
    calcTotal
  };
}