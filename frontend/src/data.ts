const data: { puzzleNumber: number; words: string[] }[] = [
  
  { puzzleNumber: 858, words: ["snore", "heart","petri", "retry"] },
  { puzzleNumber: 857, words: ["still", "rouse","cause"] },
  { puzzleNumber: 856, words: ["minds", "nice","wizen", "vixen", "liven", "given"] },
  { puzzleNumber: 855, words: ["smack", "smirk"] },
  { puzzleNumber: 854, words: ["stack", "chore","occur"] },
  { puzzleNumber: 853, words: ["trail", "splat"] },
  { puzzleNumber: 852, words: ["teach", "mercy"] },
  { puzzleNumber: 849, words: ["chose", "graph"] },
  { puzzleNumber: 848, words: ["smith", "creed", "alone", "mealy", "leafy", "leaky"] },
  { puzzleNumber: 847, words: ["queen", "knelt", "scent", "agent"] },
  { puzzleNumber: 846, words: ["learn", "knelt", "ingle", "uncle"] },
  { puzzleNumber: 845, words: ["koans", "kneel", "knell", "knelt"] },
  { puzzleNumber: 844, words: ["grasp", "scone", "stint", "sunny","shuns", "skunk"] },
  { puzzleNumber: 843, words: ["worry", "seeds", "snail"] },
  { puzzleNumber: 842, words: ["eight", "froth", "wrath", "truth"] },
  { puzzleNumber: 841, words: ["wreak", "emote", "niche", "since", "binge"] },
  { puzzleNumber: 840, words: ["plugs", "molar", "labor", "atoll", "viola"] },
  { puzzleNumber: 839, words: ["spicy", "cried", "chime"] },
  { puzzleNumber: 838, words: ["fresh", "lunch", "bunch"] },
  { puzzleNumber: 837, words: ["wound", "acute", "spurt"] },
  { puzzleNumber: 836, words: ["mints", "ideal", "felix", "slice", "while"] },
  { puzzleNumber: 835, words: ["troth", "range", "piers", "berry", "ferry", "merry"] },
  { puzzleNumber: 834, words: ["bathe", "beets", "beget", "beret"] },
  { puzzleNumber: 833, words: ["outta", "apple", "marsh", "nanny", "caddy", "daddy"] },
  { puzzleNumber: 832, words: ["pocks", "could", "comby", "cover", "cocoa"] },
  { puzzleNumber: 831, words: ["leave", "lambs", "lilac", "local", "loyal"] },
  { puzzleNumber: 830, words: ["pours", "crowd", "carol"] },
  { puzzleNumber: 829, words: ["rainy", "gowns", "stone"] },
  { puzzleNumber: 828, words: ["still", "lunar", "polar", "clear"] },
  { puzzleNumber: 827, words: ["worry", "occur", "older"] },
  { puzzleNumber: 826, words: ["white", "skate", "route", "quote"] },
  { puzzleNumber: 825, words: ["years", "dolly", "lefty", "lumpy", "lucky"] },
  { puzzleNumber: 824, words: ["snows", "corse", "rouse"] },
  { puzzleNumber: 823, words: ["trunk", "poise", "bleed", "ideal", "dwell"] },
  { puzzleNumber: 822, words: ["ought", "sighs", "ghast", "gnash"] },
  { puzzleNumber: 821, words: ["ether", "brash", "birch"] },
  { puzzleNumber: 820, words: ["lungs", "bogey", "grimy", "giddy"] },
  { puzzleNumber: 819, words: ["query", "midst", "flail", "which", "boing", "onion"] },
  { puzzleNumber: 818, words: ["amaze", "plate", "scape", "space"] },
  { puzzleNumber: 817, words: ["pupil", "vined", "bride"] },
  { puzzleNumber: 801, words: ["story", "creed", "carer", "caper"] },
  { puzzleNumber: 800, words: ["based", "enter", "tripe", "write"] },
  { puzzleNumber: 799, words: ["shout", "pence", "peace"] },
  { puzzleNumber: 798, words: ["moody", "prone", "abort", "scour", "choir"] },
  { puzzleNumber: 797, words: ["habit", "plage", "cream", "ocean"] },
  { puzzleNumber: 796, words: ["prude", "cards", "wordy"] },
  { puzzleNumber: 795, words: ["weird", "feral", "merge", "verve"] },
  { puzzleNumber: 794, words: ["erupt", "penis", "spice"] },
  { puzzleNumber: 793, words: ["buyer", "beads", "beach"] },
  { puzzleNumber: 792, words: ["esses", "space", "wrest", "blest", "quest"] },
  {
    puzzleNumber: 791,
    words: ["leech", "moans", "madly", "marts", "magic", "magma"],
  },
  { puzzleNumber: 790, words: ["bambi", "float", "react", "exact"] },
  {
    puzzleNumber: 789,
    words: ["needs", "boils", "grits", "chips", "swiss", "amiss"],
  },
  { puzzleNumber: 788, words: ["stuck", "scour", "scrub"] },
  { puzzleNumber: 787, words: ["demur", "slide", "fiend", "inked", "index"] },
  { puzzleNumber: 786, words: ["polyp", "ready", "flaky", "snaky"] },
  { puzzleNumber: 785, words: ["since", "throw", "wrath"] },
  { puzzleNumber: 784, words: ["until", "quick"] },
  { puzzleNumber: 782, words: ["world", "scene", "pipet", "empty"] },
  { puzzleNumber: 781, words: ["tried", "cheer", "loner", "lover"] },
  {
    puzzleNumber: 780,
    words: ["conch", "radar", "fluff", "vulva", "gully", "bully"],
  },
  { puzzleNumber: 779, words: ["doors", "groom", "troop", "croon", "brook"] },
  { puzzleNumber: 778, words: ["video", "sonar", "folly", "polyp"] },
  { puzzleNumber: 777, words: ["ample", "arose", "atone", "anode"] },
  { puzzleNumber: 776, words: ["other", "third", "shart", "chart"] },
  { puzzleNumber: 775, words: ["forum", "parry", "party"] },
  { puzzleNumber: 774, words: ["niche", "strep", "valet", "beget"] },
  { puzzleNumber: 773, words: ["culch", "graph", "teeth", "tenth"] },
  { puzzleNumber: 772, words: ["wield", "scale", "stole", "style"] },
  { puzzleNumber: 771, words: ["magic", "baths", "bathe"] },
  { puzzleNumber: 770, words: ["relax", "lurid", "curly"] },
  { puzzleNumber: 769, words: ["modus", "ottos", "ethos"] },
  { puzzleNumber: 768, words: ["rebel", "point", "misos", "disco"] },
  { puzzleNumber: 767, words: ["pause", "weald", "meant", "react", "heart"] },
  { puzzleNumber: 766, words: ["legal", "cruel", "novel", "spiel", "wheel"] },
  { puzzleNumber: 765, words: ["court", "poled", "bongo", "wombs", "hobby"] },
  { puzzleNumber: 764, words: ["lance", "glade", "shale", "whale"] },
  { puzzleNumber: 763, words: ["which", "frogs", "froze"] },
  { puzzleNumber: 762, words: ["hobby", "bandy", "bigly", "burly"] },
  { puzzleNumber: 761, words: ["spoil", "bugle", "clank", "flank"] },
  { puzzleNumber: 760, words: ["verse", "chuck", "bacon", "tonic"] },
  { puzzleNumber: 759, words: ["dingo", "crest", "payer", "buyer", "flyer"] },
  { puzzleNumber: 758, words: ["doubt", "demon", "dinos", "droop"] },
  { puzzleNumber: 757, words: ["quest", "patio", "topaz"] },
  { puzzleNumber: 756, words: ["thigh", "prose", "drole", "crone"] },
  { puzzleNumber: 755, words: ["taxed", "blend", "fiend"] },
  { puzzleNumber: 754, words: ["event", "slake", "farce", "barge"] },
  { puzzleNumber: 753, words: ["usual", "towel", "whirl"] },
  { puzzleNumber: 752, words: ["reuse", "error", "egret", "earth"] },
  {
    puzzleNumber: 751,
    words: ["broke", "colas", "goldy", "holly", "jolly", "folly"],
  },
  { puzzleNumber: 750, words: ["mites", "rated", "noter", "enter"] },
  { puzzleNumber: 749, words: ["verse", "dream", "riper", "lower", "cower"] },
  { puzzleNumber: 746, words: ["major", "filed", "diddy", "windy"] },
  { puzzleNumber: 745, words: ["chink", "lanes", "tenor", "venom"] },
  { puzzleNumber: 744, words: ["being", "avert", "stoke", "toled", "hotel"] },
  {
    puzzleNumber: 743,
    words: ["total", "dodge", "bombs", "mousy", "mopsy", "mossy"],
  },
  { puzzleNumber: 742, words: ["being", "bored", "bases", "bleep"] },
  { puzzleNumber: 741, words: ["pored", "girls", "surfy", "straw"] },
  { puzzleNumber: 740, words: ["spend", "denim", "diner"] },
  { puzzleNumber: 739, words: ["foxes", "birch", "react", "tract"] },
  { puzzleNumber: 738, words: ["morel", "gloat", "about"] },
  { puzzleNumber: 737, words: ["known", "gists", "ghast", "geest", "guest"] },
  { puzzleNumber: 736, words: ["gelid", "fades", "ruder", "rodeo"] },
  { puzzleNumber: 735, words: ["prior", "dread", "brand", "grand"] },
  { puzzleNumber: 734, words: ["offer", "doted", "towel", "comet", "covet"] },
  {
    puzzleNumber: 733,
    words: ["block", "fugue", "waste", "paste", "haste", "taste"],
  },
  { puzzleNumber: 732, words: ["small", "wrack", "crate", "crane"] },
  { puzzleNumber: 731, words: ["vague", "crock", "troop", "droit", "frost"] },
  { puzzleNumber: 730, words: ["jetty", "lunch", "braid", "among", "kazoo"] },
  { puzzleNumber: 729, words: ["warps", "snoot", "shell", "shyly"] },
  { puzzleNumber: 728, words: ["vocal", "crass", "acrid", "ranch"] },
  { puzzleNumber: 727, words: ["visor", "rates", "start", "strap"] },
  { puzzleNumber: 726, words: ["trope", "lunge", "sieve", "cache", "maybe"] },
  { puzzleNumber: 725, words: ["found", "great", "price", "crime"] },
  { puzzleNumber: 724, words: ["doing", "leant", "clunk", "slunk", "plunk"] },
  { puzzleNumber: 723, words: ["busts", "gnarr", "prong", "wrong"] },
  { puzzleNumber: 722, words: ["human", "baron", "twain", "plain", "again"] },
  { puzzleNumber: 721, words: ["whose", "crash", "salsa", "balsa"] },
  { puzzleNumber: 720, words: ["raise", "porch", "torch", "lurch", "crumb"] },
  { puzzleNumber: 719, words: ["pitch", "lathe", "hater"] },
  { puzzleNumber: 718, words: ["aorta", "melds", "fugue", "ennui"] },
  { puzzleNumber: 715, words: ["bulky", "brand", "beats", "beast"] },
  { puzzleNumber: 714, words: ["veldt", "chunk", "irony", "fanny", "nanny"] },
  { puzzleNumber: 713, words: ["hoary", "heeds", "humid"] },
  {
    puzzleNumber: 712,
    words: ["point", "barfy", "mashy", "daddy", "gauzy", "jazzy"],
  },
  { puzzleNumber: 711, words: ["elide", "smile", "guile", "agile"] },
  { puzzleNumber: 710, words: ["quirt", "shoes", "panel", "kneel"] },
  { puzzleNumber: 709, words: ["fight", "clove", "dorse", "mouse"] },
  { puzzleNumber: 708, words: ["skips", "brunt", "bleed", "bagel"] },
  {
    puzzleNumber: 707,
    words: ["queue", "fizzy", "droid", "iotas", "inbox", "igloo"],
  },
  { puzzleNumber: 706, words: ["steak", "basis", "brash"] },
  { puzzleNumber: 700, words: ["creep", "night", "flays", "flask"] },
  { puzzleNumber: 698, words: ["grift", "adore", "scorn", "sworn", "shorn"] },
  { puzzleNumber: 697, words: ["miser", "tough", "pally", "plaza", "plank"] },
  { puzzleNumber: 696, words: ["sprog", "field", "unlet", "metal", "latte"] },
  { puzzleNumber: 695, words: ["bagel", "taste", "paire", "mauve", "canoe"] },
  { puzzleNumber: 694, words: ["yield", "frogs", "scarf"] },
  { puzzleNumber: 693, words: ["scree", "acron", "acrid"] },
  { puzzleNumber: 692, words: ["proto", "niche", "chunk", "snack"] },
  { puzzleNumber: 691, words: ["waits", "round", "chore", "grovy", "broom"] },
  { puzzleNumber: 690, words: ["chart", "ethic"] },
  { puzzleNumber: 689, words: ["treat", "ahold", "wacko", "socia", "cocoa"] },
  { puzzleNumber: 688, words: ["plank", "balot", "agloo", "aglow"] },
  { puzzleNumber: 687, words: ["north", "macho", "helos", "ahold", "ghoul"] },
  { puzzleNumber: 686, words: ["testy", "place", "added", "anger"] },
  {
    puzzleNumber: 685,
    words: ["fubar", "broke", "boney", "begot", "bebop", "below"],
  },
  { puzzleNumber: 684, words: ["tenor", "plaid", "puffy", "guppy"] },
  { puzzleNumber: 683, words: ["avert", "prune", "ridge", "dorse", "horde"] },
  { puzzleNumber: 682, words: ["skips", "stank", "smoke", "sulky"] },
  { puzzleNumber: 680, words: ["inter", "dough", "sappy", "plack", "plaza"] },
  { puzzleNumber: 679, words: ["dream", "redan", "cedar"] },
  { puzzleNumber: 678, words: ["crowd", "cater", "cigar", "circa"] },
  { puzzleNumber: 677, words: ["bilge", "guilt", "igloo", "logic"] },
  { puzzleNumber: 676, words: ["tears", "petri", "metro"] },
  {
    puzzleNumber: 675,
    words: ["deign", "erase", "morel", "voter", "power", "joker"],
  },
  { puzzleNumber: 674, words: ["decaf", "drips", "dilly", "dight", "ditto"] },
  { puzzleNumber: 673, words: ["boast", "liked", "fungi", "unity", "unzip"] },
  {
    puzzleNumber: 672,
    words: ["livid", "fresh", "error", "crone", "trope", "broke"],
  },
  { puzzleNumber: 671, words: ["would", "skips", "hacky", "kayak"] },
  { puzzleNumber: 670, words: ["bundt", "trick", "atoll", "lasts", "plate"] },
  { puzzleNumber: 669, words: ["press", "apply", "chimp", "thump"] },
  { puzzleNumber: 668, words: ["grass", "flown", "notch", "honey", "hound"] },
  { puzzleNumber: 667, words: ["stiff", "cliff", "griff", "whiff"] },
  { puzzleNumber: 666, words: ["games", "blend", "dwell", "dwelt"] },
  { puzzleNumber: 665, words: ["brine", "stung", "gland", "agony"] },
  { puzzleNumber: 664, words: ["rerun", "piped", "fries", "thief"] },
  { puzzleNumber: 662, words: ["bones", "board", "boral", "borax"] },
  { puzzleNumber: 661, words: ["style", "qualm"] },
  { puzzleNumber: 657, words: ["swear", "diner", "nuder", "under"] },
  { puzzleNumber: 656, words: ["power", "elect", "leave", "leans", "leafy"] },
  { puzzleNumber: 655, words: ["moors", "small", "smash"] },
  { puzzleNumber: 654, words: ["primp", "rider", "ratio"] },
  { puzzleNumber: 653, words: ["inter", "proud", "rooks", "glory", "flora"] },
  { puzzleNumber: 652, words: ["suede", "sonar", "stool", "stows", "stock"] },
  { puzzleNumber: 651, words: ["train", "polar", "razes", "march"] },
  { puzzleNumber: 648, words: ["preps", "stole", "asset", "inset", "beset"] },
  {
    puzzleNumber: 644,
    words: ["visit", "glade", "frown", "purry", "curry", "hurry"],
  },
  { puzzleNumber: 643, words: ["train", "crust", "grout"] },
  { puzzleNumber: 642, words: ["slang", "staid"] },
  { puzzleNumber: 641, words: ["group", "quilt", "bundt", "duvet"] },
  { puzzleNumber: 640, words: ["revel", "sacks", "downy", "tough"] },
  { puzzleNumber: 639, words: ["paint", "frogs", "glove"] },
  { puzzleNumber: 638, words: ["stole", "owned", "defog", "credo"] },
  { puzzleNumber: 637, words: ["bored", "stuck", "catty", "yacht"] },
  { puzzleNumber: 636, words: ["video", "fresh", "table", "mealy"] },
  { puzzleNumber: 635, words: ["bloop", "crude", "cedar", "cider"] },
  { puzzleNumber: 634, words: ["evens", "yeesh", "sleet", "sweep"] },
  { puzzleNumber: 633, words: ["ghast", "poops", "surly"] },
  { puzzleNumber: 632, words: ["disco", "plane", "flame", "blame"] },
  { puzzleNumber: 631, words: ["woops", "death", "mirth", "girth", "birth"] },
  { puzzleNumber: 629, words: ["would", "later", "riles", "repel", "revel"] },
  { puzzleNumber: 628, words: ["maven", "slice", "probe", "there", "where"] },
  { puzzleNumber: 627, words: ["bough", "angle", "regal"] },
  { puzzleNumber: 626, words: ["bread", "score", "horse"] },
  { puzzleNumber: 625, words: ["right", "pines", "pinny", "pinky"] },
  {
    puzzleNumber: 624,
    words: ["cafes", "block", "occur", "tonic", "topic", "toxic"],
  },
  { puzzleNumber: 623, words: ["plant", "trine", "trend"] },
  {
    puzzleNumber: 622,
    words: ["crook", "blame", "pains", "assay", "squad", "squat"],
  },
  { puzzleNumber: 621, words: ["stoic", "broke", "abode", "above"] },
  { puzzleNumber: 618, words: ["delay", "emote", "biome", "moose"] },
  { puzzleNumber: 617, words: ["going", "rowed", "bouts", "cooky", "polka"] },
  { puzzleNumber: 616, words: ["robot", "corgi", "pored", "worse"] },
  { puzzleNumber: 615, words: ["meter", "ruins", "spurt", "syrup"] },
  { puzzleNumber: 614, words: ["boots", "wrath", "petty", "nifty", "fifty"] },
  { puzzleNumber: 613, words: ["shard", "array", "arbor"] },
  { puzzleNumber: 612, words: ["about", "malus", "vague"] },
  {
    puzzleNumber: 611,
    words: ["tarry", "error", "refer", "rider", "river", "riser", "riper"],
  },
  {
    puzzleNumber: 610,
    words: ["whole", "bunny", "puffy", "sucky", "dummy", "ruddy"],
  },
  {
    puzzleNumber: 609,
    words: ["tacos", "shone", "moose", "gloss", "dross", "kiosk"],
  },
  { puzzleNumber: 608, words: ["fully", "latch", "altar", "avail"] },
  { puzzleNumber: 607, words: ["algae", "brave", "taste", "cache"] },
  { puzzleNumber: 606, words: ["salty", "dared", "manic", "magic"] },
  { puzzleNumber: 605, words: ["fiber", "plant", "lacks", "sally", "salsa"] },
  { puzzleNumber: 604, words: ["brink", "thong", "mound", "pound", "sound"] },
  { puzzleNumber: 603, words: ["tummy", "round", "laugh", "usage"] },
  { puzzleNumber: 602, words: ["baggy", "grail", "giant"] },
  {
    puzzleNumber: 601,
    words: ["tired", "deeps", "death", "delve", "defog", "debug"],
  },
  {
    puzzleNumber: 600,
    words: ["tango", "place", "deads", "ready", "beady", "heady"],
  },
  { puzzleNumber: 599, words: ["scowl", "shear", "sated", "stage"] },
  { puzzleNumber: 598, words: ["elbow", "glitz", "plaid", "flair"] },
  { puzzleNumber: 597, words: ["crate", "abode", "apple"] },
  { puzzleNumber: 596, words: ["wrong", "sneak", "punty", "linty", "ninth"] },
  { puzzleNumber: 595, words: ["cargo", "batch", "fancy", "dance"] },
  {
    puzzleNumber: 594,
    words: ["scour", "whump", "guide", "unity", "until", "unlit"],
  },
  {
    puzzleNumber: 593,
    words: ["under", "chill", "smoky", "gassy", "pasty", "tasty"],
  },
  { puzzleNumber: 592, words: ["sicks", "scalp", "scold"] },
  { puzzleNumber: 591, words: ["gulps", "fares", "stirs", "cross"] },
  { puzzleNumber: 590, words: ["boxer", "drive", "grave", "crave"] },
  { puzzleNumber: 589, words: ["stall", "guise", "winos", "dishy", "fishy"] },
  { puzzleNumber: 588, words: ["worse", "guard", "churn", "flirt"] },
  { puzzleNumber: 587, words: ["rifts", "array", "lorry", "worry"] },
  {
    puzzleNumber: 586,
    words: ["jazzy", "gurdy", "whiny", "peppy", "felty", "beefy"],
  },
  { puzzleNumber: 585, words: ["minor", "mails", "maize"] },
  { puzzleNumber: 584, words: ["proud", "touts", "count"] },
  { puzzleNumber: 583, words: ["sleep", "elate", "elope", "elude"] },
  { puzzleNumber: 582, words: ["bosun", "grimy", "meany", "mazey", "matey"] },
  { puzzleNumber: 581, words: ["float", "glide", "plumb", "blurb"] },
  { puzzleNumber: 580, words: ["repel", "ulcer", "alter"] },
  { puzzleNumber: 578, words: ["brits", "rodeo", "chard"] },
  { puzzleNumber: 577, words: ["build", "apode", "adopt"] },
  { puzzleNumber: 576, words: ["maths", "groin", "drove", "frock"] },
  { puzzleNumber: 575, words: ["flows", "sneer", "spire"] },
  { puzzleNumber: 574, words: ["hinge", "droop", "vocal", "loams", "koala"] },
  { puzzleNumber: 573, words: ["kempt", "lambs", "woman", "adman", "human"] },
  { puzzleNumber: 571, words: ["anime", "eager", "peats", "leapt"] },
  { puzzleNumber: 570, words: ["scant", "sneak", "sedan"] },
  { puzzleNumber: 569, words: ["tired", "piece", "pixie"] },
  { puzzleNumber: 568, words: ["sorry", "adore", "opera"] },
  { puzzleNumber: 567, words: ["sword", "ponce", "ovine", "melon", "lemon"] },
  { puzzleNumber: 566, words: ["scrat", "guild", "libel", "belie"] },
  { puzzleNumber: 565, words: ["awake", "keeps", "sleek"] },
  { puzzleNumber: 564, words: ["offal", "layed", "layer"] },
  { puzzleNumber: 563, words: ["clink", "niche", "panic", "antic"] },
  { puzzleNumber: 562, words: ["train", "first", "shirt", "skirt"] },
  { puzzleNumber: 561, words: ["klutz", "drive", "swine", "whine"] },
  { puzzleNumber: 560, words: ["haste", "valor", "gaily", "wally", "manly"] },
  { puzzleNumber: 559, words: ["knave", "iotas", "polar", "molar"] },
  { puzzleNumber: 556, words: ["tower", "dough", "foods", "mondo", "condo"] },
  {
    puzzleNumber: 555,
    words: ["poops", "frack", "delve", "midge", "nudge", "budge", "judge"],
  },
  {
    puzzleNumber: 554,
    words: ["groom", "chart", "intra", "sutra", "tetra", "extra"],
  },
  { puzzleNumber: 553, words: ["power", "podge", "posse", "poise"] },
  {
    puzzleNumber: 552,
    words: ["gouge", "dorky", "coral", "forma", "sorta", "porta", "iorta"],
  },
  { puzzleNumber: 551, words: ["mason", "fried", "bevel", "wheel", "excel"] },
  { puzzleNumber: 550, words: ["hoist", "crude", "furry", "augur", "lunar"] },
  { puzzleNumber: 549, words: ["winch", "heigh", "shirk", "third"] },
  {
    puzzleNumber: 545,
    words: ["focus", "avoid", "growl", "tromp", "prone", "probe"],
  },
  { puzzleNumber: 544, words: ["hotel", "drill", "rival"] },
  { puzzleNumber: 543, words: ["chomp", "grade", "lunas", "usual"] },
  { puzzleNumber: 542, words: ["nerve", "badge", "slice", "smote", "spoke"] },
  { puzzleNumber: 541, words: ["knell", "scalp", "apply"] },
  { puzzleNumber: 540, words: ["grand", "lanes", "eaten", "naive"] },
  { puzzleNumber: 539, words: ["piano", "donor", "flown", "snobs", "knock"] },
  { puzzleNumber: 538, words: ["learn", "roars", "fraud", "braid"] },
  { puzzleNumber: 537, words: ["focus", "after", "infer"] },
  { puzzleNumber: 536, words: ["train", "emote", "gothy", "doubt", "joust"] },
  { puzzleNumber: 535, words: ["dross", "blurt", "rebar", "caber", "amber"] },
  { puzzleNumber: 534, words: ["blink", "knots", "wonky", "woken"] },
  { puzzleNumber: 533, words: ["snowy", "float", "abode", "adore"] },
  { puzzleNumber: 532, words: ["droop", "torso"] },
  { puzzleNumber: 531, words: ["clogs", "chart", "champ", "chafe"] },
  { puzzleNumber: 530, words: ["phage", "error", "ennui", "elect", "eject"] },
  {
    puzzleNumber: 529,
    words: ["trash", "stoop", "stuck", "stung", "stuff", "studs", "study"],
  },
  { puzzleNumber: 528, words: ["wreck", "feint", "boned", "nudes", "undue"] },
  { puzzleNumber: 527, words: ["break", "depth", "tepid"] },
  { puzzleNumber: 526, words: ["chaos", "alpha", "happy"] },
  { puzzleNumber: 525, words: ["alloy", "blade", "pleat", "clear", "clean"] },
  { puzzleNumber: 524, words: ["faked", "blows", "unity", "pithy", "itchy"] },
  { puzzleNumber: 523, words: ["feast"] },
  { puzzleNumber: 522, words: ["lunge", "chore", "arise", "tribe", "drive"] },
  {
    puzzleNumber: 521,
    words: ["buggy", "fixed", "snipe", "prize", "price", "prime"],
  },
  { puzzleNumber: 520, words: ["couch", "groan", "ovals", "patio", "axiom"] },
  { puzzleNumber: 519, words: ["today", "walks", "crazy", "brave"] },
  {
    puzzleNumber: 518,
    words: ["eerie", "creed", "shear", "opera", "alert", "avert"],
  },
  { puzzleNumber: 517, words: ["skill", "blade", "clout", "glyph"] },
  { puzzleNumber: 516, words: ["wield", "scene", "there"] },
  {
    puzzleNumber: 515,
    words: ["froze", "reels", "tired", "waver", "caper", "maker", "baker"],
  },
  { puzzleNumber: 514, words: ["bogey", "crush", "stark", "snarl"] },
  { puzzleNumber: 513, words: ["month", "murky", "maple"] },
  { puzzleNumber: 512, words: ["brunt", "plank", "deans", "inane"] },
  { puzzleNumber: 511, words: ["chain", "break", "maple", "valet"] },
  { puzzleNumber: 510, words: ["vegan", "pedal", "medal"] },
  { puzzleNumber: 509, words: ["color", "shift", "taiga", "unite"] },
  { puzzleNumber: 508, words: ["jazzy", "lanky", "nappy", "rainy"] },
  { puzzleNumber: 507, words: ["frock", "thine", "gales", "swell", "spell"] },
  { puzzleNumber: 506, words: ["botch", "biker", "beige", "begin"] },
  { puzzleNumber: 505, words: ["dream", "angel", "leash", "scale", "stale"] },
  { puzzleNumber: 504, words: ["again", "drape", "dread", "dream"] },
  { puzzleNumber: 503, words: ["frown", "chomp", "photo"] },
  { puzzleNumber: 502, words: ["knife", "growl", "sloth", "blood", "aloud"] },
  { puzzleNumber: 501, words: ["spoon", "plant", "inept"] },
  {
    puzzleNumber: 500,
    words: ["onion", "night", "pinch", "pined", "pines", "piney"],
  },
  { puzzleNumber: 499, words: ["hyped", "porky", "spicy", "aptly"] },
  { puzzleNumber: 498, words: ["every", "laugh", "waltz"] },
  { puzzleNumber: 497, words: ["fight", "diode", "riven", "piles", "libel"] },
  { puzzleNumber: 496, words: ["crash", "sauna", "sedan", "sneak"] },
  { puzzleNumber: 495, words: ["storm", "quark", "faire", "carry"] },
  {
    puzzleNumber: 494,
    words: ["grief", "folds", "flown", "flock", "float", "flout"],
  },
  { puzzleNumber: 493, words: ["cloth", "roads", "women", "boggy", "foggy"] },
  { puzzleNumber: 492, words: ["porch", "built", "adult", "fault"] },
  { puzzleNumber: 491, words: ["spank", "butte", "guild", "humor", "mummy"] },
  { puzzleNumber: 490, words: ["later", "dowel", "spiel"] },
  { puzzleNumber: 489, words: ["fluff", "adopt", "crone", "grove"] },
  { puzzleNumber: 488, words: ["haunt", "noise", "pined", "denim"] },
  {
    puzzleNumber: 487,
    words: ["allay", "tooth", "verve", "rigid", "primp", "quirk"],
  },
  { puzzleNumber: 486, words: ["foggy", "quell", "strep", "dents", "exist"] },
  { puzzleNumber: 485, words: ["doing", "fines", "skein", "stein"] },
  { puzzleNumber: 484, words: ["ditzy", "words", "spade"] },
  { puzzleNumber: 483, words: ["gorge", "sunny", "cliff", "catch"] },
  { puzzleNumber: 482, words: ["mound", "ovary", "grope", "riots", "floor"] },
  { puzzleNumber: 480, words: ["clued", "aback", "mimic", "ionic"] },
  { puzzleNumber: 479, words: ["clots", "ralph", "dally", "valid"] },
];

export default data;
