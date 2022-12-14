const express = require("express");
const app = express();
const port = 3004
const mysql = require("./connection").con


app.get("/", (req, res) => {
    res.send("index.html")
});

app.get("/update", (req, res) => {

    const { title, description } = res.query;
    let qry = "update test set title=?, description=?";

    mysql.query(qry, [title, description], (err, result) => {
        if (err) throw err
    })
});

app.get("/addtitle", (req, res) => {
    const { title, description } = req.query

    let qry = "select * from ayush where title=? or description=?";
    mysql.query(qry, [title, description], (err, results) => {
        if (err)
            throw err
        else {
            if (result.length > 0) {

            } else{

                let qry2 = "insert into test values(?,?,?,?)";
            mysql.query(qry2, [title, description], (err, results) => {
                if (results.affectedRows > 0) {
                    res.render("add", { mesg: true })
                }
            })
        }
    }
})
});



    app.listen(port, (err) => {
        if (err)
            throw err
        else
            console.log("server is running at port %d:", port);
    });
