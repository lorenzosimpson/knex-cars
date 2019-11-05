const validateVehicle = (req, res, next) => {
    if (!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage) {
        res.status(400).json({ error: 'Please include vin, make, model and mileage'})
    } else if (!(typeof req.body.mileage === 'number')) {
        res.status(400).json({ error: 'Mileage must be a number'})
    }
    else {
        next();
    }
}

module.exports = validateVehicle;