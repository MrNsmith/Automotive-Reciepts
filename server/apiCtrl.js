const { google } = require("googleapis");
const keys = require("./keys.json");
const { SPREADSHEET_ID } = process.env;

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

module.exports = {
  getVendors: async (req, res) => {
    client.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("connected");
        gsrun(client);
      }
    });

    async function gsrun(cl) {
      const gsapi = google.sheets({ version: "v4", auth: cl });

      const opt = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Options!A2:A",
      };
      await gsapi.spreadsheets.values
        .get(opt)
        .then((data) => {
         
          return res.status(200).send(data.data.values);
        })
        .catch(function (err) {
          console.error("Error occurred: " + err);
        });
    }
  },
  getCnVehicles: async (req, res) => {
    client.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("connected");
        gsrun(client);
      }
    });

    async function gsrun(cl) {
      const gsapi = google.sheets({ version: "v4", auth: cl });

      const opt = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Options!B2:B",
      };
      await gsapi.spreadsheets.values
        .get(opt)
        .then((data) => {
         
          return res.status(200).send(data.data.values);
        })
        .catch(function (err) {
          console.error("Error occurred: " + err);
        });
    }
  },
  getHsVehicles: async (req, res) => {
    client.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("connected");
        gsrun(client);
      }
    });

    async function gsrun(cl) {
      const gsapi = google.sheets({ version: "v4", auth: cl });

      const opt = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Options!C2:C",
      };
      await gsapi.spreadsheets.values
        .get(opt)
        .then((data) => {
          console.log(data.data.values);
          return res.status(200).send(data.data.values);
        })
        .catch(function (err) {
          console.error("Error occurred: " + err);
        });
    }
  },
  getMoVehicles: async (req, res) => {
    client.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("connected");
        gsrun(client);
      }
    });

    async function gsrun(cl) {
      const gsapi = google.sheets({ version: "v4", auth: cl });

      const opt = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Options!D2:D",
      };
      await gsapi.spreadsheets.values
        .get(opt)
        .then((data) => {
         
          return res.status(200).send(data.data.values);
        })
        .catch(function (err) {
          console.error("Error occurred: " + err);
        });
    }
  },
  getWhVehicles: async (req, res) => {
    client.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("connected");
        gsrun(client);
      }
    });

    async function gsrun(cl) {
      const gsapi = google.sheets({ version: "v4", auth: cl });

      const opt = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Options!E2:E",
      };
      await gsapi.spreadsheets.values
        .get(opt)
        .then((data) => {
         
          return res.status(200).send(data.data.values);
        })
        .catch(function (err) {
          console.error("Error occurred: " + err);
        });
    }
  },
  getShVehicles: async (req, res) => {
    client.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("connected");
        gsrun(client);
      }
    });

    async function gsrun(cl) {
      const gsapi = google.sheets({ version: "v4", auth: cl });

      const opt = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Options!F2:F",
      };
      await gsapi.spreadsheets.values
        .get(opt)
        .then((data) => {
          
          return res.status(200).send(data.data.values);
        })
        .catch(function (err) {
          console.error("Error occurred: " + err);
        });
    }
  },
  
  
  appendRow: async (req, res) => {
    client.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("connected");
        gsrun(client);
      }
    });

    async function gsrun(cl) {
      const { values } = req.body;
      const gsapi = google.sheets({ version: "v4", auth: cl });

      console.log(values);
      const updateOptions = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A2:E2",
        valueInputOption: "USER_ENTERED",

        resource: { majorDimension: "COLUMNS", values: values },
      };
      await gsapi.spreadsheets.values
        .append(updateOptions)

        .then((data) => {
          return res.status(200).send(data);
        })
        .catch(function (err) {
          console.error("Error occurred: " + err);
        });
    }
  },
};
