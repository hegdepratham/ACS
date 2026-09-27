const PiranhaMessage = require('../../PiranhaMessage')
const ServerHelloMessage = require('../Server/ServerHelloMessage')
const LoginFailedMessage = require('../Server/LoginFailedMessage')

const config = require('../../../config.json')

class ClientHelloMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10100
    this.version = 0
  }

  async decode () {
    this.data = {}
    
    this.data.Protocol = this.readVInt()
    this.data.Key = this.readVInt()
    this.data.Major = this.readVInt()
    this.data.Minor = this.readVInt()
    this.data.Build = this.readVInt()

    //console.log(this.data)
  }

  
   async process () {
    await new ServerHelloMessage(this.client).send()
  }
  
}

module.exports = ClientHelloMessage
