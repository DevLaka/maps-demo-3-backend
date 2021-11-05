module.exports = app => {
    const addresses = require("../controllers/address.controller.js");
  
    var router = require("express").Router();
  
    // Create a new address
    router.post("/", addresses.create);
  
    // Retrieve all addresses
    router.get("/", addresses.findAll);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/address', router);
  };
