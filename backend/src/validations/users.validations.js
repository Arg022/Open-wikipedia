import validate from "validate.js";
import prisma from "../../db/prisma.js";

validate.validators.userExists = function (value, options, key, attributes) {
    return new Promise(async (res, rej) => {
        const user = await prisma.user.findFirst({
            where: {
                email: value,
                id: {
                    not: options?.id,
                },
            },
        });
        if (user) {
            res("l'utente esiste già nel sistema");
        } else {
            res();
        }
    });
};

export function createUserValidation(req, res, next) {
    validate
        .async(req.body, {
            email: {
                email: true,
                userExists: {
                    id: +req.params.id,
                },
            },
            password: {
                presence: { allowEmpty: false },
            },
            valPassword: {
                equality: "password",
            },
        })
        .then(
            () => {
                // on sucess
                next();
            },
            (errors) => {
                // on error
                res.status(403);
                res.json({ isError: true, error: errors });
            }
        );
}
