const { MongoClient } = require("mongodb");

const { DB_URL, DB_NAME, DB_TABLE } = process.env;

module.exports = async (req, resp) => {
  const conn = await MongoClient.connect(DB_URL);
  const msg = conn.db(DB_NAME).collection(DB_TABLE);
  const { timeStamp, phone, message, author, receiver } = req.query;
  return resp.json({
    status: 200,
    result: await msg.insertOne({
      timeStamp,
      message,
      author,
      receiver,
      phone,
      viewed: false,
    }),
  });
};
