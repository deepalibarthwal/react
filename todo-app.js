/** @jsx TinyReact.createElement */

/*** Step 1,2,3,4 - createElement */

const root = document.getElementById("root");

var Step1 = (
  <div>
    <h1 className="header">Hello Tiny React!</h1>
    <h2>(coding nirvana)</h2>
    <div>nested 1<div>nested 1.1</div></div>
    <h3>(OBSERVE: This will change)</h3>
    {2 == 1 && <div>Render this if 2==1</div>}
    {2 == 2 && <div>{2}</div>}
    <span>This is a text</span>
    <button onClick={() => alert("Hi!")}>Click me!</button>
    <h3>This will be deleted</h3>
    2,3
  </div>
);

console.log(Step1);

var Step2 = (
  <div>
    <h1 className="header">Hello Tiny React!</h1>
    <h2>(coding nirvana)</h2>
    <div>nested 1<div>nested 1.1</div></div>
    <h3 style="background-color:yellow">(OBSERVE: I said it!!)</h3>
    {2 == 1 && <div>Render this if 2==1</div>}
    {2 == 2 && <div>{2}</div>}
    <span>Something goes here...</span>
    <button onClick={() => alert("This has changed!")}>Click me!</button>
  </div>
);

const Heart = (props) => <span style={props.style}>&hearts;</span>;

const Button = (props) => <button onClick={props.onClick}>{props.children}</button>;



const Greeting = function (props) {
  return (
    <div className="greeting">
      <h2>Welcome {props.message}</h2>
      <Button onClick={() => alert("I love React")}>I <Heart /> React</Button>
    </div>
  );
}

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Default title"
    };

    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle() {
    this.setState({ title: new Date().toString() });
  }

  render() {
    return (
      <div className="alert-container">
        <h2>{this.state.title}</h2>
        <div>
          {this.props.message}
        </div>
        <Button onClick={this.changeTitle}>Change title</Button>
      </div>
    );
  }
}

class Stateful extends TinyReact.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.title.toString()}</h2>
        <button onClick={update}>Update</button>
      </div>
    );
  }
}


function update() {
  TinyReact.render(<Stateful title={new Date()} />, root);
}


class WishList extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      wish: {
        title: "I wan't to be a programmer"
      }
    }
    this.update = this.update.bind(this);
  }

  update() {
    let newValue = this.inputWish.value;  
    let wish = Object.assign({}, this.state.wish);

    wish.title = newValue;
    this.setState({
      wish
    });
  }

  render() {
    return (
      <div>
        <h2>Your wish list</h2>
        <input type="text" ref={(inputWish) => { this.inputWish = inputWish }} placeholder="What's your wish?"></input>
        <button onClick={this.update}>Update</button>

        <div>
          {this.state.wish.title}
        </div>
      </div>
    );
  }

}

let newElement = (
  <div>
    <p>One</p>
    <p>Two</p>
  </div>
);


let Header = props => {
  return (
    <div>
      <h1 style="color:green">{props.text}</h1>
      <h6>(double click on todo to mark as completed)</h6>
    </div>
  );
};



TinyReact.render(<WishList />, root);