# Steam Level Calculator

This is a simple and super light weight library which can calculate the
required XP to level up and can calculate the total amount of XP given a level.

[Reference table](http://steamcommunity.com/sharedfiles/filedetails/?id=722062281)

## Usage

```js
const SteamLevel = require('steam-level');

// Calculate the total XP given a Steam Level
console.log(SteamLevel.getTotalXpFromLevel(72));

// Calculate the total amount XP required to rank up from a specific level
// For example, this would return the XP required to rank up from 72 to 73
console.log(SteamLevel.getRequiredXpFromLevel(72));
```
