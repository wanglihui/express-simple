var express = require("express");
var router = express();

router.get("/test", (req, res, next) => {
    //这边可以直接使用sequelize.js ORM框架
    let sql = 'SELECT * FROM logs';
    /**
     * 
     * db.query(sql);
     */
    res.json({});
})

module.exports = router;
