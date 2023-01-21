import './src/lib/dayjs'
import { StatusBar } from 'react-native';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Rotues } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_600SemiBold, Inter_700Bold})

  if(!fontsLoaded) {
    return (
      <Loading></Loading>
    )
  }

  return (
    <>
      <Rotues></Rotues>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent></StatusBar>
    </>
  );
}

