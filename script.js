// V / GARAGE — 100-car collection, search, filters and favourites



const cars = [

  ["Porsche 911 Carrera","sports","SPORTS ICON","Germany","Timeless design with a driver's-car soul.","photo-1503376780353-7e6692767b70"],

  ["Nissan GT-R R35","jdm","JDM LEGEND","Japan","Twin-turbo power and all-wheel-drive grip.","photo-1614200187524-dc4b892acf16"],

  ["Lamborghini Aventador","supercar","SUPERCAR","Italy","A dramatic V12 icon with unmistakable presence.","photo-1544829099-b9a0c07fad1a"],

  ["Toyota Supra","jdm","JDM LEGEND","Japan","A tuner favourite built for enthusiasts.","photo-1621135802920-133df287f89c"],

  ["BMW M4","sports","SPORTS","Germany","Precision engineering with an aggressive edge.","photo-1555215695-3004980ad54e"],

  ["McLaren 720S","supercar","SUPERCAR","United Kingdom","Lightweight engineering and striking design.","photo-1621993202323-f438eec934ff"],

  ["Ferrari 488 GTB","supercar","SUPERCAR","Italy","Italian style meets exhilarating performance.","photo-1592198084033-aade902d1aae"],

  ["Ford Mustang GT","street","MUSCLE","United States","An American muscle-car classic.","photo-1584345604476-8ec5f452d1f2"],

  ["Bugatti Chiron","supercar","HYPERCAR","France","A landmark of luxury and engineering.","photo-1600712242805-5f78671b24da"],

  ["Mazda RX-7","jdm","JDM LEGEND","Japan","A cult classic known for rotary character.","photo-1552519507-da3b142c6e3d"],

  ["Dodge Challenger","street","MUSCLE","United States","Bold proportions and classic muscle attitude.","photo-1533473359331-0135ef1b58bf"],

  ["Honda NSX","jdm","JDM LEGEND","Japan","A precision-focused Japanese sports car.","photo-1492144534655-ae79c964c9d7"],

  ["Lamborghini Huracán","supercar","SUPERCAR","Italy","Sharp styling and a naturally aspirated V10.","photo-1511919884226-fd3cad34687c"],

  ["Audi R8","sports","SPORTS","Germany","Everyday usability with supercar character.","photo-1603584173870-7f23fdae1b7a"],

  ["Mercedes-AMG GT","street","GRAND TOURER","Germany","A refined grand tourer with serious pace.","photo-1618843479313-40f8afb4b4d8"],

  ["Subaru WRX STI","jdm","RALLY ICON","Japan","Rally-inspired performance for the road.","photo-1552519507-88aa2dfa9fdb"],

  ["Volkswagen Golf GTI","street","HOT HATCH","Germany","Compact, practical and fun to drive.","photo-1549317661-bd32c8ce0db2"],

  ["Chevrolet Corvette","sports","SPORTS","United States","A bold take on American performance.","photo-1552519507-cf9b7c3b2b1b"],

  ["Pagani Huayra","supercar","HYPERCAR","Italy","Handcrafted automotive art.","photo-1503736334956-4c8f8e92946d"],

  ["Mitsubishi Lancer Evolution","jdm","RALLY ICON","Japan","A rally-bred legend with all-wheel drive.","photo-1485291571150-772bcfc10da5"],

  ["Range Rover Sport","suv","LUXURY SUV","United Kingdom","Premium comfort with a commanding stance.","photo-1519641471654-76ce0107ad1b"],

  ["Toyota Land Cruiser","suv","OFF-ROAD","Japan","Built for long journeys and tough terrain.","photo-1519245659620-e859806a8d3b"],

  ["Koenigsegg Jesko","supercar","HYPERCAR","Sweden","Extreme engineering and dramatic design.","photo-1544636331-e26879cd4d9b"],

  ["Tesla Model S","street","ELECTRIC","United States","Electric performance and a minimalist cabin.","photo-1560958089-b8a1929cea89"],

  ["BMW M5","sports","PERFORMANCE SEDAN","Germany","Executive comfort with track-inspired pace.","photo-1556189250-72ba954cfc2b"],

  ["Porsche Cayenne","suv","PERFORMANCE SUV","Germany","Sports-car DNA in a practical SUV.","photo-1518987048-93e29699e79a"],

  ["Jaguar F-Type","sports","GRAND TOURER","United Kingdom","Sculpted design and a sporting spirit.","photo-1533473359331-0135ef1b58bf"],

  ["Aston Martin Vantage","sports","GRAND TOURER","United Kingdom","Elegant British design with athletic proportions.","photo-1544636331-e26879cd4d9b"],

  ["Aston Martin DB11","sports","GRAND TOURER","United Kingdom","Long-distance luxury with a sporting soul.","photo-1503376780353-7e6692767b70"],

  ["Ferrari SF90 Stradale","supercar","HYBRID SUPERCAR","Italy","Hybrid technology meets exotic performance.","photo-1592198084033-aade902d1aae"],

  ["Ferrari F40","supercar","CLASSIC SUPERCAR","Italy","An iconic celebration of lightweight speed.","photo-1492144534655-ae79c964c9d7"],

  ["Lamborghini Diablo","supercar","CLASSIC SUPERCAR","Italy","A dramatic supercar from an unforgettable era.","photo-1511919884226-fd3cad34687c"],

  ["Lamborghini Countach","supercar","CLASSIC SUPERCAR","Italy","Wedge-shaped design that changed supercars.","photo-1544829099-b9a0c07fad1a"],

  ["Porsche 918 Spyder","supercar","HYBRID SUPERCAR","Germany","A landmark hybrid performance machine.","photo-1503376780353-7e6692767b70"],

  ["Porsche 718 Cayman","sports","SPORTS","Germany","Balanced handling in a compact sports coupe.","photo-1503376780353-7e6692767b70"],

  ["Nissan Silvia S15","jdm","JDM LEGEND","Japan","A drift-culture favourite with classic lines.","photo-1614200187524-dc4b892acf16"],

  ["Nissan Skyline R34","jdm","JDM LEGEND","Japan","A legendary name in tuner-car culture.","photo-1614200187524-dc4b892acf16"],

  ["Honda Civic Type R","jdm","HOT HATCH","Japan","Track-focused engineering in a practical shape.","photo-1552519507-da3b142c6e3d"],

  ["Toyota GR86","jdm","SPORTS COUPE","Japan","Lightweight fun and rear-wheel-drive balance.","photo-1621135802920-133df287f89c"],

  ["Toyota AE86","jdm","CLASSIC JDM","Japan","A compact icon with a huge enthusiast following.","photo-1621135802920-133df287f89c"],

  ["Mazda MX-5 Miata","sports","ROADSTER","Japan","Open-top driving and lightweight handling.","photo-1552519507-da3b142c6e3d"],

  ["Lexus LFA","supercar","SUPERCAR","Japan","Rare craftsmanship and a celebrated V10.","photo-1492144534655-ae79c964c9d7"],

  ["Lexus LC 500","sports","GRAND TOURER","Japan","Sculptural styling and refined performance.","photo-1492144534655-ae79c964c9d7"],

  ["Acura NSX","sports","HYBRID SPORTS","Japan","A modern performance take on a famous name.","photo-1492144534655-ae79c964c9d7"],

  ["Infiniti Q60","street","SPORTS COUPE","Japan","Sleek coupe styling for everyday roads.","photo-1555215695-3004980ad54e"],

  ["Dodge Charger","street","MUSCLE","United States","A muscular sedan with unmistakable presence.","photo-1533473359331-0135ef1b58bf"],

  ["Chevrolet Camaro ZL1","street","MUSCLE","United States","Track-ready muscle with bold styling.","photo-1552519507-cf9b7c3b2b1b"],

  ["Dodge Viper","sports","AMERICAN SPORTS","United States","A raw, dramatic American sports car.","photo-1552519507-cf9b7c3b2b1b"],

  ["Ford GT","supercar","SUPERCAR","United States","A racing-inspired shape built for performance.","photo-1584345604476-8ec5f452d1f2"],

  ["Ford Focus RS","street","HOT HATCH","United States","A practical hatchback with rally attitude.","photo-1549317661-bd32c8ce0db2"],

  ["Chevrolet Camaro SS","street","MUSCLE","United States","Classic muscle-car looks and V8 character.","photo-1552519507-cf9b7c3b2b1b"],

  ["Mercedes-Benz C63 AMG","street","PERFORMANCE","Germany","A compact luxury car with a bold personality.","photo-1618843479313-40f8afb4b4d8"],

  ["Mercedes-Benz S-Class","street","LUXURY","Germany","A flagship focused on comfort and technology.","photo-1618843479313-40f8afb4b4d8"],

  ["Mercedes-Benz G-Class","suv","LUXURY SUV","Germany","Iconic shape with off-road heritage.","photo-1519641471654-76ce0107ad1b"],

  ["BMW M3","sports","SPORTS SEDAN","Germany","A performance sedan with a racing lineage.","photo-1555215695-3004980ad54e"],

  ["BMW i8","sports","HYBRID SPORTS","Germany","Futuristic styling and hybrid power.","photo-1556189250-72ba954cfc2b"],

  ["BMW Z4","sports","ROADSTER","Germany","Open-top cruising with sporty handling.","photo-1555215695-3004980ad54e"],

  ["Audi RS6 Avant","street","PERFORMANCE WAGON","Germany","Practical space meets high performance.","photo-1603584173870-7f23fdae1b7a"],

  ["Audi RS7","street","SPORTBACK","Germany","A sleek fastback with performance credentials.","photo-1603584173870-7f23fdae1b7a"],

  ["Audi Quattro","sports","RALLY ICON","Germany","A name forever tied to rally history.","photo-1603584173870-7f23fdae1b7a"],

  ["Toyota GR Yaris","jdm","HOT HATCH","Japan","Rally-inspired engineering in a compact package.","photo-1621135802920-133df287f89c"],

  ["Suzuki Swift Sport","street","HOT HATCH","Japan","Small, light and full of character.","photo-1549317661-bd32c8ce0db2"],

  ["Hyundai i30 N","street","HOT HATCH","South Korea","A lively hatchback designed for driving fun.","photo-1549317661-bd32c8ce0db2"],

  ["Kia Stinger GT","street","SPORTS SEDAN","South Korea","A fastback with grand-touring character.","photo-1555215695-3004980ad54e"],

  ["Genesis G70","street","SPORTS SEDAN","South Korea","Premium design with a sporty focus.","photo-1555215695-3004980ad54e"],

  ["Volvo V60 Polestar","street","PERFORMANCE WAGON","Sweden","Understated design with a performance edge.","photo-1556189250-72ba954cfc2b"],

  ["Polestar 2","street","ELECTRIC","Sweden","Minimalist electric design and modern technology.","photo-1560958089-b8a1929cea89"],

  ["Rimac Nevera","supercar","ELECTRIC HYPERCAR","Croatia","Electric power in an exotic hypercar form.","photo-1560958089-b8a1929cea89"],

  ["Lotus Emira","sports","SPORTS","United Kingdom","A driver-focused sports car with sculpted lines.","photo-1544636331-e26879cd4d9b"],

  ["Lotus Evija","supercar","ELECTRIC HYPERCAR","United Kingdom","A futuristic electric hypercar concept brought to life.","photo-1544636331-e26879cd4d9b"],

  ["Maserati MC20","supercar","SUPERCAR","Italy","Italian craftsmanship and mid-engine proportions.","photo-1592198084033-aade902d1aae"],

  ["Maserati GranTurismo","sports","GRAND TOURER","Italy","Elegant long-distance performance.","photo-1592198084033-aade902d1aae"],

  ["Alfa Romeo Giulia Quadrifoglio","street","SPORTS SEDAN","Italy","Italian flair with a performance focus.","photo-1555215695-3004980ad54e"],

  ["Pagani Zonda","supercar","HYPERCAR","Italy","An unmistakable blend of art and engineering.","photo-1503736334956-4c8f8e92946d"],

  ["Jeep Wrangler Rubicon","suv","OFF-ROAD","United States","A trail-focused SUV with classic Jeep character.","photo-1519641471654-76ce0107ad1b"],

  ["Ford Bronco","suv","OFF-ROAD","United States","Rugged styling made for adventure.","photo-1519641471654-76ce0107ad1b"],

  ["Toyota GR Corolla","jdm","HOT HATCH","Japan","A performance hatch built for enthusiastic driving.","photo-1621135802920-133df287f89c"],

  ["Honda S2000","jdm","ROADSTER","Japan","A high-revving roadster with a devoted following.","photo-1552519507-da3b142c6e3d"],

  ["Nissan 370Z","jdm","SPORTS COUPE","Japan","A classic front-engine sports coupe.","photo-1614200187524-dc4b892acf16"],

  ["Nissan 350Z","jdm","SPORTS COUPE","Japan","A modern classic with a strong tuner following.","photo-1614200187524-dc4b892acf16"],

  ["Toyota MR2","jdm","CLASSIC JDM","Japan","A compact mid-engine sports car.","photo-1621135802920-133df287f89c"],

  ["Mitsubishi 3000GT","jdm","CLASSIC JDM","Japan","A technology-packed Japanese grand tourer.","photo-1485291571150-772bcfc10da5"],

  ["Subaru BRZ","jdm","SPORTS COUPE","Japan","A lightweight rear-wheel-drive coupe.","photo-1552519507-da3b142c6e3d"],

  ["Ford Fiesta ST","street","HOT HATCH","United States","A small hatchback known for agile handling.","photo-1549317661-bd32c8ce0db2"],

  ["Mini Cooper S","street","HOT HATCH","United Kingdom","Compact dimensions and playful character.","photo-1549317661-bd32c8ce0db2"],

  ["Peugeot 508 PSE","street","HYBRID PERFORMANCE","France","A modern performance-oriented plug-in hybrid.","photo-1555215695-3004980ad54e"],

  ["Renault Megane RS","street","HOT HATCH","France","A hot hatch with a motorsport-inspired setup.","photo-1549317661-bd32c8ce0db2"],

  ["Dacia Duster","suv","SUV","Romania","A practical SUV with a rugged character.","photo-1519641471654-76ce0107ad1b"],

  ["KTM X-Bow","sports","TRACK CAR","Austria","A lightweight, open-cockpit track machine.","photo-1544636331-e26879cd4d9b"],

  ["BAC Mono","sports","TRACK CAR","United Kingdom","A single-seat road-legal track car.","photo-1544636331-e26879cd4d9b"],

  ["Ariel Atom","sports","TRACK CAR","United Kingdom","Minimal bodywork and a focus on driving.","photo-1544636331-e26879cd4d9b"],

  ["Caterham Seven","sports","ROADSTER","United Kingdom","A lightweight sports car with classic roots.","photo-1544636331-e26879cd4d9b"],

  ["Morgan Plus Six","sports","ROADSTER","United Kingdom","Traditional styling with modern performance.","photo-1503376780353-7e6692767b70"],

  ["Rolls-Royce Wraith","street","LUXURY","United Kingdom","A grand luxury coupe with a commanding presence.","photo-1618843479313-40f8afb4b4d8"],

  ["Bentley Continental GT","street","LUXURY GRAND TOURER","United Kingdom","Handcrafted comfort with grand-touring performance.","photo-1618843479313-40f8afb4b4d8"],

  ["Rolls-Royce Cullinan","suv","LUXURY SUV","United Kingdom","A luxury SUV with unmistakable presence.","photo-1519641471654-76ce0107ad1b"],

  ["Bentley Bentayga","suv","LUXURY SUV","United Kingdom","A premium SUV focused on comfort and refinement.","photo-1519641471654-76ce0107ad1b"],

  ["Ferrari Roma","sports","GRAND TOURER","Italy","Elegant Italian styling with modern performance.","photo-1592198084033-aade902d1aae"],

  ["Ferrari 812 Superfast","supercar","SUPERCAR","Italy","A front-engine V12 performance icon.","photo-1592198084033-aade902d1aae"],

  ["Lamborghini Revuelto","supercar","HYBRID SUPERCAR","Italy","A new era of V12 hybrid performance.","photo-1544829099-b9a0c07fad1a"],

  ["Chevrolet Silverado","suv","PICKUP","United States","A full-size pickup with bold proportions.","photo-1533473359331-0135ef1b58bf"],

  ["Ford F-150 Raptor","suv","OFF-ROAD PICKUP","United States","A high-performance truck made for rough terrain.","photo-1533473359331-0135ef1b58bf"],

  ["Dodge Ram TRX","suv","OFF-ROAD PICKUP","United States","A supercharged truck with serious presence.","photo-1533473359331-0135ef1b58bf"],

  ["GMC Hummer EV","suv","ELECTRIC SUV","United States","An electric off-roader with bold proportions.","photo-1560958089-b8a1929cea89"],

  ["Hyundai Ioniq 5 N","street","ELECTRIC PERFORMANCE","South Korea","Electric performance with a track-focused personality.","photo-1560958089-b8a1929cea89"],

  ["Kia EV6 GT","street","ELECTRIC PERFORMANCE","South Korea","Electric acceleration in a sleek crossover.","photo-1560958089-b8a1929cea89"],

  ["Lucid Air Sapphire","street","ELECTRIC PERFORMANCE","United States","Luxury electric performance with striking design.","photo-1560958089-b8a1929cea89"],

  ["BMW XM","suv","PERFORMANCE SUV","Germany","A bold performance SUV with a distinctive design.","photo-1519641471654-76ce0107ad1b"],

  ["Mercedes-AMG One","supercar","HYPERCAR","Germany","Formula-inspired hybrid technology for the road.","photo-1618843479313-40f8afb4b4d8"],

  ["Aston Martin Valkyrie","supercar","HYPERCAR","United Kingdom","Extreme aerodynamic design and track-focused engineering.","photo-1544636331-e26879cd4d9b"]

];



