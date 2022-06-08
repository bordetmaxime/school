const { addArgonaute } = require("../dataMapper");
const dataMapper = require("../dataMapper");

const mainController = {


  async homePage(req, res){
    try {

      const argonautes = await dataMapper.findAllArgonaute();
      res.render("index", { argonautes });
    } catch (error) {
      res.status(500).send(error);
    }

        },


        async addArgonaute(req, res) {
          try {
           
            const count = await dataMapper.addArgonaute(req.body);
            if (count === 1) {
              res.redirect(`/`);
            } else {
              res.status(500).send("Aucun enregistrement créé");
            }
          } catch (error) {
            res.status(500).send(error.message);
          }
        },


      };


module.exports = mainController;