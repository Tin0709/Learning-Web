const express = require("express");
const router = express.Router();
const Poll = require("../models/Poll");

// Create a poll
router.post("/", async (req, res) => {
  const { question, options, expiresAt } = req.body;

  if (!question || !options || options.length < 2) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const formattedOptions = options.map((opt) => ({ text: opt }));

  try {
    const newPoll = new Poll({
      question,
      options: formattedOptions,
      expiresAt,
    });
    await newPoll.save();
    res.status(201).json(newPoll);
  } catch (err) {
    res.status(500).json({ message: "Error creating poll" });
  }
});

// Get all polls
router.get("/", async (req, res) => {
  const polls = await Poll.find().sort({ createdAt: -1 });
  res.json(polls);
});

// Get single poll
router.get("/:id", async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ message: "Poll not found" });
    res.json(poll);
  } catch (err) {
    res.status(500).json({ message: "Error fetching poll" });
  }
});

// Vote on a poll
router.post("/:id/vote", async (req, res) => {
  const { optionIndex } = req.body;
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ message: "Poll not found" });

    if (poll.options[optionIndex]) {
      poll.options[optionIndex].votes += 1;
      await poll.save();
      res.json(poll);
    } else {
      res.status(400).json({ message: "Invalid option index" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error voting" });
  }
});

module.exports = router;
