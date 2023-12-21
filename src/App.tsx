import { MultiCheckboxForm } from './components/MultiCheckboxForm';
import { SingleCheckboxForm } from './components/SingleCheckboxForm';

function App() {
  return (
    <div>
      <h1>チェックボックスが１つの場合</h1>
      <SingleCheckboxForm />
      <h1>チェックボックスが複数の場合</h1>
      <MultiCheckboxForm />
    </div>
  );
}

export default App;
