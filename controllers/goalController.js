const asyncHandler = require("express-async-handler");
// des get goal
// route GET /api/goals
// access private
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Get goals" });
});
// des set goal
// route POST /api/goals
// access private
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		throw new Error("Please provide a text");
	}
	res.status(200).json({ message: `Set goal ` });
});
// des update goal
// route PUT /api/goals/:id
// access private
const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
});
// des get goal
// route DELETE /api/goals/:id
// access private
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Del goal ${req.params.id}` });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
