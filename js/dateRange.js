
// NOTE: You do not need to edit this file.

// NASA's APOD API only has images from June 16, 1995 onwards
const earliestDate = '1995-06-16';

// Get today's date in YYYY-MM-DD format (required by date inputs)
const today = new Date().toISOString().split('T')[0];

function setupDateInputs(startInput, endInput) {
  // Restrict date selection range from NASA's first image to today
  startInput.min = earliestDate;
  startInput.max = today;
  endInput.min = earliestDate;
  endInput.max = today;

  // Default: Show the most recent 9 days of space images
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 8); // minus 8 because it includes today
  startInput.value = lastWeek.toISOString().split('T')[0];
  endInput.value = today;

  // Automatically adjust end date to show exactly 9 days of images
  startInput.addEventListener('change', () => {
    const startDate = new Date(startInput.value);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 8);
    endInput.value = endDate > new Date(today) ? today : endDate.toISOString().split('T')[0];
  });
}
//wanted fun facts to be here because of how long it is
let funFacts = [
  {index: "1", fact: "A day on Venus is longer than a year on Venus."},
  {index: "2", fact: "The Sun makes up about 99.86% of the mass in our solar system."},
  {index: "3", fact: "Neutron stars are so dense that a teaspoon would weigh billions of tons."},
  {index: "4", fact: "There are more stars in the universe than grains of sand on Earth."},
  {index: "5", fact: "Jupiter has the shortest day of all the planets at about 10 hours."},
  {index: "6", fact: "Light from the Sun takes about 8 minutes to reach Earth."},
  {index: "7", fact: "Saturn could float in water because it is mostly made of gas."},
  {index: "8", fact: "Mars has the tallest volcano in the solar system, Olympus Mons."},
  {index: "9", fact: "One million Earths could fit inside the Sun."},
  {index: "10", fact: "The International Space Station is visible from Earth with the naked eye."},
  {index: "11", fact: "Pluto is smaller than the United States."},
  {index: "12", fact: "A year on Mercury is just 88 Earth days."},
  {index: "13", fact: "Black holes can stretch objects in a process called spaghettification."},
  {index: "14", fact: "The Milky Way galaxy is about 100,000 light-years across."},
  {index: "15", fact: "Astronauts grow slightly taller in space due to microgravity."},
  {index: "16", fact: "The Moon is slowly moving away from Earth each year."},
  {index: "17", fact: "A spacesuit costs about 12 million dollars."},
  {index: "18", fact: "There is a giant storm on Jupiter called the Great Red Spot."},
  {index: "19", fact: "The coldest place in the universe found so far is the Boomerang Nebula."},
  {index: "20", fact: "Footprints on the Moon can last for millions of years."},
  {index: "21", fact: "Mars sunsets appear blue instead of red."},
  {index: "22", fact: "The Voyager 1 spacecraft is the farthest human-made object from Earth."},
  {index: "23", fact: "A single solar flare can release energy equal to millions of nuclear bombs."},
  {index: "24", fact: "Saturn has at least 146 known moons."},
  {index: "25", fact: "The Moon has moonquakes caused by tidal forces."},
  {index: "26", fact: "Space is completely silent because there is no air for sound to travel."},
  {index: "27", fact: "The largest asteroid, Ceres, is also classified as a dwarf planet."},
  {index: "28", fact: "The Sun is actually white, but appears yellow from Earth."},
  {index: "29", fact: "The Hubble Space Telescope has captured images over 30 years."},
  {index: "30", fact: "Time moves slower near strong gravity, like near a black hole."},
  {index: "31", fact: "Earth is the only planet not named after a Roman or Greek god."},
  {index: "32", fact: "The Andromeda Galaxy is on a collision course with the Milky Way."},
  {index: "33", fact: "Astronauts must exercise daily to prevent muscle loss in space."},
  {index: "34", fact: "There are lakes of liquid methane on Saturn’s moon Titan."},
  {index: "35", fact: "The Sun will eventually become a red giant and expand."},
  {index: "36", fact: "Mars has seasons similar to Earth."},
  {index: "37", fact: "The fastest spacecraft ever launched is NASA’s Parker Solar Probe."},
  {index: "38", fact: "A light-year is a measure of distance, not time."},
  {index: "39", fact: "The Moon reflects only about 12% of sunlight."},
  {index: "40", fact: "There are more than 5,000 confirmed exoplanets."},
  {index: "41", fact: "The ISS travels at about 17,500 miles per hour."},
  {index: "42", fact: "A black hole’s gravity is so strong that not even light can escape."},
  {index: "43", fact: "Mercury has no atmosphere to trap heat."},
  {index: "44", fact: "The Sun’s core reaches about 27 million degrees Fahrenheit."},
  {index: "45", fact: "The largest known star, UY Scuti, is over 1,700 times bigger than the Sun."},
  {index: "46", fact: "Astronauts see about 16 sunrises and sunsets each day on the ISS."},
  {index: "47", fact: "Comets are made of ice, dust, and rocky material."},
  {index: "48", fact: "The Kuiper Belt lies beyond Neptune and contains many icy objects."},
  {index: "49", fact: "Gravity on Mars is about 38% of Earth’s gravity."},
  {index: "50", fact: "The universe is estimated to be about 13.8 billion years old."}
];