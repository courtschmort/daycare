export function getRandomName() {
  const names = ["Avery", "Riley", "Jordan", "Angel", "Parker", "Sawyer", "Peyton", "Quinn", "Taylor", "River", "Charlie", "Ellis", "Eden"];
  const random = Math.floor(Math.random()*names.length);
  return names[random];
}
