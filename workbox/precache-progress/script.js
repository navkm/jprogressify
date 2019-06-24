"use strict";
import {Workbox} from 'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-window.prod.mjs';
let count_installed =0;

if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');
    wb.active.then(function(sw){
      document.getElementById('main').style.display='block';
      document.getElementById('progress').style.display='none';

    });
    wb.register();
  }

  if ('BroadcastChannel' in self) {
    const channel = new BroadcastChannel('precache_status_channel');
    channel.onmessage = function(e) {
      count_installed++;
      document.getElementById('current').innerHTML=count_installed;
    };
  } else{
    // For browsers that do not support BroadcastChannel API
    document.getElementById('main').style.display='block';
    document.getElementById('progress').style.display='none';
  }