// Shuffle once per page load; order stays stable while searching/filtering.
const shuffledCars = [...cars];
for (let i = shuffledCars.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledCars[i], shuffledCars[j]] = [shuffledCars[j], shuffledCars[i]];
}

const soundSearchCache = new Map();
let currentEngineAudio = null;

const grid = document.getElementById("car-grid");

const searchInput = document.getElementById("car-search");

const filterButtons = [...document.querySelectorAll("[data-filter]")];

const resultStatus = document.getElementById("result-status");

const emptyState = document.getElementById("empty-state");

const loadMoreButton = document.getElementById("load-more");

const pageSize = 12;



let visibleCount = pageSize;

let searchTerm = "";

let activeFilter = "all";

let favourites = new Set(JSON.parse(localStorage.getItem("vgarage-favourites") || "[]"));



function safeText(value) {

  return String(value).replace(/[&<>"']/g, character => ({

    "&": "&amp;",

    "<": "&lt;",

    ">": "&gt;",

    '"': "&quot;",

    "'": "&#39;"

  })[character]);

}



function getFilteredCars() {

  return shuffledCars.filter(car => {

    const matchesSearch = car.join(" ").toLowerCase().includes(searchTerm);

    const matchesFilter = activeFilter === "all" || activeFilter === "favourites" || car[1] === activeFilter;

    const matchesFavourite = activeFilter !== "favourites" || favourites.has(car[0]);

    return matchesSearch && matchesFilter && matchesFavourite;

  });

}





