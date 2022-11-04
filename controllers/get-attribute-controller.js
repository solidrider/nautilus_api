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
      const value = client.query(`SELECT value FROM ${item}
      WHERE ST_Contains(
          geom,
          'SRID=4612;POINT(
            ${long} ${lat})'::geometry
      );`);
      return value;
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
