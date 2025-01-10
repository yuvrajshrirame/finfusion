const { fetchExpenses, addExpenses, deleteExpenses } = require("../Controllers/ExpenseController");

const router = require("express").Router();

// Fetch all the expenses of user based on user_id
router.get("/", fetchExpenses);

// Add expenses
router.post("/", addExpenses);

// Delete expenses
router.delete("/:expenseId", deleteExpenses);

module.exports = router;