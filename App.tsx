import React from 'react';

import {RootNavigator} from './src/navigation/root-navigator';
import {StoreProvider, rootStore} from 'src/app/stores/root-store';

function App(): JSX.Element {
  return (
    <StoreProvider value={rootStore}>
      <RootNavigator />
    </StoreProvider>
  );
}

export default App;
