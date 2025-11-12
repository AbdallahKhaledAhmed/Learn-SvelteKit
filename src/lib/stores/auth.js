import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialValue = browser ? window.localStorage.getItem('token') : null;

export const token = writable(initialValue);

token.subscribe((value) => {
  if (browser) {
    if (value) {
      window.localStorage.setItem('token', value);
    } else {
      window.localStorage.removeItem('token');
    }
  }
});
