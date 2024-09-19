const createPool = require("./connector");

// Function to create the database if it doesn't exist
const createDatabase = async () => {
  let conn;
  const pool = createPool(); // Create a pool without a specific DB
  try {
    conn = await pool.getConnection();
    // Create the database if it doesn't exist
    await conn.query("CREATE DATABASE IF NOT EXISTS zomato_orders");
    console.log("Database 'zomato_orders' ensured to exist");
  } catch (err) {
    console.error("Failed to create the database:", err);
  } finally {
    if (conn) conn.release(); // Release the connection
    if (pool) await pool.end(); // Close the pool
  }
};

// Function to connect to the specific database after creation
const connectToDatabase = () => {
  return createPool("zomato_orders"); // Create a pool connected to 'zomato_orders'
};

// Function to insert data into the database
const insertDataIntoDatabase = async (pool, data) => {
  let conn;
  try {
    conn = await pool.getConnection();

    // Create the orders table if it doesn't exist
    await conn.query(`
      CREATE TABLE IF NOT EXISTS orders (
        _id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255),
        description TEXT
      );
    `);
    console.log("Table 'orders' ensured to exist");

    // Create placeholders for bulk insert
    const placeholders = data.map(() => "(?, ?, ?)").join(", ");
    const query = `INSERT IGNORE INTO orders (_id, title, description) VALUES ${placeholders}`;
    // Flatten the array of data for the query
    const values = data.reduce((acc, item) => {
      acc.push(item._id, item.title, item.description);
      return acc;
    }, []);

    // Insert data into the orders table
    await conn.query(query, values);
    console.log("Data inserted into the database");
  } catch (err) {
    console.error("Failed to insert data into the database:", err);
  } finally {
    if (conn) conn.release(); // Release the connection
  }
};

// Export all functions
module.exports = { createDatabase, connectToDatabase, insertDataIntoDatabase };
