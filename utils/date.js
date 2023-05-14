function toYYYYMMDD(date) {
  return date.toISOString().slice(0, 10);
}

function fromYYYYMMDD(date) {
  return new Date(date);
}

module.exports = {
  toYYYYMMDD: toYYYYMMDD,
  fromYYYYMMDD: fromYYYYMMDD
};