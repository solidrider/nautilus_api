const { reset } = require('nodemon');
const pgClient = require('../utils/pgClient');

const client = pgClient;

exports.post = async (req, res) => {
  try {
    const lat = req.body.lngLat.lat;
    const long = req.body.lngLat.lng;
    const items = req.body.layer;
    console.log(items);
    const promises = items.map(item => {
      const result = client.query(`
      SELECT value,rank::integer
      FROM ${item}
      INNER JOIN
        prefecture
      ON
      ${item}.id = prefecture.id
      WHERE ST_Contains(
        prefecture.geom,
          'SRID=4612;POINT(
            ${long} ${lat})'::geometry
      );`);
      return result;
    });
    const results = await Promise.all(promises);
    return res.status(200).json(results);
    // await client.end();
  } catch (e) {
    console.log(e);
  } finally {
    // await client.end();
  }
};
