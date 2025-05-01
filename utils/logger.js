const logger = (req, res, next) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace('T', ' ').substring(0, 19); // fixed here
  
    console.log(`[${formattedDate}] ${req.method} ${req.url}`);
    console.log(`Status Code: ${res.statusCode}`);
    console.log(`URL Params: ${JSON.stringify(req.params)}`);
    console.log(`Query Params: ${JSON.stringify(req.query)}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    console.log(`Cookies: ${JSON.stringify(req.cookies)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log("-------------------------");
  
    next();
  };
  
  module.exports = logger;
  