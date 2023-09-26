import '@/styles/global.scss';

import { Layout } from './components/Layout';
import { Workspace } from './components/Workspace';

const App: React.FC = () => (
  <Layout>
    <Workspace />
  </Layout>
);

export default App;
