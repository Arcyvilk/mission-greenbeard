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
    coordinates: "N503E377",
    imgSrc: "/assets/chef.png",
    lastSeen:
      "Just before losing contact with him he was complaining about malnutrition and squad’s rations not being seasoned enough. We've spotted a patch of local plants in the southern recess - we suspect he might’ve gone there to forage.",
  },
  {
    id: "driller",
    codename: "DRILLER",
    coordinates: "N539E221",
    imgSrc: "/assets/driller.png",
    lastSeen:
      "He was last seen drilling aimlessly into a wall, mumbling to himself about mushrooms and being rich. The entry to his tunnel had been spotted high up the ceiling of the cave, carved in a white limestone. It seems he plugged the entry before his descent.",
  },
  {
    id: "baron",
    codename: "EARTHWOMAN",
    coordinates: "N434E519",
    imgSrc: "/assets/baron.png",
    lastSeen:
      "She’s a baroness gone rogue, and she was last seen wandering deep in the caves, frantically yelling “MANDATE: MAKE CAGES”. Our radar spotted a metallic structure similar to a birdcage in the eastern part of the cave - it's likely she went in that direction.",
  },
  {
    id: "slayer",
    codename: "SLAYER",
    coordinates: "N499E480",
    imgSrc: "/assets/slayer.png",
    lastSeen:
      "He is the group’s bodyguard, and at some point he had lost his axe, stuck in a head of some sturdy octopedal monster. He was last seen chasing the monster around, attempting to retrieve his weapon.",
  },
]
