import './styles/tailwind_css/directives.css'; // directives for Tailwind styles
import './styles/css/App.css'; // stylesheet for CSS styles
import CollectionCard from './components/CollectionCard'

function App() {
  return (
    
    <div> {/* this is the page container */}
      <CollectionCard id={0} name={'Bandana Punk'} traits={[{'value': 7}]} image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"/>
    </div>
  );
}

export default App;