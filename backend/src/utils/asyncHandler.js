/**
 * Wraps an async Express route handler so that any thrown error
 * is automatically passed to next() instead of crashing the server.
 *
 * Usage:
 *   router.get("/route", asyncHandler(async (req, res) => { ... }))
 *
 * NOTE: Currently not used by this project's controllers (they use
 * try/catch directly), but available for future refactoring.
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
