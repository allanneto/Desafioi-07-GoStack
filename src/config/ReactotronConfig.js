import Reactotron from 'react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.0.0.114' })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
