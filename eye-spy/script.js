const gameContainer = document.getElementById('game-container');
const messageEl = document.getElementById('message');
const newRoundBtn = document.getElementById('new-round');
const hintBtn = document.getElementById('hint-btn');
const confettiCanvas = document.getElementById('confetti-overlay');
const ctx = confettiCanvas.getContext('2d');

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

// 100+ kid-friendly emojis with hints (removed word as hint, kept only descriptors)
const emojiData = [
  // Fruits
  {emoji: "🍎", word: "apple", hints: ["fruit", "red", "round"]},
  {emoji: "🍌", word: "banana", hints: ["fruit", "yellow", "long"]},
  {emoji: "🍇", word: "grapes", hints: ["fruit", "purple", "small"]},
  {emoji: "🍉", word: "watermelon", hints: ["fruit", "green/red", "large"]},
  {emoji: "🍓", word: "strawberry", hints: ["fruit", "red", "seeds outside"]},
  {emoji: "🍒", word: "cherries", hints: ["fruit", "red", "small"]},
  {emoji: "🍍", word: "pineapple", hints: ["fruit", "yellow", "spiky"]},
  {emoji: "🥝", word: "kiwi", hints: ["fruit", "green", "brown outside"]},
  {emoji: "🥭", word: "mango", hints: ["fruit", "orange", "sweet"]},
  {emoji: "🥑", word: "avocado", hints: ["fruit", "green", "creamy"]},
  {emoji: "🍋", word: "lemon", hints: ["fruit", "yellow", "sour"]},
  {emoji: "🍊", word: "orange", hints: ["fruit", "orange", "citrus"]},
  {emoji: "🍐", word: "pear", hints: ["fruit", "green", "bell-shaped"]},
  {emoji: "🍏", word: "apple", hints: ["fruit", "green", "crisp"]},
  {emoji: "🍈", word: "melon", hints: ["fruit", "green", "round"]},
  {emoji: "🥥", word: "coconut", hints: ["fruit", "brown", "hard shell"]},
  {emoji: "🍑", word: "peach", hints: ["fruit", "orange", "fuzzy"]},
  {emoji: "🥔", word: "potato", hints: ["vegetable", "brown", "starchy"]},

  // Vegetables
  {emoji: "🥕", word: "carrot", hints: ["vegetable", "orange", "long"]},
  {emoji: "🌽", word: "corn", hints: ["vegetable", "yellow", "cob"]},
  {emoji: "🥦", word: "broccoli", hints: ["vegetable", "green", "tree-like"]},
  {emoji: "🥒", word: "cucumber", hints: ["vegetable", "green", "long"]},
  {emoji: "🍅", word: "tomato", hints: ["vegetable", "red", "round"]},
  {emoji: "🍄", word: "mushroom", hints: ["vegetable", "fungus", "cap"]},
  {emoji: "🥬", word: "lettuce", hints: ["vegetable", "green", "leafy"]},
  {emoji: "🥯", word: "bagel", hints: ["food", "round", "bread"]},
  {emoji: "🫑", word: "pepper", hints: ["vegetable", "green/red", "spicy"]},
  {emoji: "🧄", word: "garlic", hints: ["vegetable", "white", "pungent"]},
  {emoji: "🧅", word: "onion", hints: ["vegetable", "round", "layers"]},

  // Animals
  {emoji: "🦄", word: "unicorn", hints: ["mythical", "magical", "horn"]},
  {emoji: "🦁", word: "lion", hints: ["animal", "wild", "mane"]},
  {emoji: "🐯", word: "tiger", hints: ["animal", "striped", "feline"]},
  {emoji: "🐸", word: "frog", hints: ["animal", "green", "amphibian"]},
  {emoji: "🐼", word: "panda", hints: ["animal", "black/white", "bear"]},
  {emoji: "🐨", word: "koala", hints: ["animal", "cute", "marsupial"]},
  {emoji: "🐰", word: "rabbit", hints: ["animal", "white", "long ears"]},
  {emoji: "🐹", word: "hamster", hints: ["animal", "small", "pet"]},
  {emoji: "🐤", word: "chick", hints: ["animal", "yellow", "baby bird"]},
  {emoji: "🐦", word: "bird", hints: ["animal", "wings", "small"]},
  {emoji: "🐧", word: "penguin", hints: ["animal", "black/white", "cold"]},
  {emoji: "🐢", word: "turtle", hints: ["animal", "green", "shell"]},
  {emoji: "🐍", word: "snake", hints: ["animal", "green", "slithers"]},
  {emoji: "🦖", word: "T-Rex", hints: ["dinosaur", "prehistoric", "large"]},
  {emoji: "🦕", word: "dinosaur", hints: ["prehistoric", "long neck", "large"]},
  {emoji: "🦋", word: "butterfly", hints: ["insect", "colorful", "wings"]},
  {emoji: "🐞", word: "ladybug", hints: ["insect", "red", "spots"]},
  {emoji: "🐝", word: "bee", hints: ["insect", "yellow/black", "honey"]},
  {emoji: "🦑", word: "squid", hints: ["sea animal", "tentacles", "ink"]},
  {emoji: "🐙", word: "octopus", hints: ["sea animal", "tentacles", "intelligent"]},
  {emoji: "🐠", word: "fish", hints: ["orange", "small", "swims"]},
  {emoji: "🐟", word: "fish", hints: ["blue", "small", "swims"]},
  {emoji: "🐡", word: "pufferfish", hints: ["spiky", "fish", "inflates"]},
  {emoji: "🦀", word: "crab", hints: ["sea animal", "red", "claws"]},
  {emoji: "🦞", word: "lobster", hints: ["sea animal", "red", "claws"]},
  {emoji: "🦐", word: "shrimp", hints: ["sea animal", "small", "pink"]},
  {emoji: "🦢", word: "swan", hints: ["bird", "white", "graceful"]},
  {emoji: "🦩", word: "flamingo", hints: ["bird", "pink", "long legs"]},
  {emoji: "🐴", word: "horse", hints: ["animal", "brown", "fast"]},
  {emoji: "🐎", word: "horse", hints: ["animal", "fast", "mane"]},
  {emoji: "🐫", word: "camel", hints: ["animal", "desert", "hump"]},
  {emoji: "🦙", word: "llama", hints: ["animal", "cute", "wool"]},
  {emoji: "🐑", word: "sheep", hints: ["animal", "white", "wool"]},
  {emoji: "🐖", word: "pig", hints: ["animal", "pink", "mud"]},
  {emoji: "🐂", word: "ox", hints: ["animal", "farm", "strong"]},
  {emoji: "🐃", word: "buffalo", hints: ["animal", "farm", "large"]},
  {emoji: "🐄", word: "cow", hints: ["animal", "spots", "milk"]},
  {emoji: "🦌", word: "deer", hints: ["animal", "forest", "antlers"]},
  {emoji: "🐕", word: "dog", hints: ["animal", "pet", "barks"]},
  {emoji: "🐩", word: "poodle", hints: ["animal", "pet", "curly hair"]},
  {emoji: "🐈", word: "cat", hints: ["animal", "pet", "meows"]},
  {emoji: "🐓", word: "chicken", hints: ["animal", "farm", "lays eggs"]},
  {emoji: "🦃", word: "turkey", hints: ["animal", "brown", "feathers"]},
  {emoji: "🕊️", word: "dove", hints: ["bird", "white", "peace"]},
  {emoji: "🐇", word: "rabbit", hints: ["animal", "cute", "hops"]},
  {emoji: "🦝", word: "raccoon", hints: ["animal", "grey", "masked"]},
  {emoji: "🦨", word: "skunk", hints: ["animal", "black/white", "odor"]},
  {emoji: "🦡", word: "badger", hints: ["animal", "forest", "burrows"]},
  {emoji: "🦦", word: "otter", hints: ["animal", "water", "playful"]},
  {emoji: "🦥", word: "sloth", hints: ["animal", "slow", "tree"]},
  {emoji: "🐁", word: "mouse", hints: ["animal", "small", "grey"]},
  {emoji: "🐀", word: "rat", hints: ["animal", "grey", "scavenger"]},
  {emoji: "🐿️", word: "squirrel", hints: ["animal", "tree", "nuts"]},
  {emoji: "🦔", word: "hedgehog", hints: ["animal", "spiky", "small"]},
  {emoji: "🦘", word: "kangaroo", hints: ["animal", "jump", "marsupial"]},

  // Flowers & Plants
  {emoji: "🍀", word: "clover", hints: ["plant", "green", "luck"]},
  {emoji: "🌸", word: "cherry blossom", hints: ["flower", "pink", "spring"]},
  {emoji: "🌼", word: "daisy", hints: ["flower", "yellow", "round"]},
  {emoji: "🌻", word: "sunflower", hints: ["flower", "yellow", "tall"]},
  {emoji: "🌺", word: "hibiscus", hints: ["flower", "red", "tropical"]},
  {emoji: "🌹", word: "rose", hints: ["flower", "red", "thorny"]},
  {emoji: "🥀", word: "wilted flower", hints: ["flower", "red", "dying"]},
  {emoji: "🌵", word: "cactus", hints: ["plant", "green", "spiky"]},
  {emoji: "🌲", word: "tree", hints: ["plant", "green", "tall"]},
  {emoji: "🌳", word: "tree", hints: ["plant", "green", "leafy"]},
  {emoji: "🌴", word: "palm tree", hints: ["plant", "green", "tropical"]},
  {emoji: "🌿", word: "leaf", hints: ["plant", "green", "small"]},
  {emoji: "🍂", word: "leaf", hints: ["plant", "brown", "fall"]},
  {emoji: "🍁", word: "maple leaf", hints: ["plant", "red", "Canada"]},

  // Weather & Sky
  {emoji: "☀️", word: "sun", hints: ["weather", "yellow", "bright"]},
  {emoji: "🌙", word: "moon", hints: ["night", "crescent", "sky"]},
  {emoji: "⭐", word: "star", hints: ["night", "yellow", "twinkle"]},
  {emoji: "⚡", word: "lightning", hints: ["weather", "flash", "electric"]},
  {emoji: "🌈", word: "rainbow", hints: ["weather", "colorful", "arc"]},
  {emoji: "☁️", word: "cloud", hints: ["weather", "white", "fluffy"]},
  {emoji: "🌧️", word: "rain", hints: ["weather", "cloud", "wet"]},
  {emoji: "⛄", word: "snowman", hints: ["snow", "white", "cold"]},
  {emoji: "🔥", word: "fire", hints: ["hot", "flame", "burn"]},
  {emoji: "💧", word: "water drop", hints: ["water", "blue", "liquid"]},
  {emoji: "🌊", word: "wave", hints: ["water", "blue", "ocean"]},

  // Food
  {emoji: "🍕", word: "pizza", hints: ["food", "cheese", "round"]},
  {emoji: "🍔", word: "burger", hints: ["food", "sandwich", "meat"]},
  {emoji: "🍟", word: "fries", hints: ["food", "potato", "crispy"]},
  {emoji: "🌭", word: "hotdog", hints: ["food", "sausage", "bun"]},
  {emoji: "🥪", word: "sandwich", hints: ["food", "lunch", "layers"]},
  {emoji: "🥗", word: "salad", hints: ["food", "green", "healthy"]},
  {emoji: "🍩", word: "donut", hints: ["dessert", "sweet", "round"]},
  {emoji: "🍪", word: "cookie", hints: ["dessert", "sweet", "baked"]},
  {emoji: "🍫", word: "chocolate", hints: ["dessert", "sweet", "brown"]},
  {emoji: "🍬", word: "candy", hints: ["dessert", "sweet", "small"]},
  {emoji: "🍭", word: "lollipop", hints: ["dessert", "sweet", "stick"]},
  {emoji: "🎂", word: "cake", hints: ["dessert", "birthday", "sweet"]},
  {emoji: "🧁", word: "cupcake", hints: ["dessert", "sweet", "small"]},

  // Fun & Objects
  {emoji: "🎈", word: "balloon", hints: ["party", "red", "float"]},
  {emoji: "🎁", word: "gift", hints: ["present", "box", "surprise"]},
  {emoji: "🚗", word: "car", hints: ["vehicle", "red", "wheels"]},
  {emoji: "🚕", word: "taxi", hints: ["vehicle", "yellow", "city"]},
  {emoji: "🚙", word: "SUV", hints: ["vehicle", "blue", "four wheels"]},
  {emoji: "🚌", word: "bus", hints: ["vehicle", "yellow", "public"]},
  {emoji: "🚎", word: "trolley", hints: ["vehicle", "red", "tracks"]},
  {emoji: "🏎️", word: "race car", hints: ["vehicle", "fast", "sport"]},
  {emoji: "🚓", word: "police car", hints: ["vehicle", "blue", "emergency"]},
  {emoji: "🚑", word: "ambulance", hints: ["vehicle", "white", "emergency"]},
  {emoji: "🚒", word: "fire truck", hints: ["vehicle", "red", "emergency"]},
  {emoji: "🚜", word: "tractor", hints: ["vehicle", "green", "farm"]},
  {emoji: "✈️", word: "plane", hints: ["vehicle", "fly", "wings"]},
  {emoji: "🚀", word: "rocket", hints: ["vehicle", "space", "launch"]},
  {emoji: "🛸", word: "UFO", hints: ["vehicle", "alien", "flying saucer"]},
  {emoji: "⛵", word: "sailboat", hints: ["vehicle", "water", "sails"]},
  {emoji: "🚤", word: "speedboat", hints: ["vehicle", "water", "fast"]},
  {emoji: "🛶", word: "canoe", hints: ["vehicle", "water", "paddle"]},
  {emoji: "🏰", word: "castle", hints: ["building", "medieval", "fortress"]},
  {emoji: "🏠", word: "house", hints: ["building", "home", "residence"]},
  {emoji: "🏡", word: "house", hints: ["building", "garden", "residence"]},
  {emoji: "🏫", word: "school", hints: ["building", "education", "learning"]},
  {emoji: "🏥", word: "hospital", hints: ["building", "health", "care"]},
  {emoji: "🏦", word: "bank", hints: ["building", "money", "finance"]},
  {emoji: "⛪", word: "church", hints: ["building", "religion", "worship"]},
  {emoji: "🕌", word: "mosque", hints: ["building", "prayer", "religion"]},
  {emoji: "🛤️", word: "train tracks", hints: ["transport", "railway", "metal"]},
  {emoji: "🌉", word: "bridge", hints: ["night", "river", "structure"]},
  {emoji: "🎡", word: "ferris wheel", hints: ["amusement", "fun", "round"]},
  {emoji: "🎢", word: "roller coaster", hints: ["amusement", "fun", "track"]},
  {emoji: "🎠", word: "carousel", hints: ["amusement", "fun", "horses"]},
  {emoji: "🏟️", word: "stadium", hints: ["sports", "crowd", "arena"]},
  {emoji: "🎪", word: "circus tent", hints: ["circus", "fun", "tent"]},
  {emoji: "🎭", word: "mask", hints: ["theater", "drama", "face"]},
  {emoji: "🎨", word: "paint", hints: ["colors", "art", "creative"]},
  {emoji: "🎹", word: "piano", hints: ["music", "instrument", "keys"]},
  {emoji: "🥁", word: "drum", hints: ["music", "instrument", "beat"]},
  {emoji: "🎷", word: "saxophone", hints: ["music", "instrument", "jazz"]},
  {emoji: "🎺", word: "trumpet", hints: ["music", "instrument", "brass"]},
  {emoji: "🎸", word: "guitar", hints: ["music", "instrument", "strings"]},
  {emoji: "🪕", word: "banjo", hints: ["music", "instrument", "strings"]},
  {emoji: "🎻", word: "violin", hints: ["music", "instrument", "bow"]},
  {emoji: "🎬", word: "clapperboard", hints: ["movie", "film", "set"]},
  {emoji: "📚", word: "books", hints: ["study", "learn", "read"]},
  {emoji: "📝", word: "note", hints: ["write", "paper", "memo"]},
  {emoji: "📖", word: "book", hints: ["read", "open", "pages"]},
  {emoji: "💡", word: "idea", hints: ["light", "bright", "inspiration"]},
  {emoji: "🔑", word: "key", hints: ["lock", "metal", "open"]},
  {emoji: "🔨", word: "hammer", hints: ["tool", "fix", "metal"]},
  {emoji: "⛏️", word: "pickaxe", hints: ["tool", "mine", "metal"]},
  {emoji: "⚒️", word: "hammer & pick", hints: ["tool", "work", "metal"]},
  {emoji: "🪓", word: "axe", hints: ["tool", "cut", "wood"]},
  {emoji: "🔧", word: "wrench", hints: ["tool", "fix", "metal"]},
  {emoji: "🪛", word: "screwdriver", hints: ["tool", "tighten", "metal"]},
  {emoji: "🔩", word: "nut & bolt", hints: ["tool", "metal", "fasten"]},
  {emoji: "⚙️", word: "gear", hints: ["machine", "metal", "rotate"]},
  {emoji: "🪜", word: "ladder", hints: ["climb", "steps", "tool"]},
  {emoji: "🛒", word: "shopping cart", hints: ["buy", "store", "wheels"]},
  {emoji: "🏀", word: "basketball", hints: ["sports", "ball", "orange"]},
  {emoji: "⚽", word: "soccer ball", hints: ["sports", "ball", "black/white"]},
  {emoji: "🏈", word: "football", hints: ["sports", "ball", "brown"]},
  {emoji: "⚾", word: "baseball", hints: ["sports", "ball", "white"]},
  {emoji: "🥎", word: "softball", hints: ["sports", "ball", "yellow"]},
  {emoji: "🎾", word: "tennis ball", hints: ["sports", "ball", "green"]},
  {emoji: "🏐", word: "volleyball", hints: ["sports", "ball", "white"]},
  {emoji: "🏉", word: "rugby ball", hints: ["sports", "ball", "brown"]},
  {emoji: "🥏", word: "frisbee", hints: ["sports", "fly", "disk"]},
  {emoji: "🎯", word: "dartboard", hints: ["target", "bullseye", "game"]},
  {emoji: "🎳", word: "bowling ball", hints: ["ball", "pins", "game"]},
  {emoji: "🏹", word: "bow", hints: ["archery", "arrow", "shoot"]},
  {emoji: "🥊", word: "boxing glove", hints: ["fight", "sport", "hand"]},
  {emoji: "🥋", word: "martial arts uniform", hints: ["fight", "sport", "clothing"]},
  {emoji: "⛸️", word: "ice skates", hints: ["winter", "skates", "ice"]},
  {emoji: "🥌", word: "curling stone", hints: ["ice", "stone", "game"]},
  {emoji: "🎿", word: "ski", hints: ["winter", "snow", "sport"]},
  {emoji: "🛷", word: "sled", hints: ["winter", "snow", "ride"]},
  {emoji: "🥇", word: "gold medal", hints: ["winner", "medal", "achievement"]},
  {emoji: "🥈", word: "silver medal", hints: ["second", "medal", "achievement"]},
  {emoji: "🥉", word: "bronze medal", hints: ["third", "medal", "achievement"]},

  // More Food & Drinks
  {emoji: "🍷", word: "wine", hints: ["drink", "red", "glass"]},
  {emoji: "🍺", word: "beer", hints: ["drink", "yellow", "foam"]},
  {emoji: "🥂", word: "champagne", hints: ["drink", "celebration", "glass"]},
  {emoji: "🍹", word: "cocktail", hints: ["drink", "sweet", "glass"]},
  {emoji: "☕", word: "coffee", hints: ["drink", "hot", "brown"]},
  {emoji: "🫖", word: "tea", hints: ["drink", "hot", "leaves"]},
  {emoji: "🥛", word: "milk", hints: ["drink", "white", "glass"]},
  {emoji: "🧃", word: "juice", hints: ["drink", "orange", "glass"]},
  {emoji: "🍼", word: "baby bottle", hints: ["drink", "milk", "infant"]},
  {emoji: "🍽️", word: "plate", hints: ["table", "food", "round"]},
  {emoji: "🍴", word: "fork & knife", hints: ["utensil", "eat", "metal"]},
  {emoji: "🥄", word: "spoon", hints: ["utensil", "eat", "scoop"]},
  {emoji: "🥢", word: "chopsticks", hints: ["utensil", "eat", "Asian"]},

  // Emotions & Faces
  {emoji: "😀", word: "grinning face", hints: ["happy", "smile", "yellow"]},
  {emoji: "😂", word: "laughing face", hints: ["happy", "crying", "funny"]},
  {emoji: "😍", word: "heart eyes", hints: ["love", "happy", "heart"]},
  {emoji: "😢", word: "crying face", hints: ["sad", "tears", "blue"]},
  {emoji: "😎", word: "cool face", hints: ["happy", "sunglasses", "smile"]},
  {emoji: "😡", word: "angry face", hints: ["mad", "red", "frown"]},
  {emoji: "🤯", word: "mind blown", hints: ["surprised", "shock", "explosion"]},
  {emoji: "🤔", word: "thinking face", hints: ["question", "pensive", "hand on chin"]},
  {emoji: "😴", word: "sleeping face", hints: ["tired", "zzz", "rest"]},
  {emoji: "🥳", word: "party face", hints: ["celebration", "hat", "confetti"]},
  {emoji: "😇", word: "angel", hints: ["innocent", "halo", "smile"]},
  {emoji: "🤗", word: "hug", hints: ["friendly", "arms", "smile"]},
  {emoji: "🤪", word: "crazy face", hints: ["funny", "tongue", "eyes"]},
  {emoji: "😱", word: "scream", hints: ["scared", "hands", "wide eyes"]},
  {emoji: "🥺", word: "pleading face", hints: ["cute", "sad", "eyes"]},
  {emoji: "🤤", word: "drooling", hints: ["hungry", "food", "mouth"]},

  // Activities & Sports
  {emoji: "🏃", word: "running", hints: ["exercise", "move", "legs"]},
  {emoji: "🏊", word: "swimming", hints: ["water", "exercise", "arms"]},
  {emoji: "🚴", word: "cycling", hints: ["bike", "exercise", "wheels"]},
  {emoji: "🤸", word: "gymnastics", hints: ["flip", "exercise", "jump"]},
  {emoji: "🤾", word: "handball", hints: ["sport", "ball", "throw"]},
  {emoji: "🏋️", word: "weightlifting", hints: ["exercise", "weights", "strength"]},
  {emoji: "🤺", word: "fencing", hints: ["sport", "sword", "duel"]},
  {emoji: "🧘", word: "yoga", hints: ["exercise", "stretch", "relax"]},
  {emoji: "🏇", word: "horse racing", hints: ["sport", "animal", "speed"]},
  {emoji: "⛷️", word: "skiing", hints: ["snow", "sport", "cold"]},
  {emoji: "🏂", word: "snowboarding", hints: ["snow", "sport", "cold"]},

  // Transportation & Travel
  {emoji: "🚁", word: "helicopter", hints: ["air", "vehicle", "rotor"]},
  {emoji: "🛶", word: "canoe", hints: ["water", "paddle", "boat"]},
  {emoji: "🚢", word: "ship", hints: ["water", "travel", "large"]},
  {emoji: "🛳️", word: "cruise ship", hints: ["water", "luxury", "travel"]},
  {emoji: "🛥️", word: "motorboat", hints: ["water", "fast", "engine"]},
  {emoji: "🚤", word: "speedboat", hints: ["water", "fast", "fun"]},
  {emoji: "🚀", word: "rocket", hints: ["space", "launch", "vehicle"]},
  {emoji: "🛸", word: "UFO", hints: ["alien", "mysterious", "flying"]},

  // Nature & Outdoors
  {emoji: "🌋", word: "volcano", hints: ["mountain", "lava", "erupt"]},
  {emoji: "⛰️", word: "mountain", hints: ["tall", "rock", "climb"]},
  {emoji: "🏞️", word: "national park", hints: ["nature", "scenery", "outdoors"]},
  {emoji: "🏕️", word: "camping", hints: ["tent", "outdoors", "night"]},
  {emoji: "🏖️", word: "beach", hints: ["sand", "sea", "sun"]},
  {emoji: "🏜️", word: "desert", hints: ["sand", "hot", "dry"]},
  {emoji: "🌅", word: "sunrise", hints: ["morning", "sky", "light"]},
  {emoji: "🌄", word: "sunset", hints: ["evening", "sky", "orange"]},
  {emoji: "🌌", word: "milky way", hints: ["space", "stars", "night"]},
  {emoji: "🌠", word: "shooting star", hints: ["night", "wish", "sky"]},
  {emoji: "🌾", word: "rice field", hints: ["farm", "green", "plants"]},

  // Household & Objects
  {emoji: "🛏️", word: "bed", hints: ["sleep", "furniture", "rest"]},
  {emoji: "🛋️", word: "sofa", hints: ["furniture", "sit", "living room"]},
  {emoji: "🪑", word: "chair", hints: ["furniture", "sit", "wood"]},
  {emoji: "🛁", word: "bathtub", hints: ["bath", "water", "relax"]},
  {emoji: "🚪", word: "door", hints: ["open", "enter", "exit"]},
  {emoji: "🪟", word: "window", hints: ["glass", "see", "light"]},
  {emoji: "🛎️", word: "bell", hints: ["ring", "call", "sound"]},
  {emoji: "🧯", word: "fire extinguisher", hints: ["safety", "fire", "red"]},
  {emoji: "🧹", word: "broom", hints: ["clean", "sweep", "stick"]},
  {emoji: "🧺", word: "basket", hints: ["hold", "items", "round"]},
  {emoji: "🪣", word: "bucket", hints: ["hold", "water", "round"]},
  {emoji: "🧴", word: "lotion", hints: ["skin", "bottle", "soft"]},
  {emoji: "🧼", word: "soap", hints: ["clean", "bath", "lather"]},
  {emoji: "🪒", word: "razor", hints: ["shave", "hair", "blade"]},
  {emoji: "🧽", word: "sponge", hints: ["clean", "soft", "absorb"]},

  // Technology & Electronics
  {emoji: "💻", word: "laptop", hints: ["computer", "work", "screen"]},
  {emoji: "🖥️", word: "desktop computer", hints: ["computer", "monitor", "work"]},
  {emoji: "🖨️", word: "printer", hints: ["paper", "office", "machine"]},
  {emoji: "⌨️", word: "keyboard", hints: ["computer", "type", "keys"]},
  {emoji: "🖱️", word: "mouse", hints: ["computer", "click", "pointer"]},
  {emoji: "📱", word: "smartphone", hints: ["phone", "touch", "screen"]},
  {emoji: "📷", word: "camera", hints: ["photo", "lens", "picture"]},
  {emoji: "🎥", word: "video camera", hints: ["record", "movie", "lens"]},
  {emoji: "📺", word: "television", hints: ["screen", "watch", "show"]},
  {emoji: "🎙️", word: "microphone", hints: ["voice", "record", "sound"]},
  {emoji: "🎧", word: "headphones", hints: ["listen", "music", "ears"]},
  {emoji: "📡", word: "satellite dish", hints: ["signal", "antenna", "space"]},

  // Flags & Symbols
  {emoji: "🏴", word: "black flag", hints: ["color", "flag", "symbol"]},
  {emoji: "🏳️", word: "white flag", hints: ["peace", "flag", "symbol"]},
  {emoji: "🏳️‍🌈", word: "rainbow flag", hints: ["pride", "colors", "symbol"]},
  {emoji: "🚸", word: "pedestrian crossing", hints: ["road", "walk", "safety"]},
  {emoji: "⚠️", word: "warning", hints: ["sign", "caution", "alert"]},
  {emoji: "❌", word: "cross mark", hints: ["wrong", "no", "red"]},
  {emoji: "✔️", word: "check mark", hints: ["correct", "yes", "green"]},
  {emoji: "➕", word: "plus", hints: ["math", "add", "symbol"]},
  {emoji: "➖", word: "minus", hints: ["math", "subtract", "symbol"]},
  {emoji: "✖️", word: "multiply", hints: ["math", "x", "symbol"]},
  {emoji: "➗", word: "divide", hints: ["math", "slash", "symbol"]},

  // Miscellaneous
  {emoji: "🕰️", word: "clock", hints: ["time", "round", "hands"]},
  {emoji: "⏰", word: "alarm clock", hints: ["time", "ring", "bed"]},
  {emoji: "🗑️", word: "trash", hints: ["waste", "bin", "throw"]},
  {emoji: "🛠️", word: "tools", hints: ["fix", "repair", "metal"]},
  {emoji: "🧭", word: "compass", hints: ["direction", "navigation", "north"]},
  {emoji: "🧱", word: "brick", hints: ["build", "red", "wall"]},
  {emoji: "🗝️", word: "old key", hints: ["lock", "metal", "open"]},
  {emoji: "🧪", word: "test tube", hints: ["science", "chemistry", "liquid"]},
  {emoji: "⚗️", word: "flask", hints: ["science", "chemistry", "glass"]},
  {emoji: "🔬", word: "microscope", hints: ["science", "zoom", "tiny"]},
  {emoji: "🔭", word: "telescope", hints: ["space", "look", "stars"]},
  {emoji: "💎", word: "gem", hints: ["jewel", "sparkle", "valuable"]},
  {emoji: "⚓", word: "anchor", hints: ["boat", "metal", "stay"]},
  {emoji: "🧩", word: "puzzle piece", hints: ["game", "fit", "shape"]},
  {emoji: "🎯", word: "dartboard", hints: ["target", "bullseye", "game"]},
  {emoji: "🎮", word: "video game", hints: ["controller", "play", "fun"]},
  {emoji: "🕹️", word: "joystick", hints: ["game", "control", "move"]},
  {emoji: "💰", word: "money bag", hints: ["cash", "bag", "wealth"]},
  {emoji: "💳", word: "credit card", hints: ["money", "plastic", "pay"]},
  {emoji: "🧧", word: "red envelope", hints: ["gift", "money", "tradition"]},
  {emoji: "🎫", word: "ticket", hints: ["entry", "event", "pass"]},
  {emoji: "🔔", word: "bell", hints: ["ring", "sound", "alert"]},
  {emoji: "🎵", word: "music note", hints: ["sound", "song", "note"]},
  {emoji: "🎶", word: "musical notes", hints: ["song", "melody", "sound"]},
  {emoji: "💌", word: "love letter", hints: ["message", "heart", "mail"]},
  {emoji: "📩", word: "envelope", hints: ["mail", "letter", "send"]},
  {emoji: "📬", word: "inbox", hints: ["mail", "receive", "letter"]},
  {emoji: "📮", word: "mailbox", hints: ["mail", "post", "receive"]},
  {emoji: "✉️", word: "email", hints: ["letter", "send", "digital"]}
];


