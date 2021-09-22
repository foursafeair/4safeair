const express = require("express");
const router = express.Router();

const { requireSigning, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { generateToken, processPayment } = require("../controllers/braintree");

router.get(
  "/braintree/getToken/:userId",
  requireSigning,
  isAuth,
  generateToken
);
router.post(
  "/braintree/payment/:userId",
  requireSigning,
  isAuth,
  processPayment
);

router.param("userId", userById);

module.exports = router;
