import './App.css';
import Counter from './component/BuggyCounter'
import ErrorBoundary from './component/ErrorBoundary';
import Color from './component/Color';
import Child from './component/Color'

function App() {
  return (
    <>
    {/* <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary> */}

    <Child/>
    </>
  );
}

export default Color;
