const SteamLevel = require('./');

// Calculate the total XP given a Steam Level
console.log(SteamLevel.getTotalXpFromLevel(72)); // 29600

// Calculate the total amount XP required to rank up from a specific level
// For example, this would return the XP required to rank up from 72 to 73
console.log(SteamLevel.getRequiredXpFromLevel(72)); // 800
