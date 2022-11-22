const express = require("express");
const bodyParser = require("body-parser"); // post 요청시 body 파싱을 위해 추가
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//bodyParser 미들웨어 추가
app.set("port", process.env.PORT || 8888);

app.get("/get", (req, res) => {
  //user/{id} -> parameter
  //req.params.id , pw

  //쿼리스트링 ?name=value&name2=value2
  let id = req.query.id;
  let pw = req.query.pw;

  res.send("id : " + id + " pw : " + pw);
});

app.post("/post", (req, res) => {
  let id = req.body.id;
  let pw = req.body.pw;

  res.send("id : " + id + " pw : " + pw);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});
