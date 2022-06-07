var expect  = require('chai').expect;
var request = require('request');
let apiKeys = require('../../../security/apikey')
let headers =  {
    'User-Agent': 'request',
    'API-Key': apiKeys.getTestKey(),
  }
  describe('CITIES API', function() {
    it('api online', function(done){
        request({url:'http://localhost:3013/cities/', headers: headers}, function(error, response, body){
            expect(response.statusCode).to.equal(200);
            done();
        })
    })
    describe('List query',function(){
        it('status', function(done){
            request({url:'http://localhost:3013/cities/v1/list', headers: headers}, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        it('content: at least 1 city', function(done){
            request({url:'http://localhost:3013/cities/v1/list', headers: headers}, function(error, response, body){
                expect(body.length).to.gt(0);
                done();
            })
        })
    })

    describe('List Extended query',function(){
        it('status', function(done){
            request({url:'http://localhost:3013/cities/v1/listExtend', headers: headers}, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
        it('content: at least 1 city', function(done){
            request({url:'http://localhost:3013/cities/v1/listExtend', headers: headers}, function(error, response, body){
                expect(body.length).to.gt(0);
                done();
            })
        })
    })
  })