import React, {Component} from "react";
import ReactDom from 'react-dom';
import {a,b} from './a'
import '../style/main.css';
class App extends Component
{
    render() {
        return (
          <div className="App">

            <div className="App-header">
              <h2 className="text-muted">欢迎来到菜鸟教程</h2>
            </div>
            <p className="App-intro">
              你可以在 <code>src/App.js</code> 文件中修改。
            </p>

            <button onClick = {a}>dianwo</button>
            <video autoPlay loop  controls="controls">
          {/* <source src="1.mp4" type="video/mp4"></source> */}
          </video>
          </div>
          

          
        );
      }
}

ReactDom.render(<App />,document.getElementById('content'));
