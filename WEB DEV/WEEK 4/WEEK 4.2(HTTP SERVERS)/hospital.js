const express = require("express");

const server = express();

// 🔴 Body parser (POST / PUT ke liye mandatory)
server.use(express.json());

// In-memory database
let user = [
  {
    name: "Ashmit",
    kidney: [
      { healthy: false },
      { healthy: true }
    ]
  }
];

// =======================
// GET → Read kidney info
// =======================
server.get("/", function (req, res) {

  const kidneys = user[0].kidney;
  const totalKidneys = kidneys.length;

  const healthyCount = kidneys.filter(k => k.healthy === true).length;
  const unhealthyCount = totalKidneys - healthyCount;

  res.status(200).json({
    totalKidneys,
    healthyCount,
    unhealthyCount
  });
});

// =======================
// POST → Add new kidney
// =======================
server.post("/", function (req, res) {

  const isHealthy = req.body.healthy;

  // ❌ Validation
  if (typeof isHealthy !== "boolean") {
    return res.status(400).json({
      error: "healthy must be true or false"
    });
  }

  user[0].kidney.push({ healthy: isHealthy });

  res.status(201).json({
    message: "New kidney added",
    kidneys: user[0].kidney
  });
});

// =======================
// PUT → Make all kidneys healthy
// =======================
server.put("/", function (req, res) {

  const kidneys = user[0].kidney;

  if (kidneys.length === 0) {
    return res.status(404).json({
      error: "No kidneys found to update"
    });
  }

  let alreadyHealthy = true;

  for (let i = 0; i < kidneys.length; i++) {
    if (kidneys[i].healthy === false) {
      alreadyHealthy = false;
      break;
    }
  }

  // ❗ Edge case: all already healthy
  if (alreadyHealthy) {
    return res.status(409).json({
      message: "All kidneys are already healthy"
    });
  }

  // Update all to healthy
  for (let i = 0; i < kidneys.length; i++) {
    kidneys[i].healthy = true;
  }

  res.status(200).json({
    message: "All kidneys updated to healthy",
    kidneys
  });
});

// =======================
// DELETE → Remove unhealthy kidneys
// =======================
server.delete("/", function (req, res) {

  const kidneys = user[0].kidney;

  // ❗ Edge case: no kidneys at all
  if (kidneys.length === 0) {
    return res.status(404).json({
      error: "No kidneys to delete"
    });
  }

  const healthyKidneys = kidneys.filter(k => k.healthy === true);

  // ❗ Edge case: no unhealthy kidneys
  if (healthyKidneys.length === kidneys.length) {
    return res.status(409).json({
      message: "No unhealthy kidneys found to delete"
    });
  }

  user[0].kidney = healthyKidneys;

  res.status(200).json({
    message: "Unhealthy kidneys deleted",
    kidneys: user[0].kidney
  });
});

// =======================
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