async function loadCarImages() {

  const images = document.querySelectorAll("img[data-car-image]");



  for (const img of images) {

    if (img.dataset.imageLookupStarted === "true") continue;



    img.dataset.imageLookupStarted = "true";

    const carName = img.dataset.carImage;



    try {

      const searchUrl =

        "https://en.wikipedia.org/w/api.php" +

        "?action=query&generator=search" +

        "&gsrsearch=" + encodeURIComponent('"' + carName + '" car') +

        "&gsrnamespace=0&gsrlimit=5" +

        "&prop=pageimages&piprop=thumbnail&pithumbsize=900" +

        "&format=json&origin=*";



      const response = await fetch(searchUrl);

      if (!response.ok) throw new Error("Image search failed");



      const data = await response.json();

      const pages = Object.values(data.query?.pages || {});



      // Prefer a result whose title matches the car's name.

      const normalize = value =>

        value.toLowerCase().replace(/[^a-z0-9]/g, "");



      const exactMatch = pages.find(page =>

        normalize(page.title) === normalize(carName) &&

        page.thumbnail?.source

      );



      const imagePage =

        exactMatch || pages.find(page => page.thumbnail?.source);



      if (imagePage?.thumbnail?.source) {

        img.onerror = () => {

          img.onerror = null;

          img.src =

            "https://placehold.co/900x560/17191f/ffffff?text=" +

            encodeURIComponent(carName);

        };



        img.src = imagePage.thumbnail.source;

        img.alt = imagePage.title || carName;

      } else {

        img.src =

          "https://placehold.co/900x560/17191f/ffffff?text=" +

          encodeURIComponent(carName);

        img.alt = carName;

      }

    } catch (error) {

      console.warn("Could not find image for:", carName, error);

      img.src =

        "https://placehold.co/900x560/17191f/ffffff?text=" +

        encodeURIComponent(carName);

      img.alt = carName;

    }

  }

}





