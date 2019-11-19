export function getRandomName() {
  const names = ["Avery", "Riley", "Jordan", "Angel", "Parker", "Sawyer", "Peyton", "Quinn", "Taylor"];
  const random = Math.floor(Math.random()*names.length);
  return names[random];
}
