const chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);
let server = 'http://localhost:9999/local';

describe('Mocha API test', function (){
    it('Verify that PING endpoint says Hi', (done) =>{
        chai.request(server)
            .get('/ping')
            .end((err,res)=>{
               res.should.have.status(200);
               res.type.should.be.equal('application/json')
               res.body.message.should.be.equal('Hello Spark Automation Academy');
               done();
            });
    });
});