async function findOnlineEngineSound(carName) {

  if (soundSearchCache.has(carName)) {

    return soundSearchCache.get(carName);

  }



  try {

    // Search Wikimedia Commons using the car name itself.

    const params = new URLSearchParams({

      action: "query",

      list: "search",

      srsearch: `${carName} engine sound filetype:audio`,

      srnamespace: "6",

      srlimit: "50",

      format: "json",

      origin: "*"

    });



    const response = await fetch(

      `https://commons.wikimedia.org/w/api.php?${params}`

    );



    if (!response.ok) {

      throw new Error(`Wikimedia returned HTTP ${response.status}`);

    }



    const data = await response.json();

    const results = data.query?.search || [];



    // Look for audio files whose titles mention the requested car.



const normalize = text =>

  text.toLowerCase().replace(/[^a-z0-9]/g, "");



const wantedWords =

  carName.toLowerCase().match(/[a-z0-9]+/g) || [];



const candidates = results.filter(item => {

  const title = item.title || "";

  const normalizedTitle = normalize(title);



  const isAudioFile =

    /\.(ogg|oga|mp3|wav|flac)$/i.test(title);



  const hasCarName = wantedWords.some(word =>

    word.length > 2 && normalizedTitle.includes(word)

  );



  return isAudioFile && hasCarName;

});



    if (candidates.length === 0) {

      console.info(

        `No matching audio file found on Wikimedia Commons for ${carName}.`

      );

      soundSearchCache.set(carName, null);

      return null;

    }



    // Get the direct audio URL for the matching file.

    for (const candidate of candidates) {

      const fileParams = new URLSearchParams({

        action: "query",

        titles: candidate.title,

        prop: "imageinfo",

        iiprop: "url|extmetadata",

        format: "json",

        origin: "*"

      });



      const fileResponse = await fetch(

        `https://commons.wikimedia.org/w/api.php?${fileParams}`

      );



      if (!fileResponse.ok) continue;



      const fileData = await fileResponse.json();

      const pages = Object.values(fileData.query?.pages || {});

      const info = pages[0]?.imageinfo?.[0];



      if (!info?.url) continue;



      const result = {

        url: info.url,

        title: candidate.title,

        license:

          info.extmetadata?.LicenseShortName?.value || "Check license",

        source:

          "https://commons.wikimedia.org/wiki/" +

          encodeURIComponent(candidate.title.replace(/ /g, "\_"))

      };



      soundSearchCache.set(carName, result);

      return result;

    }



    soundSearchCache.set(carName, null);

    return null;

  } catch (error) {

    console.error(`Sound lookup failed for ${carName}:`, error);

    return null;

  }

}



