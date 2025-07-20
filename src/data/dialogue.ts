export type Dialogue = { id: string; text: string }

export const dialogue: Dialogue[] = [
  {
    id: "start",
    text: "Congratulations on signing on for Deep Rock Galactic, miner, and welcome on board. I am afraid we don’t have time for settling in, and have to dive straight into a crucial mission. We lost contact with four of our best agents during an attempt to retrieve an ancient Dwarven treasure. We think they got distracted and got lost one by one. You have to retrieve them ASAP - the planet Fornebu is known to be extremely hostile to any lifeforms.",
  },
  {
    id: "senshi",
    text: "Our first agent is known under the codename CHEF. Just before losing contact with him he was complaining about malnutrition and squad’s rations not being seasoned enough. We suspect he might’ve went to forage some local plants.",
  },
  {
    id: "driller",
    text: "Our second agent is known under the codename DRILLER. He was last seen drilling aimlessly into a wall, mumbling to himself about mushrooms and being rich. The entry to his tunnel had been spotted high up the ceiling of the cave, carved in a white limestone.",
  },
  {
    id: "earthwoman",
    text: "Our third agent is known under the codename EARTHWOMEN. She’s a baroness gone rogue, and she was last seen wandering deep in the caves, frantically yelling “MANDATE: MAKE CAGES”. Given how hostile the planet is, we would not be surprised if she stumbled upon a prison.",
  },
  {
    id: "slayer",
    text: "Our forth and last agent is known under the codename SLAYER. He is the group’s bodyguard, and at some point he had lost his axe, stuck in a head of some sturdy octopedal monster. He was last seen chasing the monster, attempting to retrieve his weapon.",
  },
  {
    id: "mission-02",
    text: "For a new recruit, your performance has proven more than adequate - you managed to rescue all of our agents, who were all far more experienced than you. Management believes you are ready to take on a new mission - retrieving the ancient dwarven treasure that almost became a demise for our agents. The position of the treasure had been triangulated under those coordinates: [ ] Given that agent DRILLER is currently indisposed, you will need to diggy the hole yourself. You will find a shovel",
  },
  {
    id: "mission-03",
    text: "This is it miner. The ancient dwarven treasure, for which many a dwarf gave its live. Its lock is protected by powerful dwarven magic, and the key will materialise only after you prove yourself worthy. You need to answer a couple of questions which test your knowledge about dwarven culture and its deepest secrets.",
  },
  {
    id: "final",
    text: "Congratulations! You have proven yourself to be an exceptional miner. We've thrown some of our harshest challenges at you and you're still in one piece, well, mostly. I invite you to celebrate your achievement in the Abyss Bar and drink to your heart’s contents!",
  },
]
