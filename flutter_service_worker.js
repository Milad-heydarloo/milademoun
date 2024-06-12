'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "06f1abf2c4db81fcf425a2c041bad016",
"index.html": "50301578fc3b1b063d5a2c62419a48c1",
"/": "50301578fc3b1b063d5a2c62419a48c1",
"web.zip": "4f1bfa756a7e51975558cb1403ec3f7a",
"main.dart.js": "9bec9de1f16f522ba09fd3062ca608a6",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "65f278d1922d3879cdd50b0846e97f01",
"icons/Icon-192.png": "9b180c8a0f8617d9a3fb52cf147ad1d2",
"icons/Icon-maskable-192.png": "9b180c8a0f8617d9a3fb52cf147ad1d2",
"icons/Icon-maskable-512.png": "2a15f7a1040484f2efb26041331f0295",
"icons/Icon-512.png": "2a15f7a1040484f2efb26041331f0295",
"manifest.json": "b643591c5dae9c9a31106dbd34ae077e",
"milademoun/version.json": "06f1abf2c4db81fcf425a2c041bad016",
"milademoun/index.html": "7fbc51aff7a3afe23d43b4c51ac19000",
"milademoun/main.dart.js": "9bec9de1f16f522ba09fd3062ca608a6",
"milademoun/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"milademoun/favicon.png": "65f278d1922d3879cdd50b0846e97f01",
"milademoun/icons/Icon-192.png": "9b180c8a0f8617d9a3fb52cf147ad1d2",
"milademoun/icons/Icon-maskable-192.png": "9b180c8a0f8617d9a3fb52cf147ad1d2",
"milademoun/icons/Icon-maskable-512.png": "2a15f7a1040484f2efb26041331f0295",
"milademoun/icons/Icon-512.png": "2a15f7a1040484f2efb26041331f0295",
"milademoun/manifest.json": "b643591c5dae9c9a31106dbd34ae077e",
"milademoun/.git/ORIG_HEAD": "60d5d218610805f74bb3a2485f839763",
"milademoun/.git/config": "dd888830780934c94c87afe528283ca6",
"milademoun/.git/objects/0d/7f31bc7e3815a9630d421494a7aa4c787b65dd": "5f6366acdd0d08a660d6f8736d9afd43",
"milademoun/.git/objects/3b/73f84b0daa9188131c634699424d29fb0a656c": "548c2bdb38c6a7d1fca06202698eb63b",
"milademoun/.git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
"milademoun/.git/objects/35/b8a04cb10d4fc02e2cc804bca161a44e72c4e5": "6a8cf1f1f00f83e722c96b3091a764f3",
"milademoun/.git/objects/35/3ee720ba5bd0230376eec7dd917b0dfcbe9db0": "e7c66b9a05ba235731518371f93f79fe",
"milademoun/.git/objects/0b/7eb8dc5458a3ce267045e3252d9fdc9f638e78": "3b32459213c36b6448516567a81adc40",
"milademoun/.git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
"milademoun/.git/objects/0e/1b1f387760bf087e53394558ae62541bb441d0": "e678b6cb7a48e80f2f6cc95478e7a647",
"milademoun/.git/objects/60/aa9c0cc52417a3ba738c2a5f705b4958706c91": "9608b2808fbdb2e1da68fcf8c8df0297",
"milademoun/.git/objects/60/bc2415a48b37eb701acd14400e199610044f62": "9dd15547c6cda721b148f885b2ab67d3",
"milademoun/.git/objects/33/4ae2d1a0d79c91a1946dcf1e5e6f01e2b7acc2": "7531d748c098da4ed74d135c2a829e5b",
"milademoun/.git/objects/05/e3b054642bedd0dba3a1716a6ac3c4f44532ad": "4c511919cd736878bf73b89101dfbc15",
"milademoun/.git/objects/a4/801ffee82bcf4677e7859219a39ba1a1bcb1ce": "bcb78b3ce6aec63f729118d094b1d496",
"milademoun/.git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
"milademoun/.git/objects/ad/38c07653da6fe94e5cb886679ef75e17c0188f": "80726375acd670bb232b019cc6855516",
"milademoun/.git/objects/d0/0e536a659ff325d05efa614e1b5d5b8c370ee0": "f4ee1c45f16b62f36202140b1fbb0852",
"milademoun/.git/objects/df/5044fb466fc3c6cf89fce554052f1ca040ddf9": "5045edf4a632cafddb71e7494e762de1",
"milademoun/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"milademoun/.git/objects/da/4ef7756b62fea13d401ba2769f72be97bfe65a": "a0e912d7c00006a6b0d18338c6e6aa59",
"milademoun/.git/objects/f3/4ff3a7dff78e8d6354942f0a4b630e04bc7384": "23f9e81ee15e1a1425b3c0129c105caf",
"milademoun/.git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
"milademoun/.git/objects/fc/ef65a467f00a6fd135f836db74cdfbf5de89f8": "96e226cced1d1a04bbef601e26000be6",
"milademoun/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"milademoun/.git/objects/f5/f8e80edbe167d7e34aeb7b46dd3a6c046ea8c9": "0c4f99849f4aee19488b3f15c8c173ad",
"milademoun/.git/objects/e4/0c83d8c51cee7b527b3547b4a6b63042837f9e": "43d40809b1f1957f0db2db496e71cb92",
"milademoun/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"milademoun/.git/objects/18/37049963e3e2b65515bd4b987caf8be0aef7af": "8a8b3d2f070449856acfaf7ba6c11d56",
"milademoun/.git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
"milademoun/.git/objects/89/c57a523381f2686348842a74d3cf1a3311b5c6": "9634e9abec16d4f7474aee47415fa5c6",
"milademoun/.git/objects/45/a384d9b7cdb09c1493e07cbb9b089f34570b93": "27baa204e48b0be226ba381b0ad02c9d",
"milademoun/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"milademoun/.git/objects/87/963070446e458c7bcbae42b82acc62e7a7d6c2": "8c01b06fa74c03e9ebefadc58b07bdc8",
"milademoun/.git/objects/87/bd1d971e5de3ba8b0e2f2e0f5610843f89fc44": "47db06c8f280f8665001d5f16e82226e",
"milademoun/.git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
"milademoun/.git/objects/86/1649edd37e626563e973e68ce226a1421d090a": "c439ddd60332d25d313f66383e047b09",
"milademoun/.git/objects/2f/200fc442032cdc95bb2177752bd09cc638c27d": "bcea9572c9141187a0fb83ba1b7081a0",
"milademoun/.git/objects/43/b0eb7a4c4092f49968154c532004374ca26ea5": "3a0f162bf32150df1d05fa5a337a7771",
"milademoun/.git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
"milademoun/.git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
"milademoun/.git/objects/9f/b77e2475bf48115c1f30805a6afdf83358a80d": "5dfebff3495a120f5a1544c48bf95b1c",
"milademoun/.git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
"milademoun/.git/objects/38/182ac113018015e2befeb9d9edc4cafb6427e6": "cf1875d5eb59ee4253675d34ee8fc647",
"milademoun/.git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
"milademoun/.git/objects/36/07db5b1e7fcb8bd672c549dba3f74c2d1c5a47": "a2ffceed064527ec8d3d4e2866b09503",
"milademoun/.git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
"milademoun/.git/objects/53/52cb25928b563da3d090bf8e437bf1a666a030": "796ca23d140f2cfe041206e0e99e068a",
"milademoun/.git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
"milademoun/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"milademoun/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"milademoun/.git/objects/dd/6f355d819b8f240fa8fd4967b15402d7aaf922": "ebda4c6fa4c16285b1a906e4f2eccfcc",
"milademoun/.git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
"milademoun/.git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
"milademoun/.git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
"milademoun/.git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
"milademoun/.git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
"milademoun/.git/objects/ce/3edc092f71688607a7a09c2e7ef87c18f70c2e": "ceeda9c7253387e46e58425a2083fe26",
"milademoun/.git/objects/ce/4c14175f407b0f35051ed3902940d5160108c2": "865cc8bc339a9f98a4dad5952d64a1cb",
"milademoun/.git/objects/79/a4dbbc197036f0177cf011e9a5bbe260a91774": "23c9efeaaff85564fbd0c84e2fcb6fbe",
"milademoun/.git/objects/41/ee2a92b1a7a17d33cb89700e35c40d5f57e55f": "27842005e40dcc3a930b9da0c92570ae",
"milademoun/.git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
"milademoun/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"milademoun/.git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
"milademoun/.git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
"milademoun/.git/objects/49/488306e2464e43b1da1009b454c33ccfb6e238": "746b1b20155782b85b0447d3e60f05fd",
"milademoun/.git/objects/49/4c05760ebcab9a4dfe1ad946f2fd8ad0f98ce1": "7e00ee4fbe91bceef919d2eb65702878",
"milademoun/.git/objects/2b/a481ed93602c338e229e7a37bed2618c025317": "25146b2845f1ec8a7e5863c02d716d99",
"milademoun/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"milademoun/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"milademoun/.git/logs/HEAD": "acf7f8cba541c816c541ca36850befd5",
"milademoun/.git/logs/refs/heads/main": "acf7f8cba541c816c541ca36850befd5",
"milademoun/.git/logs/refs/remotes/origin/main": "37cbf6a33682dce9a0676aea673f6244",
"milademoun/.git/description": "3625382d16ac1140f1558e55153b1445",
"milademoun/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"milademoun/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"milademoun/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"milademoun/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"milademoun/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"milademoun/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"milademoun/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"milademoun/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"milademoun/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"milademoun/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"milademoun/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"milademoun/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"milademoun/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"milademoun/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"milademoun/.git/refs/heads/main": "60d5d218610805f74bb3a2485f839763",
"milademoun/.git/refs/remotes/origin/main": "60d5d218610805f74bb3a2485f839763",
"milademoun/.git/index": "3fc97dca821e788e29fbbf8700223a7e",
"milademoun/.git/COMMIT_EDITMSG": "4ff98467aa1a0b31e3e14c2940710244",
"milademoun/.git/FETCH_HEAD": "b3453b4c799a5c864f32561230b98a1b",
"milademoun/assets/AssetManifest.json": "9974deadac13aa91b3fc3f089fc9fe12",
"milademoun/assets/NOTICES": "46406101ff793ad56f361e70c22fa55e",
"milademoun/assets/FontManifest.json": "49596ae8dd73c5641e8c3922fc4091fb",
"milademoun/assets/AssetManifest.bin.json": "a9b71361efff5dd43a580f00d1de9a3f",
"milademoun/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"milademoun/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"milademoun/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"milademoun/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2b2b4c6537a6fb5feabf0e97909ecb3a",
"milademoun/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"milademoun/assets/AssetManifest.bin": "5bc8d0cecf12e2b544d92affef99e92f",
"milademoun/assets/fonts/MaterialIcons-Regular.otf": "7809869ac262e1e7db103e68aaad8e98",
"milademoun/assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"milademoun/assets/assets/images/dev_img.png": "07e8921ad79837217c54b2add34babe1",
"milademoun/assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"milademoun/assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"milademoun/assets/assets/images/portfolio_icon.jpeg": "115de290749203bd16e757c06ba8edf8",
"milademoun/assets/assets/fonts/vazir_fd_medium_wol.ttf": "5340bb6f45ae63ffea8b8be3e7da5d91",
"milademoun/assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"milademoun/assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"milademoun/assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"milademoun/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"milademoun/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"milademoun/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"milademoun/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"milademoun/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"milademoun/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"milademoun/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"milademoun/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"milademoun/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"milademoun/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"assets/AssetManifest.json": "9974deadac13aa91b3fc3f089fc9fe12",
"assets/NOTICES": "46406101ff793ad56f361e70c22fa55e",
"assets/FontManifest.json": "49596ae8dd73c5641e8c3922fc4091fb",
"assets/AssetManifest.bin.json": "a9b71361efff5dd43a580f00d1de9a3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2b2b4c6537a6fb5feabf0e97909ecb3a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5bc8d0cecf12e2b544d92affef99e92f",
"assets/fonts/MaterialIcons-Regular.otf": "7809869ac262e1e7db103e68aaad8e98",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/dev_img.png": "07e8921ad79837217c54b2add34babe1",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/portfolio_icon.jpeg": "115de290749203bd16e757c06ba8edf8",
"assets/assets/fonts/vazir_fd_medium_wol.ttf": "5340bb6f45ae63ffea8b8be3e7da5d91",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