async function playEngineSound(car) {

  if (currentEngineAudio) {

    currentEngineAudio.stop();

    currentEngineAudio = null;

  }



  const AudioCtx = window.AudioContext || window.webkitAudioContext;

  const ctx = new AudioCtx();

  await ctx.resume();



  const name = String(

    Array.isArray(car) ? car[0] :

    typeof car === "string" ? car :

    car?.name || car?.title || "Sports Car"

  );



  let hash = 0;

  for (const ch of name) {

    hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;

  }



  const master = ctx.createGain();

  const filter = ctx.createBiquadFilter();

  const osc1 = ctx.createOscillator();

  const osc2 = ctx.createOscillator();

  const lfo = ctx.createOscillator();

  const lfoGain = ctx.createGain();



  master.gain.value = 0.0001;

  filter.type = "lowpass";

  filter.frequency.value = 500;



  osc1.type = "sawtooth";

  osc2.type = "triangle";

  osc1.frequency.value = 65 + hash % 25;

  osc2.frequency.value = 130 + hash % 50;



  lfo.type = "sine";

  lfo.frequency.value = 0.7;

  lfoGain.gain.value = 22;



  lfo.connect(lfoGain);

  lfoGain.connect(osc1.frequency);



  osc1.connect(filter);

  osc2.connect(filter);

  filter.connect(master);

  master.connect(ctx.destination);



  osc1.start();

  osc2.start();

  lfo.start();



  master.gain.setTargetAtTime(0.13, ctx.currentTime, 0.15);



  // Simulate repeated acceleration and release.

  const revTimer = setInterval(() => {

    if (ctx.state === "closed") return;



    const rev = 75 + Math.random() * 100;

    osc1.frequency.setTargetAtTime(rev, ctx.currentTime, 0.12);

    osc2.frequency.setTargetAtTime(rev * 2, ctx.currentTime, 0.12);

    filter.frequency.setTargetAtTime(

      450 + Math.random() * 1500,

      ctx.currentTime,

      0.15

    );

  }, 900);



  let stopped = false;



  currentEngineAudio = {

    stop() {

      if (stopped) return;

      stopped = true;

      clearInterval(revTimer);



      master.gain.setTargetAtTime(

        0.0001, ctx.currentTime, 0.08

      );



      setTimeout(() => {

        try {

          osc1.stop();

          osc2.stop();

          lfo.stop();

          ctx.close();

        } catch (e) {}

      }, 350);

    }

  };



  console.log("Revving sound started:", name);

}



