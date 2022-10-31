'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "11005cfe498e8321b1a2fb166559ccaa",
"favicon.ico": "9cb4b488bd5004e996697f574712d583",
"index.html": "c09d366006fac6f32a5444c496664dcf",
"/": "c09d366006fac6f32a5444c496664dcf",
"main.dart.js": "c6a6110e71b7d7f41a4d6e80b5ca69c5",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "2164bf4f0ccd999e30330adbca0f6be7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bae4995ea560df27b15aaedd9940c461",
".git/ORIG_HEAD": "9e7a240078c6c4cd470c6e7e9b18be78",
".git/config": "413dd7cc6bab64983871e4a6da047249",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/0d/79827cff951f17129d308a411c68e0961662f5": "bfe2e1bce177661e817b3d314126ef37",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/e822f23e483d3a4e789ee5e84a1dad2ea5a6d5": "b8cfb98e584471266831ec03641c8f61",
".git/objects/92/be9ceeac7cbd0346f59b9fbaff621d4ac7b6f2": "fd306bf0835619b2aeebbec4cd7c6f3d",
".git/objects/0c/84a53368bb2f12a89654f3072673bc4bf46c97": "f03cdb9fb72e991f5b8b7c07612e5608",
".git/objects/57/191ece902bdb9ab5e4a1906bd9a2e15769de26": "482ae803594044a04f6968810e6711de",
".git/objects/6f/637fea371e563cbd631928a41fbe5863709311": "2800e4482345ca82f03b0f7fdf5ab09e",
".git/objects/03/7b88ad636103d1d58657ca2d961199f8176240": "0df09087055c44e43baf119e661f8a4e",
".git/objects/03/a2ce6942a193afcde56ee8e29d6cb67593fb1c": "2dffa6eecf660eb4b0857e082bd79f24",
".git/objects/03/70c961c2c5bc69b703e33dede29d1cd230f473": "af532398c1b7d17530aa0cc0129c3eba",
".git/objects/9b/ae47e39564b35ccd97706ee3fa11ad5abaf9c1": "113168e79a6718c102d4a618a13a0290",
".git/objects/04/2c983d2410b03ef1c6404e00eb0071b4e63488": "842a28c45980a2fe5ad45be4a973022d",
".git/objects/6a/5569c34f411cdcfa3b3eb4f5172485fce88f84": "e7298cd6af1b1c9c6516f95410cb0803",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/51/b0dc342e1db0f756cf02e20002ffdba4acdfaa": "a25ac6c4d710c0345d5db18070457eb5",
".git/objects/58/e1137e10c03721d8813586943c36b176c6280e": "196c40766f612d04996f46572ae791ba",
".git/objects/94/26449a12c57672b1f1bd83c4c9018a271f243e": "8176b5f46d790dc91a23b2a82f196d47",
".git/objects/0e/e96b13b432ddad2b134a5dd40773a0e9adce1e": "6810f7ba251eac40960ad25e8e4af172",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/33/309a6c4e11181d1991bb33773cbdf8d8778b95": "2e7c317f665a5f43c9d3d8c24a34a1b1",
".git/objects/05/6701aed432bfda5c5820f7804663e986a64df9": "fb4170051966118da5a673f51cfb7fbd",
".git/objects/05/734e8c2537e19895b9db41b6027236d27fb6b3": "98e1cd5cecf2e5cf9a78c2719498264c",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/a3/9485843c938afc72fd4668726fd93dd70d1023": "6bad4882fa15c83afc47f9f29f54914b",
".git/objects/a3/4fe3409b6990f3b5f563fccab82e9d1d124990": "37dd7962a93ae70947ddaa13bd4575b1",
".git/objects/b5/0a21c7eba05c017fc69aaf183c92aa4026cc8f": "bf2644ca75f8cd1886970e630a1118ef",
".git/objects/b2/f641eed87e71036e9c472bce968692152a5a41": "7c532ae1f73caeef771e3102314f4062",
".git/objects/d9/c50d3976251a6ad3944a46c3422c384c900bb8": "950cc0b725e80dfde90ab873afa1aa08",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/13be99594829cf8301906bbc234030c933f448": "3e7d6387d18ad2f9e11a655aa8de252a",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/32ac947ccd343a8f73f3cf8c6299c39e9cef4a": "c0cc81e2a15872b33af8ff9579a54869",
".git/objects/df/339f3c19d082a34145a4de300b254000b32ebc": "267d4ceafda7f8dcd75d9e7785243e46",
".git/objects/bd/3be7ae889e477e8849fa144e0c12f2b7fcab98": "7bcdfac88383e3a088e7cb2778c301ab",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/248592caa3bf5b6ccff8aa3b1b6e78e2b7b3dc": "876e5974c94bc0c30fd293e1ea96aadf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/bc/bfa702e626b79d32d8903f1ad4f776a7cd7951": "a87c84af458dd0e206525b6da974eba1",
".git/objects/ae/1a2b366806c0e3a64a16c204d73b71f42b0ad0": "9eb62bd2b534cdf6316c5a4b5ae2b06e",
".git/objects/ae/6a9fda99013c1e9610fca7c8bed86da3fa3a03": "33ab410ee9a8345e80924aed557f4ef8",
".git/objects/d8/d858d9b52763666dd0727c3e9933de031a2287": "b5e070c1f2276eb477232481a591df6a",
".git/objects/e5/f76283e6bda1c64304942e95e8f7ea72704b1e": "e3d15b704ef834d26b66283a79c1a4a6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/5ae8da7521f0d941916b676813a2e8402049b8": "65e1b2008371649fefcd038410759f44",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/1e52a7cff0a25a2fd006d72fd322190c95cacb": "239baccbfd3a003b88afd6ce5ac15eda",
".git/objects/c7/aed763e5e6f07092a7d966e754bb3c92660c9c": "045d52ec0858f1709836a320280de3c2",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c0/22a834ae1e42e4333ef0ee7cda8d40a3b99642": "2688aa795cfae27977cb90cf3787d140",
".git/objects/ee/06cee7cf1aa67f4737809d717e2be909e67404": "46933ac2ed0aa871fa5b699fbf35ae7d",
".git/objects/ee/f93449fcd5bbd3ae2fd16a997259cbab5a81dd": "9bf1a433938dd9dd09a9181de9c21b63",
".git/objects/ee/140f3bd022d569abaa59b4c8480755d4486255": "097c35f660dd72ca414a54da033ed5ec",
".git/objects/c9/984d8b4d46dd44be9eb9f13ff1228465707472": "77d1e1ef9cf745522df293100922ac71",
".git/objects/fc/0455b3e6dbfa580835109309e0245f10cdeb46": "57ea087a5c68b6bde452fb9bc743ceba",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/f5/8560598b7eb7eb826afd4e2166ab370a1f94b3": "7a6d80f4d7cf9252376903cc3cd8b35d",
".git/objects/f5/60a8826c47d31b391aac0cf36a33c81f059787": "6c363a5c2f017a8f21f34d3972498be8",
".git/objects/e3/b5afe59337a2b2b9484c4001ac2506eed38a57": "b814f50001ec23e212f3379574edd604",
".git/objects/ca/61a0f2f80831d8b68239ceccee5858723dfb9f": "83c03d025ddbc10658d188b17c679f2e",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/ed/646d36682b71168c3ba71bf8cfffb87c47d7ed": "87ec4d03a0cdac9a641eccdcfc6dd82b",
".git/objects/c1/32a892828ab4999bb3845ca0f07725cbd49156": "02aa0f1fd8ec13ab97d6c0d61fa038c9",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/a0d9ba8f2b39c1b77269f1bfe6b96c5aa052ec": "0022001983421c4d77c863b56399fc82",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/ec/2cdc3032dbcfd8ef7936f627d24d8fdc2f9003": "f14d98f173aaf4b363fb32d2995d6eec",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/7fae957d4ed9b573892d8c8fdef5d5ce011721": "ed635a2f0684b1ee59f2a1c5f35dac97",
".git/objects/4b/6f4ea3064c9adcabae06f96fb3f7e5167774ac": "da612c0fb6f31ed4362d935fcd4a8115",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/26710535587686c684d2a1bc3081d491758342": "f31fe57541f31407404c5e5c6aa429d7",
".git/objects/11/89d398a7d12bd46fbceed285b807e95c42b5d9": "bdce518102cc70fb4dba1e0a39599fc5",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/42/c770ef05353954fceb7c00d304c5dab8663e93": "f0fada6b95b2ec6d709c11fa88a20b9e",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/45/f0c6804a0afc12589d050f017653100e65aa66": "1cc34b328a67484a52680913b1db98ec",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/1a/522b5095bb0f4f867d8d6f4038a8966c24e88d": "b027dbe855190500bd85e6dbacea32d0",
".git/objects/1a/d5e784548e49c117a8b49774576341af665967": "4cfdfeb1c978dc956bdb8b3c80eae888",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/19/56eb544a0e63eac46c44415103f9c6e70c29f4": "1e454217f7d4f7297756cfff189b49a0",
".git/objects/21/3ab088a2031b08ee6a7411bbcc3b9e0c4c3f83": "e77a628f09332945077ae1317d23efe2",
".git/objects/4d/b7fe45118abcd174dba7a7eabc6af7163d53be": "c74b7c40201cd2cb5aa9bdcb1dbe030c",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/81/d2f3c3ec630dd71c852a69e690f771207a7e66": "f219ccab06bf18147860a7bdc08ff303",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/44/d3d18159a409e2915e336cf58334e3e01d5803": "a2810dc87fe3b0cd096878bf537b0528",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/cebd1c9786cf4e50b6c37d46de764f05a6d22e": "1dec76893c4e978e0d0cd286e953d4c5",
".git/objects/6b/169c239fdfa0124abe53bfc21ddacf2d8c4f1b": "da340f19e0730a8d6442d554faf977c3",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/62/74bb1859cbd95aad899a5fefcf430ace9a4a4c": "2bae55106ac3b830bb0c369fa9fb6c32",
".git/objects/3a/ea22aceadd43e20cbf0661fa09a08a93268530": "2227ba351d7e5abe91d91b0d27fb01ba",
".git/objects/98/3cb012d23e09865bf7beda629c9b5a27ee775e": "ffe8a9fa05021f90d048c34f19b5a53d",
".git/objects/3f/a1331ca348eb9558ae32a8d009b4f4eaa2a827": "50c9b31a0a670c5457bd66b050df1b59",
".git/objects/08/ffb5ec6bd0842cac17507972a23b0e117ef626": "7a6c0fabaeb9b5f78ed0f2ee23536dff",
".git/objects/99/a2bd9e7f2fffb9b0e6469633ed881a131f3d73": "defba1483a527cd2665fccd6946ba2e5",
".git/objects/52/f5cd02eb370c710f4fa5aaeb462f265949ffca": "0d92b76cbcb589da56afeb6d4517190e",
".git/objects/55/21d2732dfc2d8048492ea260015caa51e8cd7a": "fafd5bc50776b07fbc9f84d5f04713e6",
".git/objects/0a/159774e0d9639111ce78cdafcfad1af515ad80": "13d043b230e944d2ea8bb66088d2e37f",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/b8/7c9e8992edc8f741f59544c88f96e98f780b26": "2d56502ab4d166c4f35062b9b9744c99",
".git/objects/b6/747508e65223298ee72bbc04811ced4b6d87e0": "17fc83f8903bec703b3daa7fb486bee6",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/af/eca9d9514c391bf4c5cd7ee223e53e69b0f544": "ad9f68dd06f64625306cde4da28f4842",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cc8f79527171af368ffb35ff7cfb1f383e16bb": "702fee61d8f4316980858f98bbebf984",
".git/objects/a8/4d2a457b55b8bc1ad96e66a077109149e2a011": "c68985e2454c474c99bbb11685dbe34a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/98cf9b74babf321794a6372d1158675783756d": "c3c7f2e29fb580f8bcd0156597b28881",
".git/objects/b0/cd3c3deae50233b18d753df945ed7c2a7bd27a": "d3a4e5a97e1d57091d0053f8b6b88843",
".git/objects/b0/fb5650340b28079c80e340a85a7edfc68dbf03": "2ea891323cb9c98682fbd2bfaf824e20",
".git/objects/b0/614034ad3a95e4ae9f53c2b015eeb3e8d68bde": "7ac75a1205d6369de21c8c4b5e901c5f",
".git/objects/a6/a14e108e0f3cbdde124b418ec82d1a63dbb352": "2e16f294065ffd759b2f874ba71fbb96",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/52af202a60e92c4eb84ac3e8e73ac09a39880e": "22d1edd2a1e5ec8db0d0e7c1af18007d",
".git/objects/a1/50ea7e267699b21406d656a8b77214d6365d32": "c3b23b4141781c9ae72407a47a5df9b9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/3ccb4484f1fa625619192998c412c4bface2db": "dc1b9ce40d9a33070c709166b4ddef93",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/26b232afe1eace31b099a46a803a3739aeffec": "4a0a544e2c32fbe3fb8fdfd96e1fcc93",
".git/objects/cd/d3ca83e338a5e8fd830f47433f2b5706b1cb9e": "b485fabff201e23cd4abfdd4783344b0",
".git/objects/cd/17a54e22a27e8b27e156255a4b5bdfb909e5aa": "716b901b4ceed812381545ad984afc8a",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/e67639f9bd2086727343f291d63155f595f45d": "c5a66519dcd2460e104fc3478063fd5b",
".git/objects/cc/3f8b00729b3a90c645b74ade1f77e13e584a12": "9bada81926a6297aa0872bcf7a54adc1",
".git/objects/f0/cdb1f9eeacf79a2652d8bd3cdcf89cd7c57e6a": "e77d6d3053a9b4631f94246e27b680a6",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/c2/aa8cfe981be94ac1703d8648280d9c35530542": "e74e4bb578239de6e9350072c211621b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/e9098ae88372efcd369296281927653264caf0": "afa4be4cfe4331d9cb9a84bff4b5d203",
".git/objects/e7/68fcf7bbf08a93afea3c0ac6bdec7b229cc12e": "5d2a2eae8a85d182650096717e437530",
".git/objects/cb/3be59a127b78fa054c163be2926ed84cd2887e": "e79c69722d7ae32ebe6c3c549d0e3cc0",
".git/objects/cb/9c521d26a57a65ebaef4d6b52c1339fdb13918": "d0e79b33b9247382f5bcc6c76028bb58",
".git/objects/e0/ae627170f076854179b87674a7c5cba5c3a7e0": "5899aa6f7804f628ed887c2123e97d43",
".git/objects/e0/444b2aa9efe2a9afb87b8a6ae5f02d324bb2f7": "706df4a3d065471b148a4453de2b8a68",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/de161fa74e864f68f03ccc5ffeefa56ab0166b": "3758e8e48f4dca56502643ffd63162c6",
".git/objects/83/fb838629d7132ac66337c8746cc948b914746a": "8d1fd61c2ab18c98b4d62ddef36a277b",
".git/objects/83/c9ae5611d7ae37a2df4fc23fcdce3737e31891": "9e953251ed742d0077d493790bd1ada9",
".git/objects/48/c236fb815eefcd760010a6f3f6f9c6bf57dc5a": "02cb0e54c5c1c10b8de913203f1e34e4",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/1e/55a211feb52cfbc38e87bfcbf6d30e6fe9e40b": "a5113d9093b8c17b1e17cfa3ce32b7c2",
".git/objects/84/510e738ff33d1c2f6947cd857739aa944fb2ab": "c9f448214bb0b625672f11781c8a173d",
".git/objects/84/40c6ae6bb50b2c17047c703956698fc427ba38": "6a5b820ba9c236679e7e47c354481833",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/24/a363cce60c03db0fa631ac7170715075412c09": "a4bdefe3ab9cd0ab7960d88b3c34bf60",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/8c/fea55623e63d7782080b195441df1668852fb2": "f04a3febdee7b9f085fb192e3db5e9cd",
".git/objects/1d/1187651bde0a565de2c0754a112809f2c4aebf": "a113992ba4adcd2c8f6f0b51c8a0efa0",
".git/objects/71/5e7ff83b5b929e090b3e8ab1cba941a9b63c4e": "d1a5287a14d051e168e9fe806c17b7d0",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/49/a2cf2362766f8db4cbd7800cf2bddc58d586de": "dbf000d86ecaa0cd1a9a58eb1f5963c0",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/78/2841bc84426f396e88d56a23621e9edb08db04": "012379306dc0799ff04a074362928718",
".git/objects/7a/b771611cbebd0eda5a3d83d4853b34265be9c4": "ec54e94a87ef1723957d2f3983e9eb81",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/14/a1c64036635b2a8dc1d095a08d5d2c8c6bd2ae": "a8640d19849e6bc4e4df2ca5da78e532",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/25/cf7d98692b4a33e67b86df4095c6104496744c": "a8e38fed8ab7ab28c382691773688cd9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8efe1ca55f55845fa1ef141978a7015b",
".git/logs/refs/heads/main": "d60448623a29d4f0f438844a022a4fa8",
".git/logs/refs/remotes/origin/main": "6ae97baa78eeec5828db8e762b9d186f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d24c771adcf7e8869ebfb4d8dd99d44f",
".git/refs/remotes/origin/main": "d24c771adcf7e8869ebfb4d8dd99d44f",
".git/index": "36126bf01d24b6b1d31ac69ae01a1d84",
".git/COMMIT_EDITMSG": "30341cb452aa8a375726b5fa2df04389",
".git/FETCH_HEAD": "b1061e88eb19ba2d679af0c856520a07",
"assets/asset/images/app_logo_square.png": "cf270752a708fd334eab0a9e041e11b9",
"assets/asset/images/splash.png": "1535a0f065089e11bb1534c5d52c2976",
"assets/asset/images/app_logo.png": "3868d4224f6b6d6e56ae67b40eef4499",
"assets/asset/images/notification_badge.png": "d9cdcf4ef0dfc55663385841ca3b9924",
"assets/asset/svgs/Shape.svg": "c530c76cc5cf3e86f308758804f3b645",
"assets/asset/svgs/open_component.svg": "bb67324d6aa64a16adabe9c5c2e7c99b",
"assets/asset/svgs/lock.svg": "589c5a124a43b0793248f2605618f87a",
"assets/asset/svgs/mail.svg": "c9f338890151207e803af9d20e7c1860",
"assets/asset/svgs/due%2520_component.svg": "b80b56fd6f5359575a55e574902d4a53",
"assets/asset/svgs/app.svg": "8474bc953817955ec023726236b1a470",
"assets/asset/svgs/delayed_component.svg": "d8c1f33a49cb6fe6ca4968b9f8627b6f",
"assets/asset/svgs/completed_component.svg": "b9d48e1ef7122c485d9ed4d93e623d80",
"assets/asset/svgs/LinkedIn.svg": "31bd5183f5f4913e90d5b251f65bd9bd",
"assets/asset/svgs/Twitter.svg": "467adca6bc01b3e597ac1ddc6c9e4116",
"assets/asset/sounds/clap.wav": "eb0c85255fa8f6ba2142a90154786899",
"assets/asset/lottie_animations/loader.json": "181d7f4005fbc9845a483ef41d349ac3",
"assets/asset/icons/info_icon.svg": "ae223963d58c27aef3e7e1e21b733195",
"assets/asset/icons/add_image_task_icon.svg": "b9d841c456de40bd00a4cd8cc8c5db6d",
"assets/asset/icons/hamburger.svg": "9022a54d3cb7190f20ac07b5e4af94cd",
"assets/asset/icons/backlog.svg": "d2e08cead3204946c4690b0739b8430e",
"assets/asset/icons/due-time.svg": "329e10f93c10a109ffdfd13c64bfb872",
"assets/asset/icons/home.svg": "3fc6b042755e5fe972593ae973cf4708",
"assets/asset/icons/Logout.svg": "506f2655d5830ab0c25f8d1fdfa7240c",
"assets/asset/icons/forward_arrow.svg": "8cfda1f05342a144cd92e9fd93b623af",
"assets/asset/icons/change-stage.svg": "5491ee007e5103b49f31aeed45c7a98b",
"assets/asset/icons/check_icon.svg": "f2bd73b2b9e8b7f71a73e2944a2f7ab9",
"assets/asset/icons/user-light.svg": "c81245488aa1d94c25dae5915b1d5e6b",
"assets/asset/icons/grid-2-light.svg": "f31d966354ce71d8cab0533ba102d8e8",
"assets/asset/icons/Work.svg": "0c5af59a93c5c5f5f0fca28ed1735aeb",
"assets/asset/icons/more_icon.svg": "9066acd23e216c731c836c85a00e4352",
"assets/asset/icons/calling.svg": "27de6ef5b4dccddd709523e1d758c6d0",
"assets/asset/icons/change-owner.svg": "ab51cd15a9d49cc91665c9107815ef16",
"assets/asset/icons/rectangle-list-light.svg": "3f96bc45cfe221c735f2ad7d40b4b4e4",
"assets/asset/icons/notification.svg": "b8cd8f46ba152b76184c60bf4a14b59b",
"assets/asset/icons/whatsapp.svg": "c45df616ed13f1df0839e87c3704555d",
"assets/asset/icons/line.svg": "4a92040657fb2fdb65f6a8aa959d6699",
"assets/asset/icons/attachment.svg": "701764ef2a67637e5819f743411211e5",
"assets/asset/icons/checked_box.svg": "ff786ba3bca13ab0bb3605b56c336bfc",
"assets/asset/icons/date_icon.svg": "9151717ba6dc93695be13f538c631cbd",
"assets/asset/icons/notes_icon_solid.svg": "f1ba2dc65678c97ca44314b20829e7e6",
"assets/asset/icons/back_button.svg": "ad9f942d1a2090b08725ae147f9dc608",
"assets/asset/icons/login_icon.svg": "40838a029c7ee9bf39def7352835ecf4",
"assets/asset/icons/user_icon.svg": "d4043924b488c378b98963e134b53cb3",
"assets/asset/icons/filter.svg": "b773e7028be18889a04cd51760034930",
"assets/asset/icons/remark_icon.svg": "1c08ad0abfce15bd4c8b70fdca947b0b",
"assets/asset/icons/calendar.svg": "9151717ba6dc93695be13f538c631cbd",
"assets/asset/icons/blog.svg": "3e15f6684337e23fec0717544990ad70",
"assets/asset/icons/error.svg": "e718d88362f06bd68f476d10610b9dcf",
"assets/asset/icons/upload.svg": "225c675a99eacea970f70845ca943d12",
"assets/asset/icons/filters-light.svg": "e26639ea057a8738ea724215424fd928",
"assets/asset/icons/notes_icon.svg": "a288b9e02c33fce22d78ce5cf8489b0c",
"assets/asset/icons/add_general_task_icon.svg": "90b7bb49b02a34663b924cb638110038",
"assets/asset/fonts/Avenir/Avenir.ttf": "bdf471713ee7dec3e19576abe39ee749",
"assets/AssetManifest.json": "5729aad7708efb45b6993b5b286101c4",
"assets/NOTICES": "8e2f1e02c7a13bd37bd4abd26393520d",
"assets/FontManifest.json": "44634b7424b8c52bfa12c20c68501091",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
