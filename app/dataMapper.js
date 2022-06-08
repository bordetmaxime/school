const client = require("./database");

const dataMapper = {



    async findAllArgonaute() {
        const sql = 'SELECT * FROM "list_argonaute"';
        const results = await client.query(sql);
        return results.rows;
      },

      async addArgonaute(argonauteObj) {
        const {name} = argonauteObj;
        const sql = `INSERT INTO "list_argonaute"
                    (name)
                    VALUES
                    ($1)`;
        const results = await client.query(sql, [
          name,         
        ]);
        console.log(results)
        return results.rowCount;
      },





};

module.exports = dataMapper;