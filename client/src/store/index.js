import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#000',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './shirtLogo.png',
  fullDecal: './shirtLogo.png',
});

export default state;