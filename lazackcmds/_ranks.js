global.rpg = {
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }

    const role = [
      { name: 'Initiate of the Arcane😺', level: 0 },
{ name: 'Adept of the Eldritch Path⭐', level: 5 },
{ name: 'Seeker of the Veiled Truths⚡🌀', level: 10 },
{ name: "Disciple of the Mystic Order⚓", level: 15 },
{ name: '🌌 Envoy of the Celestial Realms', level: 20 },
{ name: '🥷 Shadowmancer', level: 25 },
{ name: '⚔ Slayer of Forbidden Knowledge🏹', level: 30 },
{ name: '👑 Keeper of the Eternal Flame', level: 35 },
{ name: "🪄 Chosen of the Starborne", level: 40 },
{ name: '🐍 Whisperer of the Void', level: 45 },
{ name: '👹 Guardian of the Lost Realms', level: 50 },
{ name: '🧙‍♂️ Sage of the Arcane Arts', level: 60 },
{ name: '🧝‍♂️ Grandmaster of the Ethereal', level: 70 },
{ name: '🐲 Keeper of the Forgotten Lore', level: 80 },
{ name: '🔮 Lord of the Hidden Realms 🔮', level: 90 },
{ name: '🌌 Eternal Warden of the Cosmos 🌌', level: 100 },
    ]

    return role.reverse().find(role => level >= role.level)
  },
}
