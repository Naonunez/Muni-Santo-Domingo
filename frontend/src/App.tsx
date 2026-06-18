import { IonApp, setupIonicReact } from '@ionic/react';
import AppRoutes from './routes/AppRoutes';
import AccessibilityBar from './components/AccessibilityBar';

/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import './theme/accessibility.css';
import './theme/gob-icons.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AccessibilityBar />
<AppRoutes />
  </IonApp>
);

export default App;