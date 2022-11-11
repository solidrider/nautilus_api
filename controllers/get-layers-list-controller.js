const pgClient = require('../utils/pgClient');

const client = pgClient;

exports.get = async (req, res) => {
  try {
    const results = await client.query(
      `select "id","table_name","title","geom_type","is_choropleth" from layer WHERE is_delete=false`
    );
    // console.log(results.rows);
    // await client.end();
    return res.status(200).json(results.rows);
  } catch (e) {
    console.log(e);
  } finally {
    // await client.end();
  }
};
