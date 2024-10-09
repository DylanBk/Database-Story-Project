const express = require('express');
const router = express.Router();

router.post('/signup', (res, req) => {
    return json({ message: "Sign Up" })
});

router.post('/login', (res, req) => {
    return json({ message: "Login" })
})

module.exports = router