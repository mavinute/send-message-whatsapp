import { create, Whatsapp, Message, SocketState } from 'venom-bot'


class Sender {
  private client: Whatsapp

  constructor() {
    this.initialize()
  }

  async sendText(to: string, body: string) {
    // 5586999999999@c.us

    this.client.sendText(to, body)
  }

  private initialize() {
    const qr = (base64Qrimg: string) => {
      console.log()
    }

    const status = (statusSession: string) => {

    }

    const start = (client: Whatsapp) => {
      this.client = client
      //console.log(client)

      this.sendText("5586998423140@c.us", "Ola funciona")
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    create('ws-sender-dev', qr, status)
      .then((client) => {
        start(client)
      })
      .catch((err) => {
        console.log(err)
      })
  }


}

export default Sender