const NUM_BUTTONS = 9;
let targetEmoji = null;
let revealedHints = 0;

// Generate a new round
function newRound() {
  gameContainer.innerHTML = "";
  revealedHints = 0;

  // Select random target
  targetEmoji = emojiData[Math.floor(Math.random() * emojiData.length)];

  // Initial message with first letter of the word
  const firstLetter = targetEmoji.word[0].toUpperCase();
  messageEl.textContent = `I spy with my little eye, something beginning with ${firstLetter}...`;

  // Select buttons
  let buttonEmojis = [targetEmoji.emoji];
  while (buttonEmojis.length < NUM_BUTTONS) {
    const e = emojiData[Math.floor(Math.random() * emojiData.length)].emoji;
    if (!buttonEmojis.includes(e)) buttonEmojis.push(e);
  }

  // Shuffle
  buttonEmojis = buttonEmojis.sort(() => Math.random() - 0.5);

  buttonEmojis.forEach(emoji => {
    const btn = document.createElement('button');
    btn.textContent = emoji;
    btn.classList.add('emoji-btn');
    btn.addEventListener('click', () => handleClick(btn, emoji));
    gameContainer.appendChild(btn);
  });
}

// Handle click
function handleClick(btn, emoji) {
  if (emoji === targetEmoji.emoji) {
    showConfetti();
    messageEl.textContent = `🎉 You found it! ${emoji} (${targetEmoji.word}) 🎉`;
  } else {
    messageEl.textContent = `❌ Nope! Try again.`;
    btn.classList.add('disabled');
    btn.disabled = true;
  }
}

