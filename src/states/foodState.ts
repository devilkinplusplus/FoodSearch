// RecoilStates.js
import { atom } from 'recoil';
import { Hints } from '../consts/food';

export const foodState = atom<Hints[]>({
  key: 'foodState',
  default: [],
});
