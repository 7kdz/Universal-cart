// productos.js
const PRODUCTOS = [
    /*
    
      {
        id: 1,
        nombre: '',
        precio: 1,
        categoria: '',
        imagen: '',
        link: ''
      }
    
    */
    {
        id: 1,
        nombre: 'Honda XR 190L',
        precio: 14000000,
        categoria: 'unknown',
        imagen: 'https://motos.honda.com.co/images/cms/xr-190l-abs-rojo.png',
        link: 'https://motos.honda.com.co/motos-honda/todo-terreno/XR-190L-20'
    },
    {
        id: 2,
        nombre: 'iPhone 17 Pro Max (512GB)',
        precio: 8200000,
        categoria: 'apple',
        imagen: 'https://mac-center.com/cdn/shop/files/IMG-18067860_m_jpeg_1_d4944749-fbd5-40f6-8768-b7fe47ec128e.jpg?v=1757469508&width=823',
        link: 'https://mac-center.com/products/iphone-17-pro-mfyu4lz-a'
    },
    {
        id: 3,
        nombre: 'Computador Portátil Gamer HP VICTUS 15.6" Fa2014la',
        precio: 2700000,
        categoria: 'unknown',
        imagen: 'https://www.ktronix.com/medias/198990788456-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyOTM5OHxpbWFnZS93ZWJwfGFEQTJMMmhrT0M4eE5URTFOek13T1Rrek1UVTFNQzh4T1RnNU9UQTNPRGcwTlRaZk1EQXhYemMxTUZkNE56VXdTQXxkNGNmMzY5NzRiNWUzNmIzMWY5Mzk4N2IyOTQ5MGRhZDliNTkyOWU4NzFjM2RiZTZlMDQxYjE4ODZjYjdiNWY0',
        link: 'https://www.ktronix.com/computador-portatil-gamer-hp-victus-156-fa2014la-intel/p/198990788456?algEvent=eyJvYmplY3RJZCI6IjE5ODk5MDc4ODQ1NiIsImluZGV4Ijoia3Ryb25peEluZGV4QWxnb2xpYVBSRCIsImFjdGlvbiI6InZpZXciLCJxdWVyeUlEIjoiMGQ1NzY5YjkxYTQwYTAwNzVhMTA5ODUzMjRhYWQxZWEifQ=='
    },
    {
        id: 4,
        nombre: 'JBL Boombox 4',
        precio: 2000000,
        categoria: 'unknown',
        imagen: 'https://www.jbl.com.co/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa8f12f94/LS_JBL_BOOMBOX_4_HERO_BLACK_0019_x4.png?sw=535&sh=535',
        link: 'https://www.jbl.com.co/BOOMBOX-4.html'
    },
    {
        id: 5,
        nombre: 'Barra de sonido JBL Soundbar 500 BAR 500 negra 2406-2474MHz',
        precio: 2000000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_830941-MLU76788938716_062024-F.webp',
        link: 'https://www.mercadolibre.com.co/barra-de-sonido-jbl-soundbar-500-bar-500-negra-2406-2474mhz/p/MCO37713590?pdp_filters=price%3A600000-*#polycard_client=search-desktop&search_layout=grid&position=3&type=product&tracking_id=30cc029a-393b-46b3-815f-41e396fc3deb&wid=MCO1773424141&sid=search'
    },
    {
        id: 6,
        nombre: 'Guayos Adidas F50',
        precio: 1120000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/64263890d6eb456091e4ddd9b30a920d_9366/Guayos_F50_Terreno_Firme_Blanco_IE1251_HM1.jpg',
        link: 'https://www.adidas.co/guayos-f50--terreno-firme/IE1251.html'
    },
    {
        id: 7,
        nombre: 'Guayos F50 Laceless Morado /Verde',
        precio: 260000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/Imagen115_a681a3db-7f49-4842-883f-b6f01f43e1b7.jpg?v=1764827694&width=823',
        link: 'https://guayosbogotop.com/products/guayos-12'
    },
    {
        id: 8,
        nombre: 'Guayos F50 Lamine Yamal Rosado Laceless',
        precio: 260000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/IMG_2831_41cc549f-fa1f-4677-905e-4c67a67cec25.jpg?v=1750110387&width=823',
        link: 'https://guayosbogotop.com/products/guayos-lamine-yamal-editions'
    },
    {
        id: 9,
        nombre: 'Joma Rebound Blanco Colores',
        precio: 220000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/205528CC-7A75-4D3E-94C2-87EBA4E84D50.jpg?v=1767480646&width=823',
        link: 'https://guayosbogotop.com/products/joma-rebound-blanco-colores'
    },
    {
        id: 10,
        nombre: 'Joma Rebound Blanco Plata',
        precio: 220000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/F22678D5-F192-41C2-9818-4324A42C7ABC.png?v=1767480646&width=823',
        link: 'https://guayosbogotop.com/products/joma-rebound-blanco-plata'
    },
    {
        id: 11,
        nombre: 'Joma Regate Rebound Blanco Negro',
        precio: 220000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/04a772c7.png?v=1767473728&width=823',
        link: 'https://guayosbogotop.com/products/jm-top-flex-futsal-6'
    },
    {
        id: 12,
        nombre: 'Futsal Mercurial Superfly 9',
        precio: 220000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/IMG_5778.jpg?v=1750111696&width=823',
        link: 'https://guayosbogotop.com/products/futsala-mercurial-superfly-9-gris'
    },
    {
        id: 13,
        nombre: 'Pesas Tobilleras Y Muñequeras 6kg Fitnics Ajustables Set X2 - Negro (X2 Sets)',
        precio: 68000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_Q_NP_791958-MLA97917071600_112025-F.webp',
        link: 'https://www.mercadolibre.com.co/pesas-tobilleras-y-munequeras-6kg-fitnics-ajustables-set-x2-negro/p/MCO62162919?pdp_filters=item_id%3AMCO1736913431#polycard_client=offers&deal_print_id=7a344ad5-eddc-4f1e-af07-c1bdc6b25de9&position=5&tracking_id=533eb999-ec6a-4d57-b099-87a28a393abb&wid=MCO1736913431&sid=offers'
    },
    {
        id: 14,
        nombre: 'Corrector Postura Lumbar Iman Espalda Magnetico 4 Varillas',
        precio: 77000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_891927-MCO89502627088_082025-F.webp',
        link: 'https://articulo.mercadolibre.com.co/MCO-860609691-corrector-postura-lumbar-iman-espalda-magnetico-4-varillas-_JM?variation=174205758252#polycard_client=cart_list'
    },
    {
        id: 15,
        nombre: 'Mega Gainer 5lbs Hipercalorica Vainilla',
        precio: 136000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_856384-MCO92681536017_092025-F.webp',
        link: 'https://www.mercadolibre.com.co/mega-gainer--5lbs--hipercalorica-gmn/up/MCOU3230069220#polycard_client=search-desktop&search_layout=grid&position=3&type=product&tracking_id=0b7143ea-fc46-4894-8473-452af4cde90e&wid=MCO1598153159&sid=search'
    },
    {
        id: 16,
        nombre: 'Creatina Muscletech',
        precio: 140000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_784970-MLA97113205168_112025-F.webp',
        link: 'https://www.mercadolibre.com.co/creatina-muscletech-80-servicios-crecimiento-muscular-fuerza/p/MCO20596216#polycard_client=offers&deal_print_id=e3578848-85ed-4f8d-8c33-b15c373631f3&tracking_id=311f3038-97d2-4bff-90d9-09cf666fda27&wid=MCO3376829776&sid=offers'
    },
    {
        id: 17,
        nombre: 'Mat Yoga Colchoneta Tapete Ejercicio',
        precio: 100000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_712069-MLA99938933281_112025-F.webp',
        link: 'https://www.mercadolibre.com.co/mat-yoga-colchoneta-tapete-ejercicio-6mm-bolsocorrea-guias-color-negro/p/MCO28690468#polycard_client=offers&deal_print_id=a660d57a-fe3c-4c71-a62c-65ee0d744f5a&tracking_id=7dcc6402-8f4c-4027-b6bd-8626d8de0ed8&wid=MCO1370924407&sid=offers'
    },
    {
        id: 18,
        nombre: 'Bascula Personal Inteligente Bluetooth Balanza Digital De Peso',
        precio: 66000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_878299-MLA88902072837_072025-F.webp',
        link: 'https://www.mercadolibre.com.co/femmto-bascula-de-peso-corporal-bcs15-negro-15v/p/MCO19147005?product_trigger_id=MCO21361039&picker=true&quantity=1'
    },
    {
        id: 19,
        nombre: 'Reloj Tissot Le Locle Powermatic 80',
        precio: 4670000,
        categoria: 'glauser',
        imagen: 'https://glauser.vteximg.com.br/arquivos/ids/182190/T006.407.11.033.03.jpg?v=638418085948000000',
        link: 'https://www.glauser.com.co/reloj-tissot-le-locle-powermatic-80-t0064071103303-t0064071103303/p'
    },
    {
        id: 20,
        nombre: 'Reloj Mido Commander',
        precio: 5800000,
        categoria: 'glauser',
        imagen: 'https://glauser.vteximg.com.br/arquivos/ids/185244/M021.jpg?v=638870898580570000',
        link: 'https://www.glauser.com.co/reloj-mido-commander-m021-626-11-031-00/p'
    },
    {
        id: 21,
        nombre: 'Reloj Tissot Pr 100 Chronograph (T150.417.11.351.00)',
        precio: 2600000,
        categoria: 'glauser',
        imagen: 'https://glauser.vteximg.com.br/arquivos/ids/184284/T150.jpg?v=638673027692100000',
        link: 'https://www.glauser.com.co/reloj-tissot-pr-100-chronograph-t150-417-11-351-00/p'
    },
    {
        id: 22,
        nombre: 'Gafas De Sol Sutro Lite Oakley Oo9463946313 Color Gris',
        precio: 776000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_623752-MLA95665027449_102025-F.webp',
        link: 'https://www.mercadolibre.com.co/p/MCO21466616?pdp_filters=item_id%3AMCO1426948541#polycard_client=cart_list&wid=MCO1426948541&sid=cart'
    },
    {
        id: 23,
        nombre: 'Gafas De Sol Sutro Lite Oakley Oo9471 Hombre Originales Color Gris',
        precio: 972000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_834753-MLA99987822809_112025-F.webp',
        link: 'https://www.mercadolibre.com.co/gafas-de-sol-oakley-oo9471-hombre-originales-color-gris/p/MCO22593591?pdp_filters=item_id%3AMCO2162323552&quantity=2&offer_type=BEST_INSTALLMENTS'
    },
    {
        id: 24,
        nombre: 'Closet (Relleno)',
        precio: 12000000,
        categoria: 'unknown',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_736103-MCO97519707232_112025-F.webp',
        link: 'https://www.mercadolibre.com.co/closet-siruela-200-milan-y-wengue--gran-almacenamiento/up/MCOU3558177998#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=1&reco_backend_type=low_level&reco_id=02be40ff-9a56-45fb-a385-ef9bdd779f1c&wid=MCO1727581517&sid=recos'
    },
    {
        id: 25,
        nombre: 'Guayos F50 League Lamine Yamal Sin Cordones Terreno Firme',
        precio: 550000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0827a873eac4b80bbe3eb2e83bbfe34_9366/Guayos_F50_League_Lamine_Yamal_Sin_Cordones_Terreno_Firme-Multiterreno_Blanco_KJ3781_22_model.jpg',
        link: 'https://www.adidas.co/guayos-f50-league-lamine-yamal-sin-cordones-terreno-firme-multiterreno/KJ3781.html?forceSelSize=KJ3781_640'
    },
      {
        id: 26,
        nombre: 'Maleta Deportiva Linear Mediana',
        precio: 180000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8465ee32fd7e40d49877ab81f5f738f3_9366/Maleta_Deportiva_Linear_Mediana_Negro_JD9555_01_00_standard.jpg',
        link: 'https://www.adidas.co/maleta-deportiva-linear-mediana/JD9555.html?pr=product_rr&slot=4&rec=ds'
      },
      {
        id: 27,
        nombre: 'Tenis de entrenamiento Dropset Control',
        precio: 460000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b04f2f118494326ae13ce6e0becc6cd_9366/tenis_de_entrenamiento_Dropset_Control_Gris_JQ1444_HM1.jpg',
        link: 'https://www.adidas.co/tenis-de-entrenamiento-dropset-control/JQ1444.html?forceSelSize=US+9'
      },
      {
        id: 28,
        nombre: 'Tenis de entrenamiento Dropset Control',
        precio: 460000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/08f144b66f79494e85a1f6a974cbc103_9366/tenis_de_entrenamiento_Dropset_Control_Negro_JS3036_HM1.jpg',
        link: 'https://www.adidas.co/tenis-de-entrenamiento-dropset-control/JS3036.html'
      },
      {
        id: 29,
        nombre: 'Tenis Rapidmove Go M',
        precio: 360000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d40a97b58b234814815de14ca226dd02_9366/Tenis_Rapidmove_Go_M_Negro_JQ3950_HM1.jpg',
        link: 'https://www.adidas.co/tenis-rapidmove-go-m/JQ3950.html'
      },
      {
        id: 30,
        nombre: 'Tenis Rapidmove Go M',
        precio: 360000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/cce80c75406742d4b7ae89fb0b9b9d5a_9366/Tenis_Rapidmove_Go_M_Blanco_JQ1461_HM1.jpg',
        link: 'https://www.adidas.co/tenis-rapidmove-go-m/JQ1461.html'
      },
      {
        id: 31,
        nombre: 'Nike Pegasus 42',
        precio: 800000,
        categoria: 'nike',
        imagen: 'https://nikeco.vtexassets.com/arquivos/ids/1023300-1600-auto?v=639110877752870000&width=1600&height=auto&aspect=true',
        link: 'https://www.nike.com.co/nike-pegasus-42-calzado-de-correr-para-hombre-ib1873-001-tu6/p'
      },
      {
        id: 32,
        nombre: 'Nike Structure 26',
        precio: 800000,
        categoria: 'nike',
        imagen: 'https://nikeco.vtexassets.com/arquivos/ids/1055138-1200-auto?v=639135964269930000&width=1200&height=auto&aspect=true',
        link: 'https://www.nike.com.co/nike-structure-26-calzado-correr-hombre-hj1102-115-tu6/p'
      },
      {
        id: 33,
        nombre: 'Nike Structure Plus',
        precio: 950000,
        categoria: 'nike',
        imagen: 'https://nikeco.vtexassets.com/arquivos/ids/949079-1200-auto?v=639029669669000000&width=1200&height=auto&aspect=true',
        link: 'https://www.nike.com.co/nike-structure-plus-hq3048-001-tp6/p?skuId=82357'
      },
      {
        id: 34,
        nombre: 'Licra Adidas Cuello Bajo x 1und',
        precio: 80000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/641C5F44-96F7-415E-8263-5B4648C95780.jpg?v=1767457886&width=823',
        link: 'https://guayosbogotop.com/products/licra_2'
      },
      {
        id: 35,
        nombre: 'Licra Nike Cuello Bajo x 1und',
        precio: 80000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/F3277EBF-0522-4069-824E-967174E9467E.jpg?v=1767458190&width=823',
        link: 'https://guayosbogotop.com/products/licra_5'
      },
      {
        id: 36,
        nombre: '',
        precio: 1,
        categoria: '',
        imagen: '',
        link: ''
      },
      {
        id: 37,
        nombre: '',
        precio: 1,
        categoria: '',
        imagen: '',
        link: ''
      },
      {
        id: 38,
        nombre: '',
        precio: 1,
        categoria: '',
        imagen: '',
        link: ''
      },
      {
        id: 39,
        nombre: '',
        precio: 1,
        categoria: '',
        imagen: '',
        link: ''
      }
];
