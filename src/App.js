import React from 'react';
import { FunctionalComponent } from '../../reactprac/src/components/FuntionalComponent';
import ClassComponent from '../../reactprac/src/components/ClassComponent';
import Hello from './components/Hello';
import MovieList from './components/MovieList';
import HookCounter from './components/HookCounter';
import HookArray from './components/HookArray';

function App() {
  return (
    <div className="flex flex-col w-screen h-full justify-center items-center shadow-lg">
      {/* <Hello/> */}
      <MovieList/>
      {/* <ClassComponent className="Class Component"/> */}
      {/* <FunctionalComponent /> */}
      {/* <HookCounter/> */}
      {/* <HookArray/> */}
    </div>    
  );
}

export default App;
