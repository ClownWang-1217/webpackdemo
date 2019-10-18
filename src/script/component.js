import React from 'react';
import ReactDom from 'react-dom';

class MyComponent extends React.Component
{
    render(){
        return(
            <div>
                <h1 className="text-muted">React.Component</h1>
            </div>
            
        );
    }
}

ReactDom.render(<MyComponent/>,document.getElementById('content'));