https://www.instagram.com/androvende_/
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
        nombre: 'iPhone 16 Pro Max (512GB)',
        precio: 7700000,
        categoria: 'apple',
        imagen: 'https://mac-center.com/cdn/shop/files/IMG-14858931_b4feabc9-caa4-4549-bc1b-1fe9ef3989f0.jpg?v=1726245487',
        link: 'https://mac-center.com/products/iphone-16-pro-myx13be-a'
    },
    {
        id: 3,
        nombre: 'Airpods Pro 2',
        precio: 100000,
        categoria: 'unknown',
        imagen: 'https://mac-center.com/cdn/shop/files/IMG-14912674_550x.jpg?v=1726874188',
        link: 'https://www.instagram.com/androvende_/'
    },
        {
        id: 4,
        nombre: 'Airpods Pro 3',
        precio: 180000,
        categoria: 'unknown',
        imagen: 'https://mac-center.com/cdn/shop/files/IMG-18067428_m_jpeg_1_550x.jpg?v=1757469538',
        link: 'https://www.instagram.com/androvende_/'
    },
    {
        id: 5,
        nombre: 'Computador Portátil Gamer HP VICTUS 15.6" Fa2014la',
        precio: 2700000,
        categoria: 'unknown',
        imagen: 'https://www.ktronix.com/medias/198990788456-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyOTM5OHxpbWFnZS93ZWJwfGFEQTJMMmhrT0M4eE5URTFOek13T1Rrek1UVTFNQzh4T1RnNU9UQTNPRGcwTlRaZk1EQXhYemMxTUZkNE56VXdTQXxkNGNmMzY5NzRiNWUzNmIzMWY5Mzk4N2IyOTQ5MGRhZDliNTkyOWU4NzFjM2RiZTZlMDQxYjE4ODZjYjdiNWY0',
        link: 'https://www.ktronix.com/computador-portatil-gamer-hp-victus-156-fa2014la-intel/p/198990788456?algEvent=eyJvYmplY3RJZCI6IjE5ODk5MDc4ODQ1NiIsImluZGV4Ijoia3Ryb25peEluZGV4QWxnb2xpYVBSRCIsImFjdGlvbiI6InZpZXciLCJxdWVyeUlEIjoiMGQ1NzY5YjkxYTQwYTAwNzVhMTA5ODUzMjRhYWQxZWEifQ=='
    },
    {
        id: 6,
        nombre: 'JBL Boombox 4',
        precio: 2000000,
        categoria: 'unknown',
        imagen: 'https://www.jbl.com.co/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa8f12f94/LS_JBL_BOOMBOX_4_HERO_BLACK_0019_x4.png?sw=535&sh=535',
        link: 'https://www.jbl.com.co/BOOMBOX-4.html'
    },
    {
        id: 7,
        nombre: 'Tissot T127.410.44.081.00',
        precio: 3600000,
        categoria: 'glauser',
        imagen: 'https://glauser.vteximg.com.br/arquivos/ids/171846/T127.410.44.081.00.png?v=637980650092070000',
        link: 'https://www.glauser.com.co/tissot-t-classic-t127-410-44-081-00/p'
    },
    {
        id: 8,
        nombre: 'Guayos F50 Laceless Morado /Verde',
        precio: 260000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/Imagen115_a681a3db-7f49-4842-883f-b6f01f43e1b7.jpg?v=1764827694&width=823',
        link: 'https://guayosbogotop.com/products/guayos-12'
    },
    {
        id: 9,
        nombre: 'Guayos F50 Lamine Yamal Rosado Laceless',
        precio: 260000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/IMG_2831_41cc549f-fa1f-4677-905e-4c67a67cec25.jpg?v=1750110387&width=823',
        link: 'https://guayosbogotop.com/products/guayos-lamine-yamal-editions'
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
        nombre: 'Licra Adidas Cuello Bajo x 1und',
        precio: 80000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/641C5F44-96F7-415E-8263-5B4648C95780.jpg?v=1767457886&width=823',
        link: 'https://guayosbogotop.com/products/licra_2'
      },
      {
        id: 13,
        nombre: 'Licra Nike Cuello Bajo x 1und',
        precio: 80000,
        categoria: 'unknown',
        imagen: 'https://guayosbogotop.com/cdn/shop/files/F3277EBF-0522-4069-824E-967174E9467E.jpg?v=1767458190&width=823',
        link: 'https://guayosbogotop.com/products/licra_5'
      },
    {
        id: 14,
        nombre: 'Pesas Tobilleras Y Muñequeras 6kg Fitnics Ajustables Set X2 - Negro (X2 Sets)',
        precio: 68000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_Q_NP_791958-MLA97917071600_112025-F.webp',
        link: 'https://www.mercadolibre.com.co/pesas-tobilleras-y-munequeras-6kg-fitnics-ajustables-set-x2-negro/p/MCO62162919?pdp_filters=item_id%3AMCO1736913431#polycard_client=offers&deal_print_id=7a344ad5-eddc-4f1e-af07-c1bdc6b25de9&position=5&tracking_id=533eb999-ec6a-4d57-b099-87a28a393abb&wid=MCO1736913431&sid=offers'
    },
    {
        id: 15,
        nombre: 'Corrector Postura Lumbar Iman Espalda Magnetico 4 Varillas',
        precio: 77000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_891927-MCO89502627088_082025-F.webp',
        link: 'https://articulo.mercadolibre.com.co/MCO-860609691-corrector-postura-lumbar-iman-espalda-magnetico-4-varillas-_JM?variation=174205758252#polycard_client=cart_list'
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
        nombre: 'Mega Gainer 5lbs Hipercalorica Vainilla',
        precio: 136000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_856384-MCO92681536017_092025-F.webp',
        link: 'https://www.mercadolibre.com.co/mega-gainer--5lbs--hipercalorica-gmn/up/MCOU3230069220#polycard_client=search-desktop&search_layout=grid&position=3&type=product&tracking_id=0b7143ea-fc46-4894-8473-452af4cde90e&wid=MCO1598153159&sid=search'
    },
    {
        id: 18,
        nombre: 'Mat Yoga Colchoneta Tapete Ejercicio',
        precio: 100000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_712069-MLA99938933281_112025-F.webp',
        link: 'https://www.mercadolibre.com.co/mat-yoga-colchoneta-tapete-ejercicio-6mm-bolsocorrea-guias-color-negro/p/MCO28690468#polycard_client=offers&deal_print_id=a660d57a-fe3c-4c71-a62c-65ee0d744f5a&tracking_id=7dcc6402-8f4c-4027-b6bd-8626d8de0ed8&wid=MCO1370924407&sid=offers'
    },
    {
        id: 19,
        nombre: 'Bascula Personal Inteligente Bluetooth Balanza Digital De Peso',
        precio: 66000,
        categoria: 'mercadolibre',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_878299-MLA88902072837_072025-F.webp',
        link: 'https://www.mercadolibre.com.co/femmto-bascula-de-peso-corporal-bcs15-negro-15v/p/MCO19147005?product_trigger_id=MCO21361039&picker=true&quantity=1'
    },
      {
        id: 20,
        nombre: 'Tenis de entrenamiento Dropset Control',
        precio: 460000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b04f2f118494326ae13ce6e0becc6cd_9366/tenis_de_entrenamiento_Dropset_Control_Gris_JQ1444_HM1.jpg',
        link: 'https://www.adidas.co/tenis-de-entrenamiento-dropset-control/JQ1444.html?forceSelSize=US+9'
      },
      {
        id: 21,
        nombre: 'Tenis de entrenamiento Dropset Control',
        precio: 460000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/08f144b66f79494e85a1f6a974cbc103_9366/tenis_de_entrenamiento_Dropset_Control_Negro_JS3036_HM1.jpg',
        link: 'https://www.adidas.co/tenis-de-entrenamiento-dropset-control/JS3036.html'
      },
      {
        id: 22,
        nombre: 'Tenis Rapidmove Go M',
        precio: 360000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d40a97b58b234814815de14ca226dd02_9366/Tenis_Rapidmove_Go_M_Negro_JQ3950_HM1.jpg',
        link: 'https://www.adidas.co/tenis-rapidmove-go-m/JQ3950.html'
      },
      {
        id: 23,
        nombre: 'Tenis Rapidmove Go M',
        precio: 360000,
        categoria: 'adidas',
        imagen: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/cce80c75406742d4b7ae89fb0b9b9d5a_9366/Tenis_Rapidmove_Go_M_Blanco_JQ1461_HM1.jpg',
        link: 'https://www.adidas.co/tenis-rapidmove-go-m/JQ1461.html'
      },
];
