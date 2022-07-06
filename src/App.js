
import './App.css';
import Test from './components/Test';
import Title from './components/Title';

function App() {
  const title = "wonderfully made"
  const subtitle = "subtitle";
  return (
    <>
    

  <Title  headline ={title} newprop={subtitle} />
  {/* <Title headline ="Title 2" /> 
  <Title headline = "Title 3" />  */}


<Test />
    </>
   


  );
}

export default App;
