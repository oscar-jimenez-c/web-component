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
template.innerHTML = `

`;
script.addEventListener('load', function () {
  ujet = new UJET({
        name: 'Infobot',
        companyId: "171095767092461478a944eda8619d060",
        host: "https://missi-six-dev-wvfxsud.uc1.ccaiplatform.com/",
    // launcher: false
      });
  ujet.on('created', function () {
    ujet.authenticate(getAuthToken);
  });
})

class Infobot extends HTMLElement {
  
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(script);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // var launcher = this.shadowRoot.querySelector('#launcher');
    // launcher.addEventListener('click', function() {
    //   if (ujet.status === 'open') {
    //     ujet.close();
    //   } else {
    //     ujet.start({ menuKey: 'VirtualAgent' }).catch(function(error) {
    //       console.log('error', error);
    //     });
    //   }
    // })
    //this.shadowRoot.querySelector("#name").innerText = "World";
  }
}

customElements.define("sf-infobot", Infobot);
