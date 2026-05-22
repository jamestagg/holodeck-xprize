export type HolodeckWorld = {
  id: string;
  title: string;
  period: string;
  learningGoal: string;
  characters: string[];
  missions: string[];
};

export const seasonOneWorlds: HolodeckWorld[] = [
  {
    id: "apollo-11-mission-control",
    title: "Apollo 11: Mission Control",
    period: "July 1969",
    learningGoal: "Understand the coordination, risk, and engineering judgment behind the Moon landing.",
    characters: ["Flight Director", "Guidance Officer", "CAPCOM", "Systems Engineer"],
    missions: [
      "Diagnose a mission alarm under time pressure",
      "Explain tradeoffs between abort and continue decisions",
      "Summarize what made the landing possible"
    ]
  },
  {
    id: "alexandria-last-library",
    title: "Alexandria: The Last Library",
    period: "Hellenistic Egypt",
    learningGoal: "Explore how knowledge is collected, preserved, translated, and lost.",
    characters: ["Librarian", "Scholar", "Merchant", "Scribe"],
    missions: [
      "Classify newly arrived texts",
      "Resolve conflicting accounts from travelers",
      "Protect essential knowledge during a civic crisis"
    ]
  }
];

export function summarizeWorld(world: HolodeckWorld): string {
  return `${world.title} teaches: ${world.learningGoal}`;
}

