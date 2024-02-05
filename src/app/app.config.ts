import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyDl-9P3Gbmnou1PgiEnydUFoT4IdG0cfFs",
  authDomain: "icaria-458c0.firebaseapp.com",
  projectId: "icaria-458c0",
  storageBucket: "icaria-458c0.appspot.com",
  messagingSenderId: "954091499455",
  appId: "1:954091499455:web:e6c5049b1f04b1e15e3b0a"
};

initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()),
  importProvidersFrom(
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ) ]
};
