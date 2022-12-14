const pgClient = require('../utils/pgClient');

const client = pgClient;

exports.post = async (req, res) => {
  try {
    const table_name = req.body.name;
    const isReverse = req.body.isReverse;
    const results = await client.query(
      `SELECT max(value), min(value) FROM ${table_name}`
    );
    if (isReverse === true) {
      const max = (results.rows[0].max *= -1);
      const min = (results.rows[0].min *= -1);
      results.rows[0].max = min;
      results.rows[0].min = max;
      console.log(results.rows);
      return res.status(200).json(results.rows);
    }
    // client.end();
    return res.status(200).json(results.rows);
  } catch (e) {
    console.log(e);
  } finally {
    // await client.end();
  }
};
