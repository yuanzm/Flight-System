var app = require('../app'),
    request = require('supertest')(app),
    config = require('../config'),
    should = require("should"),
    UserProxy = require('../proxy/user'),
    models = require('../models'),
    User   = models.User;

describe('test/controllers/sign.test.js', function() {
    var loginname = 'zimyuan';
        identitynumber = '441481199310141671',
        password = 'zimyuan';

    // 测试之前先删除数据库中该测试用户
    before(function() {
        User.remove({ "loginname": loginname }, function(err) {
            console.log('delete successful');
        });
    });

    describe('sign up', function() {
        it('should visit sign up page', function(done) {
            request.get('/signup')
            .expect(200, function(err, res) {
                should.not.exist(err);
                done();
            })
        })
        it('should sign up an user', function(done) {
            request.post('/signup')
            .send({
                loginname: loginname,
                password: password,
                rePassword: password,
                identitynumber: identitynumber
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                UserProxy.getUserByLoginName(loginname, function(err, user) {
                    should.not.exist(err);
                    user.should.ok;
                    done();
                });
            });
        });
        it('should not sign up an user when an loginname is exist', function(done) {
            request.post('/signup')
            .send({
                loginname: loginname,
                password: password,
                rePassword: password,
                identitynumber: identitynumber
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                res.text.should.containEql('该用户名或身份证已经被使用');
                done();
            });
        });
        it('should not sign up an user when an identitynumber is exist', function(done) {
            request.post('/signup')
            .send({
                loginname: loginname + 1,
                identitynumber: identitynumber,
                password: password,
                rePassword: password
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                res.text.should.containEql('该用户名或身份证已经被使用');
                done();
            })
        });
    });
    
    describe('login', function() {
        it('should visit login page', function(done) {
            request.get('/login')
            .expect(200, function(err, res) {
                should.not.exist(err);
                // res.text.should.containEql('Fuck');
                done(err);
            })
        });
        it('should login successful', function(done) {
            request.post('/login')
            .send({
                loginname: loginname,
                password: password
            })
            .end(function(err, res) {
                res.status.should.equal(200);
                res.text.should.containEql('登录成功');
                done()
            })
        });

        it('should not login when password is empty', function(done) {
            request.post('/login')
            .send({
                loginname: loginname,
                password: ''
            })
            .end(function(err, res) {
                res.status.should.equal(422);
                res.text.should.containEql('信息填写不完整');
                done();
            })
        });

        it('should not login when the password is wrong', function(done) {
            request.post('/login')
            .send({
                loginname: loginname,
                password: password + 1
            })
            .end(function(err, res) {
                res.status.should.equal(403);
                res.text.should.containEql('用户密码错误');
                done();
            })
        })
    });
    
    // describe('sign out', function() {
    //     it('should sign out successful', function(done) {
    //         request.post('/signout')
    //         .set('Cookie', config.auth_cookie_name + ':something;')
    //         .expect(302, function (err, res) {
    //             should.not.exist(err);
    //             // res.headers['set-cookie'].should.not.containEql(':something');
    //             done(err);
    //         });
    //     })
    // })
});
