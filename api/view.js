const { MongoClient } = require("mongodb");

const { DB_URL, DB_NAME, DB_TABLE } = process.env;

module.exports = async (req, resp) => {
  const { timeStamp } = req.query;
  const conn = await MongoClient.connect(DB_URL);
  const msg = conn.db(DB_NAME).collection(DB_TABLE);
  return resp.json({
    status: 200,
    result: await msg.deleteOne({
      timeStamp,
    }),
  });
};
