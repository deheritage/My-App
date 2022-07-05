
import './App.css';
import Title from './components/Title';

function App() {
  const title = "wonderfully made"
  const subtitle = "subtitle";
  return (
    <>
    

  <Title  headline ={title} newprop={subtitle} />
  <Title headline ="Title 2" /> 
  <Title headline = "Title 3" /> 

    </>
   
  );
}

export default App;
