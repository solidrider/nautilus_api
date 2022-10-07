const pgClient = require('../utils/pgClient');

const client = pgClient;

exports.get = async (req, res) => {
  try {
    const results = await client.query(`select "id","table_name","title" from layer`);
    // console.log(results.rows);
    // await client.end();
    return res.status(200).json(results.rows);
  } catch (e) {
    console.log(e);
  } finally {
    // await client.end();
  }
};
