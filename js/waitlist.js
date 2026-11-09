function joinWaitlist(list, email) {
  const result = list.slice();
  const normalizedEmail = email.trim().toLowerCase();
  const atIndex = normalizedEmail.indexOf('@');

  if (atIndex === -1 || normalizedEmail.indexOf('.', atIndex) === -1) {
    return result;
  }

  const alreadyExists = result.some(
    existing => typeof existing === 'string' &&
      existing.trim().toLowerCase() === normalizedEmail
  );

  if (!alreadyExists) {
    result.push(normalizedEmail);
  }

  return result;
}

module.exports = { joinWaitlist };