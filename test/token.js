
const bcrypt = require("bcrypt");
const clientId = "7P0yhkbIOcZSSoPddhhEHs";
const clientSecret = "$2a$04$xfqKiPhcXKIpxZx9AWJLv.";
const timestamp = (new Date()).valueOf().toString();
// 밑줄로 연결하여 password 생성
const password = `${clientId}_${timestamp}`;
// bcrypt 해싱
const hashed = bcrypt.hashSync(password, clientSecret);
// base64 인코딩
const client_secret_sign = Buffer.from(hashed, "utf-8").toString("base64");
console.log(client_secret_sign)
console.log(timestamp)
// pm.environment.set("client_id", clientId);
// pm.environment.set("timestamp", timestamp);
// pm.environment.set("client_secret_sign", client_secret_sign);