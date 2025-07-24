export type Answer = {
  text: string
  isCorrect: boolean
}
export type Question = {
  question: string
  answers: Answer[]
}

export const quiz: Question[] = [
  {
    question: "What is the best?",
    answers: [
      {
        text: "Smell of flowers in the morning",
        isCorrect: false,
      },
      {
        text: "Dancing in the moonlight",
        isCorrect: false,
      },
      {
        text: "Smile of an innocent child",
        isCorrect: false,
      },
      {
        text: "Creamy imperial stout from ancestral recipe, brewed in an oak barrel",
        isCorrect: true,
      },
    ],
  },
  {
    question: "What is the worst?",
    answers: [
      { text: "Drinking beer", isCorrect: false },
      { text: "Mining gold", isCorrect: false },
      { text: "Holding grudges", isCorrect: false },
      { text: "Leaf lovers' mere existence", isCorrect: true },
    ],
  },
  {
    question: "What to do with a hole?",
    answers: [
      { text: "Plant a tree in it", isCorrect: false },
      { text: "Pour concrete into it", isCorrect: false },
      { text: "Supervise it", isCorrect: false },
      { text: "Diggy diggy", isCorrect: true },
    ],
  },
]
