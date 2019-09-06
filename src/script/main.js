import React, {Component} from "react";
import ReactDom from 'react-dom';
import A from './a';
class App extends Component
{
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <h2>欢迎来到菜鸟教程</h2>
            </div>
            <p className="App-intro">
              你可以在 <code>src/App.js</code> 文件中修改。
            </p>
            <video autoPlay loop  controls="controls">
          <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4"></source>
          </video>
          </div>
          

          
        );
      }
}

ReactDom.render(<App />,document.getElementById('root'));

console.log(A.bar)