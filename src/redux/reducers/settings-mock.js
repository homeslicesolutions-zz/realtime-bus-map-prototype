// Mocking with thinking of making this map more dynamic later
import randomColor from 'randomcolor';

const colors = randomColor({
  luminosity: 'random',
  hue: 'random',
  count: 150
});

const settingsMock = () => ({
  colors,
  title: 'Portland TriMet',
  userData: 'trimet',
  center: {
    lat: 45.525, 
    lng: -122.65
  },
  zoom: 13
});

export default settingsMock;
