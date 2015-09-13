/*
 * @ author: zimyuan
 * @last-edit-date: 2015-09-12
 */

var path = require("path");

var config = {
    // debug 为 true 时，用于本地调试
    debug: true,

    // 项目基本信息配置
    name: "Flight System",
    description: "Flight System",
    keywords: "nodejs, node, system",

    site_headers: [
        '<meta name="author" content="yuanzm" />'
    ],
    site_logo: "/public/images/site-logo.jpg",
    site_icon: "/public/images/site-logo.jpg",

    host: "localhost",
    // mongodb配置
    db: "mongodb://127.0.0.1/Flight-System",
    
    session_secret: 'flight', // 务必修改
    auth_cookie_name: 'system',

    port: 3000,

    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_db: 0
}

module.exports = config;
