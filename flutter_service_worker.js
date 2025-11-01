'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c143e4eb71edd85f5c6c0d4b077221a2",
".git/config": "8740b567e13e77c86e2b173ad49c7f95",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ec5991129c26423abf4f71d088e18bd7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6a156f4564f5373f3818b3572c1c1388",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23959e66cfacc1b9a5ff384ccbaf4f0e",
".git/logs/refs/heads/main": "aa83610a395edf12f868894e5cee5294",
".git/logs/refs/remotes/origin/main": "cd7fd9aad8026c727c1c723fb9e99363",
".git/objects/09/cce74d0377211cbb1eeea8c41207a78f791ca7": "39d610aa82a9f7728933921a8dbd3ece",
".git/objects/0d/7dc4df178cc3ce5943bfc55f1eb5d5bb2dfe14": "4c107ca80b4a20e72eb073d2eb5a6bad",
".git/objects/18/ec108f6eb67ce1314c641cd3036aecd2e3b665": "ca8f7db3a8c7b5dcd701c5ffb527e90a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/27/9ef3e60ee31d67fd88fa4e576f46b87c4206db": "43ab9d6a00dc6c5a95c77bce47e1f08d",
".git/objects/28/80b893786f092622e5ddeb8812e4ca4a6a3e44": "22b07bd1a8cf3ee2249bb2f96dac75e2",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2f/67ea2d76a53438fde482276ab0f9a6668e5b19": "56270e3df1795108bd2b1919c3036aa9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/48becd761dbb60db1c453dd75ffda7e2f0c652": "a27d66cbb618190856ed2f564952b526",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5c/9f3669cd7bc1023df416f8a1faf061caae0ed9": "3117976fec3f39eabde271a68344607b",
".git/objects/5d/fde599c798bea760866812b23bf5aabf097e61": "93ad7bac845cb653a795063dcafef13b",
".git/objects/64/1708c773a480c45ff0b1486ca001a6c116bfb4": "19e2440e2c462729c36a614e57b106d1",
".git/objects/65/bf99ff928a0cabd2f0eb313b3b8cc9e3131822": "99b10271b65af60075589e148303dcd1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/e145c35ba89f6c693a593ddbaa8380d48b389c": "5a7ed301c2941742ee02aaa7487196aa",
".git/objects/6e/35e617aa3bf00f8ae7b768559cdb04eea1d9af": "5c65f30ec4e4cf1c5bdc958c9b07dfea",
".git/objects/71/86a429f3abb7188860a985cd4f169666d87922": "8adf95b39041b3b750a40fbe91ea76ef",
".git/objects/73/7bd2c08de3333dab3d070bbc1cbb72e1476659": "f2af29245b237f4b0d23bc31f8beed26",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/6ab869b93937293a91ac9ac2a770f8c36b3f63": "5e2ca14cb4347732fa64dcb437cec17e",
".git/objects/7e/6ad5bb72734d71dc6f2a52a77f26463b0b35fe": "8ece4a0ef92fd09a3ea51fe844726cc2",
".git/objects/7e/ce8eadc27faec097865e54f11b598eb9a0cc49": "982504b1c33d502d66f2e88680722eab",
".git/objects/85/4af6f678b26217b55aff7dd32f3e769b32f0b7": "335e661c589ae239f6764376ee108bd7",
".git/objects/88/b791cd11f1a317b5afd1f7ce316c6bec41c2bb": "b5730654fc10a7ee3880b22b29ccbe08",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/36997b67e320f580014350bc4b5151dc2135c5": "7b831463d9cd36262c3650efefe0d6b8",
".git/objects/90/06c1b41ee2abba881c7d4c7a2a95822c59fa21": "9aaf65414735bbba61d235074a1d7e67",
".git/objects/91/6248aac51488153e0778db673db6eefba29266": "7ff3ae6f38e274cfa352e4b32404d8d0",
".git/objects/92/5a3c2085632cc9abffc739a8b13448c53d30c0": "8ef1b86c463968416bbbbff6f295424b",
".git/objects/96/979984e2188b4c721d36e34dca7de82396f5b2": "da15755298a174943c7c8c74c7ca0cde",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/dc0512bf8a197e236b9bd90f92af58b02a84e2": "652f28ef27b7984148fb33254c1d4f3f",
".git/objects/a0/7f432c5af2b1c54f9a9f962ebb74a2d0167487": "3fdc2382babc6e057b3fb3469be2fba1",
".git/objects/a0/bf52ad9abdda09ba68aebd74ad6387c59971c3": "a5d730c3551c2259fe4a9db25d14874d",
".git/objects/a4/f46d5c65a544de8606a98d88cc0f0cc65b2eec": "d0143b4ccaa7abd77d7fa2bbbd343b5d",
".git/objects/a6/f98dc6aba45d21c1dd30a91e1fdedf7f7def1a": "d548f70e198519258a77eb6eb012c47c",
".git/objects/ab/3ae9670bc02877561bffd31f9ed2b1cd223a97": "fae2a1c1fdd92913260bfa88cf097d28",
".git/objects/ae/71ba92a03b5bde1c477dd3cb4cb5315c28ff3a": "5cee11eb6dac8ac121c5b6f5fee5347b",
".git/objects/b2/3b910524e9ad10004c7173208dece8f89e43f7": "4338353a7f333b46764e0a0847cab698",
".git/objects/b3/d276417271086d5e5242ab07a368d5a6bc68a9": "26b8c06f1ae9e683bd7550a313b7f029",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/060875c6e5a58b1c8bc5804908738fc8a9349d": "6b82e7643df08d0a0574b0bec0c08340",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/0fc9eb1a5c1ce199f02a4211938ce7e2e913fd": "1103e41b567d0ff1e27afe090496f30a",
".git/objects/c9/7e9a663081f4063c41e5d51300b024efebfa4c": "2fb4bfff05064d7bec97f51e7be05a90",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/395a0ab38d6209920131c86bc2804fee0de241": "1c2812fe970bfbb0d30a1329d5ad2ff8",
".git/objects/cd/5c9615c769b2529898aab95bef976e1502b06f": "9da939d68ecc36bb0e8144075d02986f",
".git/objects/ce/16bc7e33fd66b5c8254f3bf2114217ece67465": "2946007bb1597647fc21e76f54eeae0a",
".git/objects/d1/0f02314da0f2735d877356cef94599556e1243": "501dfa7dc11e82a6c6d677838ec8a900",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/dc/c4a0cff01e17025e54345be76508d0ad0ce931": "12eaef62f7b0cbb09bcbb57a357b4515",
".git/objects/e2/7e04718228191751069b6ac11244809b341cc4": "ab80cdd3138077cb11a706efe3330f87",
".git/objects/e7/1cfba2eace0354ff670f403ce89c5265541f9d": "a77f3bdd241e59ae7366537d9a6f2231",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/29d4150534d399e066761591d736f92dbc51f3": "1b3fb580b42545d24c760f8bf4c14bec",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/3b053beb45a0deadf5432d8f2d530565916a83": "53073a16bdb0f92d296fd210e7b4fdf7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5e1c8d43a8afad8c6b67baa35f6ca0d92349af": "33dd0943f8e2d760914e26da0b45631e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/770ec1c6490d8a2a242ad639a4aae12a305620": "59409887af4be77d60fe0819e3d89f8f",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/c88675b57ed379bf7832235607a97a59656ffc": "86e1cd0f99c3348d44e87c9e301daebd",
".git/refs/heads/main": "bc8a2afb24fa2210a3864b1a7202ed47",
".git/refs/remotes/origin/main": "bc8a2afb24fa2210a3864b1a7202ed47",
"assets/AssetManifest.bin": "438ec69ae5258692b0fbc7993f79da3e",
"assets/AssetManifest.bin.json": "7b1cc9b68cece980ea88d7ac0ef2e409",
"assets/AssetManifest.json": "55b0f1d4e2676e32ca68a05ba1ee98db",
"assets/assets/images/logo.png": "cbca05babcbedf7ce6f00fdc61d22bb0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "828725443f4f905825c5a36ea2448777",
"assets/NOTICES": "4e50d7d78662c51fd5b036dd6384adf1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "41d13426a2173f31dc5380bc82847cb1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1df9c54581be9e24161a607c1d016de6",
"/": "1df9c54581be9e24161a607c1d016de6",
"main.dart.js": "8e4f840e1c6e7f5d37c6ea9183d1c37b",
"manifest.json": "4a7721f7914e767007ff592ff905b3bc",
"README.md": "32772d30698ce3717af17b749baa9da4",
"version.json": "992a448ec4dce41707571847592d208e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
