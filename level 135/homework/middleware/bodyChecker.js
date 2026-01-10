const bodyChecker = (req, res, next) => {
    const body = req.body;

    if (req.method === "POST") {
        if (!body.brand || !body.model || !body.price || !body.quantity) {
            return res.status(400).json({ message: "Brand, model, price and quantity are required!" });
        }

        next();
    } else {
        if (!body.brand && !body.model && !body.price && !body.quantity) {
            return res.status(400).json({ message: "Brand, model, price or quantity are required!" });
        }

        next();
    }
}

module.exports = bodyChecker;