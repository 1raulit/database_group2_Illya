/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "da0ed7576e8d2acfb19d93d66839bb08"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.0e67b689.css",
    "revision": "3b1e5db1c3c1e0001f417ba5531ad373"
  },
  {
    "url": "assets/img/add_datafile_id4.34881217.png",
    "revision": "34881217c306dea43e2596c25cceeeaf"
  },
  {
    "url": "assets/img/delete_datafile_id2_result.a7f4f4ea.png",
    "revision": "a7f4f4ea7e56f62f5f4020fd053b2ad0"
  },
  {
    "url": "assets/img/delete_datafile_id2.d4ccc4b6.png",
    "revision": "d4ccc4b6c40daa7d0b86f823afa8c733"
  },
  {
    "url": "assets/img/get_all_datafiles_result.81e473d6.png",
    "revision": "81e473d6e5566aebc7e9f10262f0d000"
  },
  {
    "url": "assets/img/get_all_datafiles.91ad2dc0.png",
    "revision": "91ad2dc05d0008ce17dcbeb417a84772"
  },
  {
    "url": "assets/img/get_all_updated_datafiles_result.67b47152.png",
    "revision": "67b471521cc0a5a9ca65dfb6fc68635e"
  },
  {
    "url": "assets/img/get_all_updated_datafiles.d3f6f682.png",
    "revision": "d3f6f682d9a09912d26a70e3a2d249ee"
  },
  {
    "url": "assets/img/get_datafile_by_id_result.953d366b.png",
    "revision": "953d366b2722e17c1bf15f8dad3d89ee"
  },
  {
    "url": "assets/img/get_datafile_by_id.69de797a.png",
    "revision": "69de797a1fabd12ab79e741cc8f3ea98"
  },
  {
    "url": "assets/img/get_datafile_id4_result.aeaaabed.png",
    "revision": "aeaaabed929437651d49361852474898"
  },
  {
    "url": "assets/img/get_datafile_id4.bdc5b041.png",
    "revision": "bdc5b0417ca4faed5cc784c821c578eb"
  },
  {
    "url": "assets/img/get_updated_datafile_id4_result.2c2f9ac6.png",
    "revision": "2c2f9ac617868ec8b1390a8cdaef5c9a"
  },
  {
    "url": "assets/img/get_updated_datafile_id4.10df1bed.png",
    "revision": "10df1bedd3aa517374f3c13561929d24"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/server_start.907beb14.png",
    "revision": "907beb143d9be6e16fdea56cd9d859bc"
  },
  {
    "url": "assets/img/Shema.b32c2104.png",
    "revision": "b32c2104c309d360a83d183b6c91e325"
  },
  {
    "url": "assets/img/update_datafile_id4_result.9482414c.png",
    "revision": "9482414cad9be634016f02e718e6458c"
  },
  {
    "url": "assets/img/update_datafile_id4.11c70feb.png",
    "revision": "11c70feb1408a57995b67604c29587f3"
  },
  {
    "url": "assets/js/10.e1273895.js",
    "revision": "9d9d293cdd1d8bbbc4485a4173518689"
  },
  {
    "url": "assets/js/11.be4bd6c2.js",
    "revision": "9eb56cb4328fdf7b3b5720e1fe3f60c6"
  },
  {
    "url": "assets/js/12.70c24ba1.js",
    "revision": "b1c6f64a43140d2e63312895ebe0a483"
  },
  {
    "url": "assets/js/13.a9b1b239.js",
    "revision": "a1391e034fef4bdda76731f42cdc6e20"
  },
  {
    "url": "assets/js/14.964b466c.js",
    "revision": "70e2a57777d21dde9d07160140d4e156"
  },
  {
    "url": "assets/js/15.da78077e.js",
    "revision": "79690cb2d6b3c27f55f75cfbe8486ec4"
  },
  {
    "url": "assets/js/16.129affc0.js",
    "revision": "736b18fb7cfad7aae039e7cf814221e7"
  },
  {
    "url": "assets/js/17.b76dd84e.js",
    "revision": "b8e330c4ba35e3d5bf7ea6976019ec12"
  },
  {
    "url": "assets/js/18.91b08599.js",
    "revision": "c8f94d64bbd9a0ebc69ffbfaa00924ed"
  },
  {
    "url": "assets/js/19.b0c97371.js",
    "revision": "a5ac429eb1f1e0fee87185fde20e7123"
  },
  {
    "url": "assets/js/2.0a5cd992.js",
    "revision": "4a788ed2ec3bb40852a4cdeed12e52f6"
  },
  {
    "url": "assets/js/20.2df80867.js",
    "revision": "b0d8ea0d9eb33d7b0699e953aefbb497"
  },
  {
    "url": "assets/js/21.c3b6d751.js",
    "revision": "ba1e677f023597945201a9d20ba99a45"
  },
  {
    "url": "assets/js/22.8752164a.js",
    "revision": "118f02e2ee29c9e551dbcfff248ba149"
  },
  {
    "url": "assets/js/23.72c52484.js",
    "revision": "67aff2b8b9243e32c360e8280e4d8c55"
  },
  {
    "url": "assets/js/24.995e1756.js",
    "revision": "a1abea6b7579ebf43186d92a50bd773a"
  },
  {
    "url": "assets/js/26.b038f0f8.js",
    "revision": "3cd3fa2cd5856af626304a2e0bc91950"
  },
  {
    "url": "assets/js/3.9576adde.js",
    "revision": "1516cc83c6ed6c35cbadaacdcdc7f893"
  },
  {
    "url": "assets/js/4.a6bb0f88.js",
    "revision": "8dbb81d335ab579ccc62b2f9d4e48276"
  },
  {
    "url": "assets/js/5.e5c73bc2.js",
    "revision": "6e9dc463d419debcb226ca15a1956da4"
  },
  {
    "url": "assets/js/6.a686ffc5.js",
    "revision": "9a54e5d721c4c3303c758866399c6ef0"
  },
  {
    "url": "assets/js/7.4b40673a.js",
    "revision": "85e7959873e23d249778893171bc5598"
  },
  {
    "url": "assets/js/8.5ec70271.js",
    "revision": "8dd03f848535124ab797932c03bafea2"
  },
  {
    "url": "assets/js/9.78ec9992.js",
    "revision": "d6fb10b59c593ff1ce1cf846714da527"
  },
  {
    "url": "assets/js/app.9a6d9b6e.js",
    "revision": "deaf1297c001e640f105a6317f1631e0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0cc0dbb744d6fb3982cd6f3be4633484"
  },
  {
    "url": "design/index.html",
    "revision": "120440cf5637453d594624386ed719a6"
  },
  {
    "url": "index.html",
    "revision": "20145f9b410d90739f145a0679daba9e"
  },
  {
    "url": "intro/index.html",
    "revision": "dcea4d005f69096b6f1acbb76c4e88f9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d9e02ef792ccb5ee85fbc792cbea299b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "731d48eed886b1929518496810cbfcfb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "62f5cf1192e2b5f38a939321ecb9d10a"
  },
  {
    "url": "software/index.html",
    "revision": "6c1703e3def1ee733697010937b5633f"
  },
  {
    "url": "test/index.html",
    "revision": "c730ac322f198f0868642ca57343f19e"
  },
  {
    "url": "use cases/index.html",
    "revision": "87d10fefaf78bfc7640992ea4780d804"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
