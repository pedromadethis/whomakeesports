import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("1jYqhKYZf5goxg8WFkvlS5xcS7bLIBfy_rwuaoxEEobc");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
