import { TREASURE_COORDINATES } from "./constants"

export type Dialogue = { id: string; text: string; conditions: string[] }

export const dialogue: Dialogue[] = [
  {
    id: "start",
    text: "Congratulations on signing on for Deep Rock Galactic, miner, and welcome on board. I am afraid we don’t have time for settling in, and have to dive straight into a crucial mission.",
    conditions: [],
  },
  {
    id: "start-02",
    text: "Four of our best agents suddenly went MIA during exploration of the biggest cave in the Lillerutsvei cave system. They were on a mission to retrieve an ancient Dwarven treasure - every one of them had a final piece of a puzzle needed to find the way. Just before the triangulation got completed, we lost contact.",
    conditions: [],
  },
  {
    id: "start-03",
    text: "All of them had shown symptoms of distractibility and dissociation shortly before their disappearance. You have to find ASAP - the planet Fornebu is known to be extremely hostile to any lifeforms.",
    conditions: [],
  },
  {
    id: "chef",
    text: "Our first agent is known under the codename CHEF. Just before losing contact with him he was complaining about malnutrition and squad’s rations not being seasoned enough. We've spotted a patch of local plants in the southern recess - we suspect he might’ve gone there to forage.",
    conditions: [],
  },
  {
    id: "driller",
    text: "Our second agent is known under the codename DRILLER. He was last seen drilling aimlessly into a wall, mumbling to himself about mushrooms and being rich. The entry to his tunnel had been spotted high up the ceiling of the cave, carved in a white limestone. It seems he plugged the entry before his descent.",
    conditions: [],
  },
  {
    id: "baron",
    text: "Our third agent is known under the codename EARTHWOMAN. She’s a baroness gone rogue, and she was last seen wandering deep in the caves, frantically yelling “MANDATE: MAKE CAGES”. Our radar spotted a metallic structure similar to a birdcage in the eastern part of the cave - it's likely she went in that direction.",
    conditions: [],
  },
  {
    id: "slayer",
    text: "Our forth and last agent is known under the codename SLAYER. He is the group’s bodyguard, and at some point he had lost his axe, stuck in a head of some sturdy octopedal monster. He was last seen chasing the monster around, attempting to retrieve his weapon.",
    conditions: [],
  },
  {
    id: "mission-01",
    text: "Go on! I will be waiting here.",
    conditions: ["found-chef", "found-driller", "found-baron", "found-slayer"],
  },
  {
    id: "new-recruit-01",
    text: "For a new recruit, your performance has proven more than adequate - you managed to rescue all of our agents, who were all far more experienced than you. Great job!",
    conditions: [],
  },
  {
    id: "new-recruit-02",
    text: `Management believes you are qualified to finish the mission started by your compatriots and retrieve the ancient dwarven treasure. The position of the treasure had been triangulated under those coordinates: ${TREASURE_COORDINATES}`,
    conditions: [],
  },
  {
    id: "new-recruit-03",
    text: "Given that agent DRILLER is currently indisposed, you will need to diggy the hole yourself. I am sure there is a shovel laying somewhere around...",
    conditions: [],
  },
  {
    id: "mission-02",
    text: "Once you retrieve the treasure, input the passcode found with it below.",
    conditions: ["found-treasure"],
  },
  {
    id: "treasure-01",
    text: "This is it miner. The ancient dwarven treasure, for which many a dwarf gave their lifes.",
    conditions: [],
  },
  {
    id: "treasure-02",
    text: "Its lock is protected by powerful dwarven magic, and the management is in a possession of the key. Even though you already achieved more than many of Deep Rock Galactic employees ever did, our procedures require you to pass a test to prove yourself a real dwarf.",
    conditions: [],
  },
  {
    id: "treasure-03",
    text: "Don't worry, I am sure you are already an expert on dwarven history and culture and this is just a formality.",
    conditions: [],
  },
  {
    id: "treasure-04",
    text: "Good luck!",
    conditions: ["passed-test"],
  },
  {
    id: "final-01",
    text: "Congratulations! You have proven yourself to be an exceptional miner. We've thrown some of our harshest challenges at you and you're still in one piece, well, mostly.",
    conditions: [],
  },
  {
    id: "final-02",
    text: "For convenience, the key to the treasure has been teleported under your mousepad. Feel free to keep the contents of the chest - you've earned it, miner.",
    conditions: [],
  },
  {
    id: "final-03",
    text: "To finish your first day with a bang, I invite you to the Abyss Bar and drink to your heart’s contents! Our fridge is full of cold beer.",
    conditions: [],
  },
    {
    id: "final-04",
    text: "HAPPY BIRTHDAY!",
    conditions: ['byebye'],
  },
]
