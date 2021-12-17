const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


let jsonSql = require('json-sql');
const promise = require('bluebird');
const SqlConnection = require("tedious").Connection;
const Request = require("tedious").Request;

executeQuery(query) {
        let resultEntity = {
            result: {},
            error: null
        };

        return new promise((resolve, reject) => {
            var connection = new SqlConnection(this.config);

            connection.on('connect', function (err) {
                let request = new Request(query, function (err, rowCount, rows) {
                    if (err) {
                        resultEntity.error = err;
                        reject(resultEntity);
                    } else {
                        resultEntity.result = rows;
                        resolve(resultEntity);
                    }

                    connection.close();
                });
                connection.execSql(request);
            }
           );
        });
    }








module.exports = {
  HOST: "files.000webhost.com",
  USER: "docker3",
  PASSWORD: "%R^mdLzvl!WRH@Wf%Hwf",
  DB: "id18136124_docker3"
};




app.get('/', (req, res) => {
  res.send('haciendo el sql...')
})

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
