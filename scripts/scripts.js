window.onload = function () {
  //CREAREA MAPEI

  var map = L.map("map").setView([45.73686, 24.829102], 7);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "Multimedia",
  }).addTo(map);

  //CREARE ICONS

  var goldIcon = new L.Icon({
    iconUrl: "img/marker-icon-2x-gold.png",
    iconSize: [18, 30],
    iconAnchor: [10, 30],
    popupAnchor: [1, -34],
  });

  var greyIcon = new L.Icon({
    iconUrl: "img/marker-icon-2x-grey.png",
    iconSize: [18, 30],
    iconAnchor: [10, 30],
    popupAnchor: [1, -34],
  });

  var redIcon = new L.Icon({
    iconUrl: "img/marker-icon-2x-red.png",
    iconSize: [18, 30],
    iconAnchor: [10, 30],
    popupAnchor: [1, -34],
  });

  var violetIcon = new L.Icon({
    iconUrl: "img/marker-icon-2x-violet.png",
    iconSize: [18, 30],
    iconAnchor: [10, 30],
    popupAnchor: [1, -34],
  });

  var orangeIcon = new L.Icon({
    iconUrl: "img/marker-icon-2x-orange.png",
    iconSize: [18, 30],
    iconAnchor: [10, 30],
    popupAnchor: [1, -34],
  });

  //CREARE MODAL

  function openMarkerModal(markerInfo, county, src) {
    document.getElementById("header").innerHTML = county;

    var modalContentContainer = document.createElement("div");

    modalContentContainer.innerHTML = markerInfo;

    document.getElementById("markerModalBody").innerHTML = "";
    document
      .getElementById("markerModalBody")
      .appendChild(modalContentContainer);

    var canvas = document.createElement("canvas");
    canvas.id = "modalCanvas";
    modalContentContainer.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    var img = new Image();

    img.width = 1024;
    img.height = 450;
    img.src = src;

    img.onload = function () {
      var scaleFactor = 1;
      canvas.width = img.width * scaleFactor;
      canvas.height = img.height * scaleFactor;

      var centerX = (1200 - img.width * scaleFactor) / 2;
      var centerY = (canvas.height - img.height * scaleFactor) / 2;

      ctx.drawImage(
        img,
        centerX,
        centerY,
        img.width * scaleFactor,
        img.height * scaleFactor
      );

      modalContentContainer.style.marginTop = "5px";
      canvas.style.marginTop = "10px";

      $("#markerModal").modal("show");
    };
  }

  //POZITIONARE MARKERS ON MAP

  var marker = L.marker([45.030833, 23.274536], { icon: greyIcon }).addTo(map);

  marker.on("click", function () {
    var county = "<h1>GORJ</h1>";
    var markerInfo =
      "Izvoarele istorice atestă faptul , că încă din paleoliticul mijlociu , oamenii  și-au gasit adăpost în peșterile locului, osemintele lor fiind scoase la iveală de arheologi și speologi la Baia de Fier și Broșteni. S-au descoperit așezări din  epoca neolitică și cea a bronzului  la Bălești, Crasna, Vladimir, Runcu și Telești. ";
    var src = "../img/gorj.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker2 = L.marker([46.950262, 23.686523], { icon: orangeIcon }).addTo(
    map
  );

  marker2.on("click", function () {
    var county = "<h1>CLUJ</h1>";
    var markerInfo =
      "Clujul are Piața Avram Iancu, o piață centrală numită după revoluționarul transilvănean Avram Iancu. Piața este un centru plin de viață, înconjurată de clădiri istorice, magazine și cafenele, ceea ce o face un loc de întâlnire popular atât pentru localnici, cât și pentru vizitatori.";
    var src = "../img/cluj.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker3 = L.marker([44.276671, 28.377686], { icon: goldIcon }).addTo(
    map
  );

  marker3.on("click", function () {
    var county = "<h1>CONSTANTA</h1>";
    var markerInfo =
      "Localitatea a redevenit oraș după construirea căii ferate Cernavodă-Constanța de către britanici (construită de compania „Danube and Black Sea Railway”) și a portului, în 1865, pentru exportul grânelor românești.";
    var src = "../img/constanta.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker4 = L.marker([45.274886, 28.817139], { icon: violetIcon }).addTo(
    map
  );

  marker4.on("click", function () {
    var county = "<h1>TULCEA</h1>";
    var markerInfo =
      "Ruinele municipiului Troesmis, la Igliţa, compus din două castre, dintre care cel mai vechi este cel apusean, construit probabil pe locul unei vechi aşezări getice.  Castrul de răsărit a fost  sediul legiunii V Macedonica înainte de strămutarea ei în Dacia. Turnurile cu trei şiruri de întărituri, ca şi zidurile gigantice, construite din material păgânesc: lespezi de mormânt, pietre de templu, etc., datează din epoca lui Justinian.";
    var src = "../img/tulcea.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker5 = L.marker([44.21371, 27.344971], { icon: redIcon }).addTo(
    map
  );

  marker5.on("click", function () {
    var county = "<h1>CALARASI</h1>";
    var markerInfo =
      "Orașul găzduiește Grădina Botanică Călărași, oferind o colecție diversă de specii de plante. Acesta servește atât ca spațiu de recreere, cât și ca resursă educațională, oferind o perspectivă asupra florei regiunii.";
    var src = "../img/calarasi.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker6 = L.marker([47.78548, 22.876282], { icon: orangeIcon }).addTo(
    map
  );

  marker6.on("click", function () {
    var county = "<h1>SATU MARE</h1>";
    var markerInfo =
      "Săpăturile arheologice din Țara Oașului, de la Ardud, Medieșu-Aurit, Homorod și Sanislău, de pe teritoriul județului Satu Mare, au scos la lumină relicve atestând viața umană în această regiune începând încă din paleolitic. Un punct de reper al istoriei acestei regiuni este reprezentat de daci, care trăiesc aici de peste 2000 ani, creând o remarcabilă civilizație. Drept model se poate lua așezarea Medieșu Aurit, unde se găsesc rămășițele a 13 cuptoare de olărit, reprezentând cel mai mare vestigiu arheologic de acest fel din România.";
    var src = "../img/satu-mare.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker7 = L.marker([44.653024, 27.224121], { icon: greyIcon }).addTo(
    map
  );

  marker7.on("click", function () {
    var county = "<h1>IALOMITA</h1>";
    var markerInfo =
      "Începând cu a doua jumătate a secolului al XVIII-lea, teritoriul judeţului Ialomiţa devine teatrul de desfăşurare a războaielor ruso-turce. Lupte puternice au loc în zona satelor Ulmu (1806) şi Obileşti (1807), în urma cărora turcii sunt înfrânţi şi alungaţi peste Dunăre. Armistiţiul s-a încheiat la 24 august 1807, la Slobozia.";
    var src = "../img/ialomita.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker8 = L.marker([45.228481, 27.762451], { icon: goldIcon }).addTo(
    map
  );

  marker8.on("click", function () {
    var county = "<h1>BRAILA</h1>";
    var markerInfo =
      "Brăila este un oraș-port situat pe malul Dunării în sud-estul României. Brăila are o strânsă legătură istorică cu orașul vecin Galați. Împreună formează o zonă metropolitană cunoscută sub numele de „Orașele Gemene Galați-Brăila”. Această colaborare a jucat un rol semnificativ în dezvoltarea ambelor orașe, în special în sectoarele maritim și comercial.";
    var src = "../img/braila.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker9 = L.marker([47.051411, 21.931458], { icon: redIcon }).addTo(
    map
  );

  marker9.on("click", function () {
    var county = "<h1>ORADEA</h1>";
    var markerInfo =
      "Județul Bihor este renumit pentru Baile Felix, o statiune balneara renumita cu bai termale. Regiunea are o semnificație istorică datând din epoca romană. Castrul Roman Felix, din apropierea stațiunii Băile Felix, oferă perspective arheologice asupra prezenței romane în zonă, oferind o privire asupra structurilor și artefactelor militare antice.";
    var src = "../img/oradea.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker10 = L.marker([45.560218, 28.037109], { icon: violetIcon }).addTo(
    map
  );

  marker10.on("click", function () {
    var county = "<h1>GALATI</h1>";
    var markerInfo =
      "Odată cu înființarea portului liber în 1900, Galațiul a devenit un important centru de comerț și industrie în regiunea Dunării. Portul a facilitat dezvoltarea comerțului exterior și a atras investitori în oraș.";
    var src = "../img/galati.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker11 = L.marker([47.212106, 27.531738], { icon: greyIcon }).addTo(
    map
  );

  marker11.on("click", function () {
    var county = "<h1>IASI</h1>";
    var markerInfo =
      "In iulie 1827, un cumplit incendiu a cuprins vestitul Targ al Iesilor. O treime a orasului, cu locuintele de pe Ulita Mare si Curtea Domneasca, a cazut prada flacarilor.";
    var src = "../img/iasi.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker12 = L.marker([47.180379, 23.057556], { icon: orangeIcon }).addTo(
    map
  );

  marker12.on("click", function () {
    var county = "<h1>SALAJ</h1>";
    var markerInfo =
      "Turismul cultural în județul Sălaj este strict legat de prezența pe teritoriul acestuia a unor valori culturale care îmbracă diverse forme. Demne de interes sunt festivalurile folclorice, serbările câmpenești și pastorale, printre care se numără și “Ecouri transilvane” – Festival naţional coral, sau „Someș, cântecele tale”  - Festival internațional de folclor și meșteșuguri artistice tradiționale.";
    var src = "../img/salaj.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker13 = L.marker([46.530524, 24.587402], { icon: goldIcon }).addTo(
    map
  );

  marker13.on("click", function () {
    var county = "<h1>MURES</h1>";
    var markerInfo =
      "Izvoarele istorice atestă faptul , că încă din paleoliticul mijlociu , oamenii  și-au gasit adăpost în peșterile locului, osemintele lor fiind scoase la iveală de arheologi și speologi la Baia de Fier și Broșteni. S-au descoperit așezări din  epoca neolitică și cea a bronzului  la Bălești, Crasna, Vladimir, Runcu și Telești.";
    var src = "../img/mures.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker14 = L.marker([47.709762, 25.938721], { icon: redIcon }).addTo(
    map
  );

  marker14.on("click", function () {
    var county = "<h1>SUCEAVA</h1>";
    var markerInfo =
      "Teritoriul judeţului Suceava, numit şi ”Ţara de Sus” sau  ”Ţara Fagilor”, constituie o zonă cu puternice rezonanţe istorice,  fiind cunoscută din anale, letopiseţe, cronici, în special pentru  perioada de mare înflorire economică, politică şi culturală  din vremea lui Ştefan cel Mare.";
    var src = "../img/suceava.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker15 = L.marker([46.168419, 21.362915], { icon: violetIcon }).addTo(
    map
  );

  marker15.on("click", function () {
    var county = "<h1>ARAD</h1>";
    var markerInfo =
      "Aradul găzduiește impresionanta Cetate a Aradului, construită în secolul al XVIII-lea. Cetatea a servit diverse scopuri de-a lungul istoriei, inclusiv ca fortăreață militară și închisoare. Astăzi, este un reper istoric, oferind perspective asupra trecutului regiunii.";
    var src = "../img/arad.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker16 = L.marker([47.100045, 26.477051], { icon: redIcon }).addTo(
    map
  );

  marker16.on("click", function () {
    var county = "<h1>NEAMT</h1>";
    var markerInfo =
      "Cu un cadru natural variat şi generos, teritoriul judeţului Neamţ a constituit o străveche şi permanentă vatră de locuire. Descoperirile arheologice ne duc în timp în perioada paleoliticului superior, relevând o intensă populare a acestor ţinuturi. În această evoluţie istorică un loc important este rezervat celei mai strălucite civilizaţii preistorice a Europei: Complexul Precucuteni – Cucuteni – Tripolie care îşi are vatra de formare în această regiune. ";
    var src = "../img/neamt.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker17 = L.marker([46.54375, 26.674805], { icon: greyIcon }).addTo(
    map
  );

  marker17.on("click", function () {
    var county = "<h1>BACAU</h1>";
    var markerInfo =
      "Regiunea din jurul Bacăului are situri arheologice legate de cultura Cucuteni, una dintre cele mai vechi culturi neolitice din Europa. Aceste situri oferă perspective asupra așezărilor preistorice și realizărilor artistice ale acestei civilizații antice. În plus, Bacău găzduiește Casa Memorială a lui Mihai Eminescu, unul dintre cei mai celebri poeți ai României.";
    var src = "../img/bacau.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker18 = L.marker([45.734943, 21.228333], { icon: goldIcon }).addTo(
    map
  );

  marker18.on("click", function () {
    var county = "<h1>TIMIS</h1>";
    var markerInfo =
      "Numele județului provine de la denumirea râului Timiș. Conform dicționarului etimologic al lui Kiss Lajos, probabil că numele râului vine din limba dacă: thibh-isjo (în traducere „mlăștinos”).";
    var src = "../img/timisoara.jpg";
    openMarkerModal(markerInfo, county, src);
  });


  var marker19 = L.marker([45.85176, 26.872559], { icon: orangeIcon }).addTo(
    map
  );

  marker19.on("click", function () {
    var county = "<h1>VRANCEA</h1>";
    var markerInfo =
      "Regiunea seismică cea mai activă din România se află în zona Vrancea, cu epicentrul în comuna Vrâncioaia. Potrivit statisticilor, aici se produc zilnic două cutremure de pãmînt, cele mai multe imperceptibile simţurilor omului. O modernă staţie seismică funcţionează în localitatea Vrâncioaia.";
    var src = "../img/vrancea.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker20 = L.marker([45.336702, 26.762695], { icon: redIcon }).addTo(
    map
  );

  marker20.on("click", function () {
    var county = "<h1>BUZAU</h1>";
    var markerInfo =
      "Buzăul este renumit pentru Vulcanii Noroioși, un fenomen geologic unic. Buzău găzduiește Parcul Crâng, unul dintre cele mai vechi și mai frumoase parcuri din România. Înființat în secolul al XIX-lea, parcul are vegetație diversă, un lac și monumente istorice, oferind o evadare senină în inima orașului.";
    var src = "../img/buzau.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker21 = L.marker([44.182204, 26.05957], { icon: violetIcon }).addTo(
    map
  );

  marker21.on("click", function () {
    var county = "<h1>GIURGIU</h1>";
    var markerInfo =
      "Giurgiu, probabil vechi toponim dacic însemnând `aşezarea înconjurată de ape`, Vlaşca, toponim slav desemnând `Ţara Românilor`, apar menţionate, în documente de politică internă, primul la 23 septembrie 1403 şi al doilea la 19 iulie 1498.";
    var src = "../img/giurgiu.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker22 = L.marker([44.158563, 25.202637], { icon: goldIcon }).addTo(
    map
  );

  marker22.on("click", function () {
    var county = "<h1>TELEORMAN</h1>";
    var markerInfo =
      "“Teleorman” ar putea să aibă sensul de pădure nebună (în limba turcă: deli orman). Din vechea Pădure nebună de odinioară s-a păstrat, până pe data de 17 iunie 2010, când a fost scos din rădăcini, în urma unei furtuni, în nordul județului, în satul Plopi, cel mai bătrân stejar din țară. Teleorman este unul dintre cele mai vechi județe ale României, existând încă de pe vremea Țării Românești (Valahia).";
    var src = "../img/teleorman.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker23 = L.marker([44.582643, 26.114502], { icon: greyIcon }).addTo(
    map
  );

  marker23.on("click", function () {
    var county = "<h1>BUCURESTI</h1>";
    var markerInfo =
      "Prima stradă din Capitală a fost actuala Calea Victoriei, care era pavată cu trunchiuri de copaci şi se numea Drumul de Lemn.Sub București, o rețea de zeci de kilometri de tuneluri. Prima rețea de catacombe din București a apărut încă din secolul al VIII-lea și a fost construită de către negustorii și boierii care voiau să își protejeze avuțiile de tâlharii care atacau orașul.";
    var src = "../img/bucuresti.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker24 = L.marker([45.274886, 21.903992], { icon: orangeIcon }).addTo(
    map
  );

  marker24.on("click", function () {
    var county = "<h1>CARAS-SEVERIN</h1>";
    var markerInfo =
      "Județul se mândrește cu situri arheologice, inclusiv cele din Moldova Nouă, care dezvăluie urme ale civilizațiilor străvechi. Aceste situri oferă perspective asupra istoriei timpurii a așezărilor umane din regiune.";
    var src = "../img/caras-severin.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker25 = L.marker([45.182037, 25.993652], { icon: redIcon }).addTo(
    map
  );

  marker25.on("click", function () {
    var county = "<h1>PRAHOVA</h1>";
    var markerInfo =
      "Fiind numit după cea mai frumoasă regiune a Carpaţilor - Valea Prahovei, judeţul Prahova prezintă interes atât pentru turişti, cât şi pentru investitori. Sinaia, „Perla Carpaţilor”, este situată la 1.000 m altitudine. Punctul pricipal de atracţie al acesteia este Castelul Peleş, construit la sfârşitul secolului al XIX-lea, în stil germanic.";
    var src = "../img/prahova.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker26 = L.marker([44.637391, 22.659302], { icon: violetIcon }).addTo(
    map
  );

  marker26.on("click", function () {
    var county = "<h1>MEHEDINTI</h1>";
    var markerInfo =
      "Drobeta-Turnu Severin se pare că a fost locuit încă din perioada paleoliticului, conform unor cercetări realizate de către specialiştii Universităţii Edinburgh, ajutaţi de istoricii de la Institutul de Arheologie din Bucureşti. Toate dovezile arată că locuitorii acestor teritorii au trecut de la activitatea de culegători, gradat, către activităţile de pescari şi de vânători, iar cu timpul au ajuns să fie chiar o civilizaţie sedentară modernă.";
    var src = "../img/mehedinti.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker27 = L.marker([45.003651, 25.466309], { icon: greyIcon }).addTo(
    map
  );

  marker27.on("click", function () {
    var county = "<h1>DAMBOVITA</h1>";
    var markerInfo =
      "Locatia pe care se afla municipiul Targoviste este locuita inca din perioada neolitica. Orasul a cunoscut prosperitatea in perioada medievala, cand a devenit un oras european important, iar in timpul domniei lui Mircea cel Batran, orasul a devenit resedinta domneasca si capiatala a Tarii Romanesti.";
    var src = "../img/dambovita.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker28 = L.marker([45.667805, 25.64209], { icon: goldIcon }).addTo(
    map
  );

  marker28.on("click", function () {
    var county = "<h1>BRASOV</h1>";
    var markerInfo =
      "Biserica Neagră din Brașov se mândrește cu una dintre cele mai mari orgi bisericești din Europa (construită în 1839, are peste 4.000 de țevi). Brașovul găzduiește una dintre cele mai înguste străzi din Europa, cunoscută sub numele de Strada Funiei. Construită inițial pentru pompieri, este acum o pistă pietonală fermecătoare, oferind o experiență unică în timp ce șerpuiește prin partea istorică a orașului.";
    var src = "../img/brasov.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker29 = L.marker([45.95115, 26.048584], { icon: orangeIcon }).addTo(
    map
  );

  marker29.on("click", function () {
    var county = "<h1>COVASNA</h1>";
    var markerInfo =
      "Județul Covasna mai este numit și ținutul conacelor peste că are peste 160 de astfel de clădiri istorice, multe dintre ele transformate în unități de cazare.";
    var src = "../img/covasna.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker30 = L.marker([44.319918, 23.807373], { icon: redIcon }).addTo(
    map
  );

  marker30.on("click", function () {
    var county = "<h1>DOLJ</h1>";
    var markerInfo =
      "Primele comunități omenești cunoscute pe aceste meleaguri sunt atestate arheologic prin importante descoperiri ce aparțin epocii vechi a pietrei. Mult mai bogate sunt urmele de locuire ce există din epoca neolitică. Prima mențiune documentară a județului datează din anul 1444, sub denumirea „Județul de Baltă” așezat în vasta câmpie a Dunării.";
    var src = "../img/craiova.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker31 = L.marker([46.709736, 25.664063], { icon: violetIcon }).addTo(
    map
  );

  marker31.on("click", function () {
    var county = "<h1>HARGHITA</h1>";
    var markerInfo =
      "Cercetările arheologice au dovedit că teritoriul actual al judeţului Harghita a fost locuit încă din neoliticul timpuriu (5500-5300 î.Hr.). ";
    var src = "../img/harghita.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker32 = L.marker([44.402392, 24.367676], { icon: greyIcon }).addTo(
    map
  );

  marker32.on("click", function () {
    var county = "<h1>OLT</h1>";
    var markerInfo =
      "În Olt se află Mănăstirea Corbii de Piatră, cunoscută pentru locația sa unică în interiorul unei peșteri. Mănăstirea, fondată în secolul al XV-lea, este sculptată într-o formațiune de stâncă și prezintă fresce bine conservate. Orașul Slatina din județul Olt are o bogată tradiție a olăritului.";
    var src = "../img/olt.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker33 = L.marker([46.551305, 27.806396], { icon: goldIcon }).addTo(
    map
  );

  marker33.on("click", function () {
    var county = "<h1>VASLUI</h1>";
    var markerInfo =
      "Acest judet este remarcabil prin tezaurele arheologice, valorile etnografice si arta populara, locurile istorice si monumentele care atesta existenta milenarului romanilor in aceasta zona, cat si contributia lor la cultura universala. Castelul Mavrocordat, construit in secolul al XIX-lea, Cetatea lui Stefan cel Mare, datand in secolul al XV-lea, Biserica Sf. Ioan, de asemenea fondată de Ștefan cel Mare în secolul al XV-lea, sunt câteva din numeroasele vestigii istorice și culturale păstrate în județul Vaslui.";
    var src = "../img/vaslui.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker34 = L.marker([47.923705, 26.751709], { icon: orangeIcon }).addTo(
    map
  );

  marker34.on("click", function () {
    var county = "<h1>BOTOSANI</h1>";
    var markerInfo =
      "Botoșani găzduiește Teatrul Național Vasile Alecsandri, numit după proeminentul dramaturg și poet român. În plus, județul are Muzeul de Istorie Naturală, oferind perspective asupra florei și faunei locale. Este o resursă valoroasă pentru cei interesați de patrimoniul natural al regiunii.";
    var src = "../img/botosani.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker35 = L.marker([45.087096, 24.384155], { icon: redIcon }).addTo(
    map
  );

  marker35.on("click", function () {
    var county = "<h1>VALCEA</h1>";
    var markerInfo =
      "În sudul județului, la Bugiulești, s-au găsit pietre cioplite care au fost descrise ca fiind cele mai vechi urme de hominizi din Europa, apreciate a fi cu circa două milioane de ani î.Hr. și denumite `Australanthropus olteniens`, dar descoperirea nu a fost autentificată de studiile științifice ulterioare. În schimb, săpăturile arheologice de la Bârsești și Govora-sat, din comuna Mihăești, Căzănești, Valea Răii din municipiul Râmnicu Vâlcea, Orlești au scos la iveală mărturii netăgăduite ale locuirii arealului județului în perioada neolitică.";
    var src = "../img/valcea.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker36 = L.marker([45.058001, 24.862061], { icon: violetIcon }).addTo(
    map
  );

  marker36.on("click", function () {
    var county = "<h1>ARGES</h1>";
    var markerInfo =
      "Orașul Curtea de Argeș a fost cândva capitala Țării Românești în perioada medievală, iar ruinele Curții Domnești a Țării Românești din oraș îi evidențiază importanța istorică. Renumită pentru semnificația sa istorică și arhitecturală, Mănăstirea Curtea de Argeș, ctitorită în secolul al XVI-lea, servește drept loc de odihnă pentru mai mulți monarhi români.";
    var src = "../img/arges.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker38 = L.marker([45.863238, 22.895508], { icon: greyIcon }).addTo(
    map
  );

  marker38.on("click", function () {
    var county = "<h1>HUNEDOARA</h1>";
    var markerInfo =
      "Castelul Corvinilor este cea mai mare construcţie medievală cu dublă funcţionalitate (civilă şi militară) din România aflată încă „în picioare”. Castelul are 42 de încăperi, două terase, două poduri (de 55, respectiv 30 de metri lungime) şi o suprafaţă construită de 7.000 de metri pătraţi.";
    var src = "../img/hunedoara.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker39 = L.marker([46.059891, 23.587646], { icon: goldIcon }).addTo(
    map
  );

  marker39.on("click", function () {
    var county = "<h1>ALBA</h1>";
    var markerInfo =
      "Județul Alba făcea odată parte din provincia romană Dacia, Alba Iulia fiind orașul roman antic Apulum. Alba Iulia a găzduit Adunarea Marii Uniri la 1 decembrie 1918, unde reprezentanții Transilvaniei au votat pentru unirea cu România, eveniment esențial în istoria țării.";
    var src = "../img/alba.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker40 = L.marker([47.648737, 23.57666], { icon: orangeIcon }).addTo(
    map
  );

  marker40.on("click", function () {
    var county = "<h1>MARAMURES</h1>";
    var markerInfo =
      "Printre cele mai vechi aşezăminte de cultură se numără bibliotecile, instituţii cu o bogată tradiţie. Prima bibliotecă în judeţul Mureş s-a înfiinţat în anul 1557 pe lângă Schola Particula, devenită la  începutul secolului al XVIII-lea colegiu reformat. Un fond deosebit de carte, 4331 mii volume, se află în cele 290 biblioteci existente, din care 52 sunt biblioteci publice.";
    var src = "../img/maramures.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker41 = L.marker([45.782848, 24.153442], { icon: redIcon }).addTo(
    map
  );

  marker41.on("click", function () {
    var county = "<h1>SIBIU</h1>";
    var markerInfo =
      "Descoperirile arheologice făcute pe raza județului atestă faptul că zona a fost locuită încă din paleolitic dovadă stau săpăturile de la Racovița, unde s-a găsit un topor de silex aparținând culturii de prund. Fragmentele de ceramică, podoabele, uneltele, mormintele de inhumație, descoperite cu ocazia săpaturilor arheologice ne dovedesc parcurgerea prin etapele succesive ale istoriei (neolitic, epoca bronzului, epoca fierului).";
    var src = "../img/sibiu.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  var marker42 = L.marker([47.113131, 24.480286], { icon: violetIcon }).addTo(
    map
  );

  marker42.on("click", function () {
    var county = "<h1>BISTRITA NASAUD</h1>";
    var markerInfo =
      "Bistrița-Năsăud găzduiește Munții Rodnei, parte din Carpații Orientali. Zona este cunoscută pentru peisajele sale uimitoare, inclusiv văi adânci și vârfuri, ceea ce o face o destinație populară pentru pasionații de natură și drumeții.";
    var src = "../img/bistrita-nasaud.jpg";
    openMarkerModal(markerInfo, county, src);
  });

  //GEOLOCATION
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        var popupContentGeoLocation =
          '<div class="container">' +
          "  <h5>Locația ta</h5>" +
          "  <p>Latitudine: " +
          latitude +
          "</p>" +
          "  <p>Longitudine: " +
          longitude +
          "</p>" +
          "</div>";

        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup(popupContentGeoLocation, {
            className: "leaflet-popup-bootstrap",
          })
          .closePopup();
      },
      function (error) {
        console.error("Eroare de geolocație: " + error.message);
      }
    );
  } else {
    console.error("Geolocația nu este suportată de acest browser");
  }
};

//https://github.com/pointhi/leaflet-color-markers
