import css from './App.module.css';
import NavBarChild from './components/NavBarChild';
import NavBarForm from './components/NavBarForm';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarChild />
      <NavBarSimple />
      <Sidebar />
      <NavBarForm />
    </div>
  );
}

export default App;