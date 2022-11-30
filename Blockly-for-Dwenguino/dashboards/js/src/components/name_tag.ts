import { FASTElement, customElement, attr, ValueConverter, html, ViewTemplate, css, ElementStyles, when, observable } from '@microsoft/fast-element';
import axios from "axios";

const elementStyle: ElementStyles = css`
  :host {
    display: inline-block;
    contain: content;
    color: white;
    background: var(--fill-color);
    border-radius: var(--border-radius);
    min-width: 325px;
    text-align: center;
    box-shadow: 0 0 calc(var(--depth) * 1px) rgba(0,0,0,.5);
  }

  :host([hidden]) { 
    display: none;
  }

  .header {
    margin: 16px 0;
    position: relative;
  }

  h3 {
    font-weight: bold;
    font-family: 'Source Sans Pro';
    letter-spacing: 4px;
    font-size: 32px;
    margin: 0;
    padding: 0;
  }

  h4 {
    font-family: sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  .body {
    background: white;
    color: black;
    padding: 32px 8px;
    font-size: 42px;
    font-family: cursive;
  }

  .footer {
    height: 16px;
    background: var(--fill-color);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
`;

const numberConverter: ValueConverter = {
    toView(value: number): string {
        return value.toString();
    },
  
    fromView(value: string): number {
      if (Number.isNaN(Number(value))){
        return 1
      } else {
        return Number(value);
      }
    }
  };

const nameTagTemplate: ViewTemplate<NameTag> = html`
  <div class="header">
    <slot name="avatar"></slot>
    <h3>${x => x.greeting.toUpperCase()}</h3>
    <h4>my name is</h4>
  </div>
  
  <div class="body">
    <slot></slot>
  </div>

  <button @click="${x => x.handleButtonClick()}">Greet</button>
  <h3>You have greeted me ${name_tag => name_tag.numberOfGreets} times, thank you!</h3>


  ${when(elem => !elem.loggedIn, html<NameTag>`
    <a href="https://github.com/login/oauth/authorize?client_id=1a0bffd9565f3e1c7c47&redirect_uri=http://localhost:12032/oauth/redirect"><button id="loginbutton" type="primary"
      className="btn"
      size="lg">
        Login
    </button></a>
  `)}

  ${when(elem => elem.loggedIn, html<NameTag>`
  Yay, you have been logged in.
  `)}
  
  <div class="footer"></div>
`;

@customElement({
  name: 'name-tag',
  template: nameTagTemplate,
  styles: elementStyle
})
export class NameTag extends FASTElement {
    @attr greeting: string = 'Hello';
    @attr({ converter: numberConverter }) numberOfGreets: number = 0;
    @attr loggedIn: boolean = false;
    @observable user: any|null = null;

    constructor(){
      super();
      const token: string = new URLSearchParams(window.location.search).get("access_token") as string;
      axios.get(`https://api.github.com/user`, {
        headers: {
          Authorization: "token " + token
        }
      }).then((res) => {
        this.user = res.data;
        this.loggedIn = true;
      }).catch(error => {
        console.log(error)
      })
    }

    handleButtonClick() {
      this.numberOfGreets += 1;
    }

    connectedCallback() {
        super.connectedCallback();
        console.log("name-tag is now connected to the DOM");
    }

    // optional method called when user is changed
    userChanged(oldUser: any, newUser: any){
      console.log(newUser);
    }

    // optional method 
    greetingChanged() {
        console.log(this.greeting)
        //this.shadowRoot!.innerHTML = this.greeting;
    }

    numberOfGreetsChanged(oldValue: number, newValue: number){
        console.log(this.numberOfGreets);
    }
}