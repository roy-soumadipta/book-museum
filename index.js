const fetch = require("node-fetch");

exports.handler = async (evt) => {
// make request
let response = await fetch("https://njfn2y5r0h.execute-api.us-west-2.amazonaws.com/Prod/museum", {
                  method: 'POST',
                  body: JSON.stringify(evt)
               });

// get the response as json
let json = await response.json();

return json;
}
