class ValidationError extends Error {}
class NotFoundError extends Error {}

function handleError (err, req, res) {
    if (err instanceof NotFoundError) {
        res
            .status(404)
            .render('error', {
                message: 'Nie możemy znaleźć elementu o podanym ID'
        });
        return;
    }

    console.error(err);
    res.status(err instanceof ValidationError? 400 : 500);

    res.render('error', {
        message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie później',
    });
}

module.exports = {
    handleError,
    ValidationError,
    NotFoundError
};