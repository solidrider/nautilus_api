const pgClient = require('../utils/pgClient');

const client = pgClient;

exports.post = async (req, res) => {
  try {
    const table_name = req.body.name;
    const results = await client.query(
      `SELECT json_build_object(
        'type', 'FeatureCollection',
        'features', json_agg(ST_AsGeoJSON(t.*)::json)
        )
      FROM ${table_name} as t`
    );
    console.log(results.rows);
    // client.end();
    return res.status(200).json(results.rows);
  } catch (e) {
    console.log(e);
  } finally {
    // await client.end();
  }
};