function showSoundMessage(message) {

  let status = document.getElementById("engine-sound-status");



  if (!status) {

    status = document.createElement("div");

    status.id = "engine-sound-status";

    status.setAttribute("role", "status");

    status.style.cssText =

      "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);" +

      "z-index:9999;background:#17191f;color:white;padding:12px 18px;" +

      "border-radius:10px;max-width:90%;font:14px sans-serif;";

    document.body.appendChild(status);

  }



  status.textContent = message;

  status.hidden = false;

}



function renderCars() {

  if (!grid) return;



  const filtered = getFilteredCars();



const shuffled = [...filtered].sort(() => Math.random() - 0.5);

const shown = shuffled.slice(0, visibleCount);





  grid.innerHTML = shown.map(car => {

    const [name, category, type, origin, description] = car;

    const isFavourite = favourites.has(name);

    const photoUrl = `https://images.unsplash.com/${car[5]}?auto=format&fit=crop&w=900&q=80`;



    return `

      <article class="car-card">

        <div class="car-image">

          <img

            src="${photoUrl}"

            data-car-image="${safeText(name)}"

            alt="${safeText(name)}"

            loading="lazy"

            onerror="this.onerror=null;this.src='https://placehold.co/900x560/17191f/ffffff?text='+encodeURIComponent('${safeText(name)}')"

          >

          <span class="car-number">${String(cars.indexOf(car) + 1).padStart(2, "0")}</span>

          <button class="favorite-btn" type="button" data-favorite="${safeText(name)}"

            aria-label="${isFavourite ? "Remove" : "Add"} ${safeText(name)} ${isFavourite ? "from" : "to"} favourites"

            aria-pressed="${isFavourite}">${isFavourite ? "♥" : "♡"}</button>

          <span class="image-tag">${safeText(type)}</span>

        </div>

        <div class="car-info">

          <div class="car-title-row"><h3>${safeText(name)}</h3><span class="card-arrow">↗</span></div>

          <p>${safeText(description)}</p>

          <div class="car-meta">

            <span>${safeText(origin.toUpperCase())}</span>

            <span>${String(cars.indexOf(car) + 1).padStart(2, "0")} / ${cars.length}</span>

          </div>

        </div>

      </article>`;

  }).join("");



  loadCarImages();



  if (resultStatus) {

    resultStatus.textContent = `Showing ${shown.length} of ${filtered.length} matching cars`;

  }



  if (emptyState) emptyState.hidden = filtered.length !== 0;

  if (loadMoreButton) {

    loadMoreButton.hidden = shown.length >= filtered.length || filtered.length === 0;

  }



  const collectionCount = document.getElementById("collection-count");

  const statCarCount = document.getElementById("stat-car-count");



  if (collectionCount) collectionCount.textContent = `COLLECTION — ${cars.length} CARS`;

  if (statCarCount) statCarCount.textContent = `${cars.length}+`;

}



