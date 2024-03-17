const handleAsyncRequest = (asyncFn) => {
  return (req, res, next) => {
    asyncFn(req, res, next).catch((err) => next(err));
  };
};

module.exports = handleAsyncRequest;
