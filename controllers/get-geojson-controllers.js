const pgClient = require('../utils/pgClient');

const client = pgClient;

exports.post = async (req, res) => {
  try {
    const table_name = req.body.name;
    const results = await client.query(
      `SELECT row_to_json(featurecollection) FROM (
        SELECT
          'FeatureCollection' AS type,
          array_to_json(array_agg(feature)) AS features
        FROM (
          SELECT
            'Feature' AS type,
            ST_AsGeoJSON(prefecture.geom)::json AS geometry,
            row_to_json((
              SELECT p FROM (
                SELECT prefecture.id,pref,rank,value,deviation
              ) AS p
            )) AS properties
          FROM ${table_name}
          INNER JOIN
            prefecture
          ON
            ${table_name}.id = prefecture.id
        ) AS feature
      ) AS featurecollection;`
    );
    console.log(results.rows[0]);
    results.rows[0].row_to_json.features.map(e => {
      e.properties.reversed_value = e.properties.value * -1;
    });
    // client.end();
    return res.status(200).json(results.rows);
  } catch (e) {
    console.log(e);
  } finally {
    // await client.end();
  }
};
