const express = require("express");
const {
  createDatabase,
  connectToDatabase,
  insertDataIntoDatabase,
} = require("./createDatabase");
const data = require("./data");

const app = express();
const port = process.env.PORT || 8080;

// Parse JSON bodies
app.use(express.json());

// Function to validate limit and offset
const validateInteger = (param, defaultValue) => {
  const parsed = parseInt(param, 10);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : defaultValue;
};

// Ensure DB exists, then handle routes
(async () => {
  try {
    // Step 1: Ensure the database exists
    await createDatabase();

    // Step 2: Get a pool connected to the correct database
    const pool = connectToDatabase();

    // Step 3: Insert data into the database
    await insertDataIntoDatabase(pool, data);

    // API route to get orders with pagination
    app.get("/api/orders", async (req, res, next) => {
      let conn;
      try {
        const limit = validateInteger(req.query.limit, 10);
        const offset = validateInteger(req.query.offset, 0);

        conn = await pool.getConnection();
        const query = "SELECT * FROM orders LIMIT ? OFFSET ?";
        const result = await conn.query(query, [limit, offset]);

        res.status(200).json(result);
      } catch (error) {
        next(error);
      } finally {
        if (conn) conn.release();
      }
    });

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error("Error:", err);
      res.status(err.status || 500).json({ message: err.message });
    });

    // Start the server only after DB is ensured
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (err) {
    console.error("Error during server startup:", err);
  }
})();
