import { StatusBar } from 'expo-status-bar';
import {  Text,  SafeAreaView, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import {store} from "./src/app/store";
import Counter from './src/components/Counter';
import ButtonRedux from './src/components/ButtonRedux';

export default function App() {
  const isDarkMode = useColorScheme()==='dark';

  return (
    <Provider store={store}>
    <SafeAreaView>
      <Counter/>
      <ButtonRedux/>
    </SafeAreaView>
    </Provider>
  );
}