searchInput?.addEventListener("input", event => {

  searchTerm = event.target.value.trim().toLowerCase();

  visibleCount = pageSize;

  renderCars();

});



filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    activeFilter = button.dataset.filter;

    visibleCount = pageSize;



    filterButtons.forEach(item => {

      const active = item === button;

      item.classList.toggle("active", active);

      item.setAttribute("aria-pressed", String(active));

    });



    renderCars();

  });

});



grid?.addEventListener("click", event => {

  const button = event.target.closest("[data-favorite]");



  if (button) {

    event.preventDefault();

    event.stopPropagation();



    const name = button.dataset.favorite;

    if (favourites.has(name)) favourites.delete(name);

    else favourites.add(name);



    localStorage.setItem("vgarage-favourites", JSON.stringify([...favourites]));

    renderCars();

    return;

  }



  const card = event.target.closest(".car-card");

  if (!card) return;



  const name = card.querySelector("h3")?.textContent?.trim();

  const car = cars.find(item => item[0] === name);



  if (car) {

    playEngineSound(car);

    openCarDetails(car);

  }

});



loadMoreButton?.addEventListener("click", () => {

  visibleCount += pageSize;

  renderCars();

});



document.getElementById("reset-filters")?.addEventListener("click", () => {

  searchTerm = "";

  activeFilter = "all";

  visibleCount = pageSize;

  if (searchInput) searchInput.value = "";



  filterButtons.forEach(button => {

    const active = button.dataset.filter === "all";

    button.classList.toggle("active", active);

    button.setAttribute("aria-pressed", String(active));

  });



  renderCars();

});



