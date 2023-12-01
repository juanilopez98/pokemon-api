const middlewaretiempo = (req, res, next) => {
  const now = new Date();
  console.log('Solicitud recibida en:', now);
  next();
};

module.exports = middlewaretiempo;