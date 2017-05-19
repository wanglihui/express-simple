var express = require("express");
var router = express();

//直接返回数据
router.get("/api/test", (req, res, next) => {
    //这边可以直接使用sequelize.js ORM框架
    let sql = 'SELECT * FROM logs';
    /**
     * 
     * db.query(sql);
     */
    res.json({});
})

//可以渲染页面
router.get("/view/test", (req, res, next) => {
    res.render('./index.ejs', {test: "test"});
})

module.exports = router;
