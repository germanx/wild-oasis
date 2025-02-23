# React

## vite

npm create vite@4
npm i
npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev
npm run dev

npm i react-router-dom@6
npm i styled-components

npm i react-icons
npm i @supabase/supabase-js
npm i date-fns
npm i react-hot-toast
npm i react-hook-form@7

### react query

npm i @tanstack/react-query@4
npm i @tanstack/react-query-devtools@4

### vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react(), eslint()],
});

### .eslintrc.json

{
"extends": "react-app"
}

### vite.config.js

import eslint from 'vite-plugin-eslint';

plugins: [react(), eslint()],

### .eslintrc.cjs

I added this rule in the eslintrc file and re-run the npm run dev

"rules": {
"react/prop-types": "off",
"no-unused-vars": "off",
}
--
// eslint-disable-next-line

---

## create app

npx create-react-app profile-card
npx create-react-app@5 profile-card

npm config set legacy-peer-deps true

## npm start

---

## console

ctrl+alt+j

## OMDb API

Here is your key: c4f9f630
OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c4f9f630

http://www.omdbapi.com/?apikey=[yourkey]&
