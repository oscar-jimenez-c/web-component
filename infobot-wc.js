function getAuthToken() {
        // YOU SHOULD HAVE THIS KIND OF API ON YOUR SERVER
        return fetch('https://us-central1-sonorous-study-334621.cloudfunctions.net/wc-auth', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            payload: {
              identifier: 'test@email.com',
              name: 'Test user',
              email: 'test@user.com',
              phone: '1800UJETSDK'
            }
          })
        }).then(function(resp) {
          return resp.json();
        });
      }
const template = document.createElement("template");
const script = document.createElement("script");
let ujet = undefined;
script.src = "https://websdk.ujet.co/v2/loader.js"
template.innerHTML = ``;
script.addEventListener('load', function () {
  ujet = new UJET({
        name: 'Infobot',
        companyId: "171095767092461478a944eda8619d060",
        menuKey: 'VirtualAgent',
        host: "https://missi-six-dev-wvfxsud.uc1.ccaiplatform.com/"
      });
  ujet.on('created', function () {
    ujet.authenticate(getAuthToken);
  });
  ujet.on('chat:message', function(message) {
    if(message.type === "text" && message.content === "What park can I help you with?"){
      let iframe = this.document.querySelector("#ujet-widget");
      if(iframe && iframe.contentWindow) {
      }
      ujet.communicator.send("sdfg")
    }
    console.log('chat:message - ' + JSON.stringify(message));
  });
})

class Infobot extends HTMLElement {
  
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(script);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("sf-infobot", Infobot);