const menuToggle = document.getElementById("menu-toggle");

const mainNav = document.getElementById("main-nav");



menuToggle?.addEventListener("click", () => {

  const open = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(open));

  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");

});



mainNav?.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("open");

    menuToggle?.setAttribute("aria-expanded", "false");

  });

});



const yearElement = document.getElementById("year");

if (yearElement) yearElement.textContent = new Date().getFullYear();



if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  }, { threshold: 0.08 });



  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

} else {

  document.querySelectorAll(".reveal").forEach(element => element.classList.add("visible"));

}



// ===== CAR DETAILS MODAL =====

const carModal = document.getElementById("car-modal");

const modalImage = document.getElementById("modal-car-image");



const carSpecs = {

  "Porsche 911 Carrera": {

    engine: "3.0L twin-turbo flat-six",

    power: "379 hp",

    speed: "182 mph",

    drive: "Rear-wheel drive"

  },

  "Nissan GT-R R35": {

    engine: "3.8L twin-turbo V6",

    power: "565 hp",

    speed: "196 mph",

    drive: "All-wheel drive"

  },

  "Lamborghini Aventador": {

    engine: "6.5L naturally aspirated V12",

    power: "Varies by version",

    speed: "Varies by version",

    drive: "RWD or AWD, depending on version"

  }

};



function openCarDetails(car) {

  if (!carModal) return;



  const [name, category, type, origin, description] = car;



  const clickedCard = [...document.querySelectorAll(".car-card")].find(card =>

    card.querySelector("h3")?.textContent.trim() === name

  );



  const cardImage = clickedCard?.querySelector(".car-image img");

  const imageURL = cardImage?.src || "";



  const specs = carSpecs[name] || {

    engine: "Depends on model and year",

    power: "Check exact variant",

    speed: "Check exact variant",

    drive: "Depends on variant"

  };



  const modalName = document.getElementById("modal-car-name");

  const modalDescription = document.getElementById("modal-car-description");

  const specContainer = document.getElementById("modal-car-specs");



  if (modalName) modalName.textContent = name;

  if (modalDescription) modalDescription.textContent = description;



  if (modalImage) {

    modalImage.src = imageURL;

    modalImage.alt = name;

  }



  if (specContainer) {

    specContainer.innerHTML = "";



    [

      ["Engine", specs.engine],

      ["Horsepower", specs.power],

      ["Top speed", specs.speed],

      ["Drivetrain", specs.drive]

    ].forEach(([label, value]) => {

      const item = document.createElement("div");

      item.className = "spec-item";



      const title = document.createElement("span");

      title.textContent = label;



      const detail = document.createElement("strong");

      detail.textContent = value;



      item.append(title, detail);

      specContainer.appendChild(item);

    });

  }



  carModal.classList.add("open");

  carModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

}



function closeCarDetails() {

  if (!carModal) return;



  carModal.classList.remove("open");

  carModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}



carModal?.querySelectorAll("[data-close-modal]").forEach(element => {

  element.addEventListener("click", closeCarDetails);

});



document.addEventListener("keydown", event => {

  if (event.key === "Escape") closeCarDetails();

});



// Initial render

renderCars();



window.testGarageSound = async function () {

  try {

    const ctx = new AudioContext();

    await ctx.resume();



    const oscillator = ctx.createOscillator();

    const volume = ctx.createGain();



    oscillator.type = "sawtooth";

    oscillator.frequency.value = 120;

    volume.gain.value = 0.15;



    oscillator.connect(volume);

    volume.connect(ctx.destination);



    oscillator.start();



    setTimeout(() => {

      oscillator.stop();

      ctx.close();

    }, 1500);



    console.log("Garage audio test started:", ctx.state);

  } catch (error) {

    console.error("Garage audio test failed:", error);

  }

};



function stopEngineSound() {

  if (!currentEngineAudio) return;



  const audio = currentEngineAudio;

  currentEngineAudio = null;

  audio.stop();

}



async function toggleEngineSound(car) {

  if (currentEngineAudio) {

    stopEngineSound();

    console.log("Engine sound stopped");

    return;

  }



  await playEngineSound(car);

}
