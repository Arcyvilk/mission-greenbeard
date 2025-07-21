export type Dwarf = {
  id: DwarfId
  codename: string
  coordinates: string
  imgSrc: string
  lastSeen: string
}

export type DwarfId = "chef" | "driller" | "baron" | "slayer"

export const dwarves: Dwarf[] = [
  {
    id: "chef",
    codename: "CHEF",
    coordinates: "dupa",
    imgSrc: "",
    lastSeen:
      "Just before losing contact with him he was complaining about malnutrition and squad’s rations not being seasoned enough. We suspect he might’ve went to forage some local plants.",
  },
  {
    id: "driller",
    codename: "DRILLER",
    coordinates: "dupa",
    imgSrc: "",
    lastSeen:
      "He was last seen drilling aimlessly into a wall, mumbling to himself about mushrooms and being rich. The entry to his tunnel had been spotted high up the ceiling of the cave, carved in a white limestone.",
  },
  {
    id: "baron",
    codename: "EARTHWOMAN",
    coordinates: "dupa",
    imgSrc: "",
    lastSeen:
      "She was last seen wandering deep in the caves, frantically yelling “MANDATE: MAKE CAGES”. Given how hostile the planet is, we would not be surprised if she stumbled upon a prison.",
  },
  {
    id: "slayer",
    codename: "SLAYER",
    coordinates: "dupa",
    imgSrc: "",
    lastSeen:
      "At some point he had lost his axe, stuck in a head of some sturdy octopedal monster. He was last seen chasing the monster, attempting to retrieve his weapon.",
  },
]