// Hint button
hintBtn.addEventListener('click', () => {
  if (revealedHints < targetEmoji.hints.length) {
    const hint = targetEmoji.hints[revealedHints];
    messageEl.textContent = `Hint: ${hint}`;
    revealedHints++;
  } else {
    messageEl.textContent = `No more hints!`;
  }
});

// New round
newRoundBtn.addEventListener('click', newRound);

// Confetti animation
function showConfetti() {
  confettiCanvas.style.display = "block";
  const confetti = [];
  const confettiCount = 200;

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * confettiCanvas.height,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncrement: Math.random() * 0.07 + 0.05
    });
  }

  let angle = 0;
  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach((c, i) => {
      ctx.beginPath();
      ctx.lineWidth = c.r / 2;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 4);
      ctx.stroke();
      c.tilt += c.tiltAngleIncrement;
      c.y += (Math.cos(angle + c.d) + 3 + c.r / 2) / 2;
      if (c.y > confettiCanvas.height) {
        confetti[i] = {
          x: Math.random() * confettiCanvas.width,
          y: -10,
          r: c.r,
          d: c.d,
          color: c.color,
          tilt: Math.floor(Math.random() * 10) - 10,
          tiltAngleIncrement: c.tiltAngleIncrement
        };
      }
    });
    angle += 0.01;
    requestAnimationFrame(draw);
  }
  draw();

  setTimeout(() => { confettiCanvas.style.display = "none"; }, 3000);
}

// Start first round
newRound();
