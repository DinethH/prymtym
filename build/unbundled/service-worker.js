/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer/app-drawer.html","92dd771bce4aef71c6b06e78a14c7326"],["/bower_components/app-layout/app-header/app-header.html","d2b4c67465087e15646619afb39f735e"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","350fc37d1d1c7044c213567b6039da09"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","a21d6a2fc019eb59d10586aada74313e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","e07c0b1da289f388fd4e3b80f229dec6"],["/bower_components/app-layout/helpers/helpers.html","55000b333a0c02f33aab3af900c50206"],["/bower_components/app-route/app-location.html","52b3d8b5ecbb838b41bd9bd0ae556cca"],["/bower_components/app-route/app-route-converter-behavior.html","0e5b36ae9988a88bb30729fdb99a5d94"],["/bower_components/app-route/app-route.html","624ca199d36389f3db04597a593548ec"],["/bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-client.html","be59d1656e7526e86e03782ddd45d1ce"],["/bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror.html","13385e6bb1786296f603d21b281cc7ed"],["/bower_components/app-storage/app-indexeddb-mirror/common-worker.html","cf7f0775f68ae3e2841f56b491bf01bb"],["/bower_components/app-storage/app-network-status-behavior.html","da5ca8e23c23932448b728ee17c1234e"],["/bower_components/app-storage/app-storage-behavior.html","88d26fcd805189c33934b791144c7832"],["/bower_components/firebase/firebase.js","c03269be4e77cdea1d7fdd824831f3d3"],["/bower_components/google-chart/charts-loader.html","eefd574830fff36813fdd751e1e67193"],["/bower_components/google-chart/google-chart.css","5f2580c465a508d2267c5be89d53a715"],["/bower_components/google-chart/google-chart.html","2cc24c84bd4d4556f19047feff13fc35"],["/bower_components/google-chart/loader.js","526c7a1b6d15c9d7073d042928f87e29"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b9a8e766d0ab03a5d13e275754ec3d54"],["/bower_components/iron-ajax/iron-request.html","84d681003f84ef3c09a339aff092a4c2"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-flex-layout/iron-flex-layout.html","f6d0b5075d5f70cac9b4bd66bd88c459"],["/bower_components/iron-icon/iron-icon.html","522d70fee40ae3b04f6fd685881812ee"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["/bower_components/iron-location/iron-location.html","8cded1d38fb601fe7c3bbbe1bd725552"],["/bower_components/iron-location/iron-query-params.html","4939f7b89ff899694a27bd1563543184"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","0185cbe8d7139c9e92af3a9af67feb17"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/neon-animation/animations/fade-in-animation.html","b814c818dbcffe2bb50563e1406497df"],["/bower_components/neon-animation/animations/fade-out-animation.html","44988226230af0e6d92f0988fc8688e2"],["/bower_components/neon-animation/animations/opaque-animation.html","8e2f63bbc648796f3ed96834a5553d07"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animated-pages.html","2ee517f0bdf94f05f7317676baf3e61c"],["/bower_components/neon-animation/neon-animation-behavior.html","eb1cdd9cd9d780a811fd25e882ba1f8e"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","af3b9b4baacedc4ff687bb66b51b6a39"],["/bower_components/neon-animation/web-animations.html","b310811179297697d51eac3659df7776"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","8eaf13f49324367c73031031e7476846"],["/bower_components/paper-fab/paper-fab.html","bdbcdcba723f04d28b53b0f230a3f87b"],["/bower_components/paper-icon-button/paper-icon-button.html","4a5cbc3fe046e2c070d4bf34ec7463d6"],["/bower_components/paper-material/paper-material-shared-styles.html","3a5f381dbdbdabbfd7c122e1c02a60e3"],["/bower_components/paper-material/paper-material.html","82c0fde850e52dc3bfdfc5efa34d5a15"],["/bower_components/paper-ripple/paper-ripple.html","30fa6456055a5725c6492f8e5a364f39"],["/bower_components/paper-styles/color.html","c53abb41659bf242d420a7f93b977e91"],["/bower_components/paper-styles/default-theme.html","25d95202be2ff5b60f651924e66abed2"],["/bower_components/paper-styles/shadow.html","0db3ad33dddb4766c259232951ec158b"],["/bower_components/polymer/polymer-micro.html","a2336e7b5eae7a2a02afdd831f200bd3"],["/bower_components/polymer/polymer-mini.html","bac30e0c47bd92ed7d5d361d437a8f11"],["/bower_components/polymer/polymer.html","f1e7d091cbe69a3c2a8df5f75917b916"],["/bower_components/polymerfire/firebase-app.html","3719a468a08896e4a948d888ffc7a4fb"],["/bower_components/polymerfire/firebase-auth.html","8a47553e9a2d8e9fb471b43fe261a6bd"],["/bower_components/polymerfire/firebase-common-behavior.html","25c766262864a63e1a1f6bab34472863"],["/bower_components/polymerfire/firebase-database-behavior.html","7d3625b60cc874e2599c201f581a8b8c"],["/bower_components/polymerfire/firebase-document.html","b169fdd897307c4b66caffa832a942c0"],["/bower_components/polymerfire/firebase-query.html","840f12e45833d04dbb41aa4b9a984e5b"],["/bower_components/polymerfire/firebase.html","4f28951d4ca113234446d04a53364b10"],["/bower_components/polymerfire/polymerfire.html","ffc2b814331fab50a4a263beb093848b"],["/bower_components/promise-polyfill/Promise-Statics.js","ffd962bbdb15835b951e08847d431c17"],["/bower_components/promise-polyfill/Promise.js","60afd642500a82958f13dbf9d4b7684c"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/promise-polyfill/promise-polyfill.html","97dd009429dbc654aa105abcd0dfb927"],["/bower_components/web-animations-js/web-animations-next-lite.min.js","84ad9c3ed8f3f8de437bcb63e194bf29"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","0fc977baabe843e858c7d6cde05986e7"],["/index.html","7a0b9f13faaafcd7f1d9c43cb9a89570"],["/manifest.json","6847f25f5ef12373d6b324c2669cc45b"],["/src/prymtym-about.html","1758bccc958197129e3b8d7ea1ce7872"],["/src/prymtym-app.html","54f8526aafcdd674244a03ad157ba605"],["/src/prymtym-checkin.html","abf9c0051baba6f47b21a36f489372a7"],["/src/prymtym-checkins-wrapper.html","e311db8110a35292df122d45e5b0c783"],["/src/prymtym-checkins.html","3c99a4c2254457593cd731d39b9f853a"],["/src/prymtym-community.html","801667aa0d07d0909391cabf930dd3ae"],["/src/prymtym-home.html","910110326a7bd4dd901fb7c220981e3a"],["/src/prymtym-icons.html","0322638b998da81ff21cd4cb455c1bc7"],["/src/prymtym-settings.html","139a461894cf030a1335950566619097"],["/src/prymtym-sign.html","d1022ce7cb6366b976cb102c7595f7ae"],["/src/prymtym-support.html","0a74368e772214058cd6915ce3fd285a"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




