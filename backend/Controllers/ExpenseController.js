const UserModel = require("../Models/User");

const addExpenses = async (req, res) => {
  const body = req.body;
  const { _id } = req.user;
  try {
    const userData = await UserModel.findByIdAndUpdate(
      _id, // user id
      {
        $push: { expenses: body },
      },
      { new: true } // for returning the updated documents
    );
    return res.status(200).json({
      message: "Expense added successfully",
      success: true,
      data: userData?.expenses,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err,
      success: false,
    });
  }
};

const fetchExpenses = async (req, res) => {
  const body = req.body;
  const { _id } = req.user;
  try {
    const userData = await UserModel.findByIdAndUpdate(_id).select("expenses");
    return res.status(200).json({
      message: "Fetched Expenses successfully",
      success: true,
      data: userData?.expenses,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err,
      success: false,
    });
  }
};

const deleteExpenses = async (req, res) => {
  const { _id } = req.user;
  const { expenseId } = req.params;
  try {
    const userData = await UserModel.findByIdAndUpdate(
      _id, // user id
      {
        $pull: { expenses: { _id: expenseId } },
      },
      { new: true } // for returning the updated documents
    );
    return res.status(200).json({
      message: "Expense deleted successfully",
      success: true,
      data: userData?.expenses,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err,
      success: false,
    });
  }
};

module.exports = {
  addExpenses,
  fetchExpenses,
  deleteExpenses,
};
