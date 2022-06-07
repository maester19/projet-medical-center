var expect  = require('chai').expect;
var request = require('request');
let headers =  {
    'User-Agent': 'request',
    'API-Key': 'WhkB2J4qXLzzvM2PSK43eg4g8lEX6cBU',
  }

  describe('SERVER ONLINE VERIFICATION', function() {
        //on test si l'api est en ligne
        it('Jooka api in online', function(done){
            request({url:'http://localhost:3013/api', headers: headers}, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })

        // On test si l'api est bloquer sans apikey
        it('API-KEY Test is necessary', function(done){
            request('http://localhost:3013/api', function(error, response, body){
                expect(response.statusCode).to.equal(401);
                done();
            })
        })
  })

require ('./core/Cities/CitiesTest')