import {Component} from 'react'
import Counter from './components/Counter'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from './components/Fallback';

import "./App.css";
import MinValue from './components/MinValue';
import MaxValue from './components/MaxValue';

class App extends Component{
  
  render(){

    const errorHandler =(error, errorInfo) => {
      console.log("Logging", error, errorInfo)
    }

    return (
        <div className='App'>
          <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler} >
            <MinValue/>
          </ErrorBoundary>

          <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler} >
            <MaxValue/>
          </ErrorBoundary>  

          <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler} >
            <Counter/>
          </ErrorBoundary>
      </div>
      );
  }
}

export default App
