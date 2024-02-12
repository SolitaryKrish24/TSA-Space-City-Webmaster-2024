// Add interactive floating elements
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseover", function() {
    card.style.transform = "rotateY(180deg)";
  });
  card.addEventListener("mouseout", function() {
    card.style.transform = "rotateY(0deg)";
  });
});
// Add buttons to access more information

// Create more spinning cards in alignment
const cardContainer = document.querySelector(".card-container");
// Create individual cards
createCard("Solar Panels", "Photovoltaic solar panels convert sunlight into electricity. Costs vary depending on the size of the system but can be significant, typically ranging from $10,000 to $30,000 or more.", "images/solar.jpg?auto=webp&fit=crop&height=675&width=1200", "22-30% Tax Credit(vary upon year of purchase)");

createCard("Energy-Efficient Windows", "Energy-efficient windows reduce heat transfer and improve insulation, lowering energy bills. Costs vary depending on the type and size of windows but can range from a few hundred to a few thousand dollars per window.", "images/window.png?auto=webp&fit=crop&height=675&width=1200", "30% product cost + $600 Credit Amount");

createCard("Energy-Efficient Appliances", "Energy-efficient appliances consume less electricity or water, reducing utility costs. Costs vary depending on the appliance type and brand but may be slightly higher than conventional models.", "images/appliancesEpa.webp?auto=webp&fit=crop&height=675&width=1200", "$3200 on Tax Return");

createCard("LED Lighting", "LED light bulbs use less energy and last longer than traditional incandescent bulbs. While they may have a higher upfront cost, they save money in the long run due to lower energy consumption and replacement frequency.", "images/led.jpg?auto=webp&fit=crop&height=675&width=1200", "$5 deduction per square ft on Taxes");

createCard("Programmable Thermostats", "Programmable thermostats allow homeowners to schedule heating and cooling settings, optimizing energy usage. Costs vary but are generally affordable and can lead to significant energy savings over time.", "images/thermostat.jpg?auto=webp&fit=crop&height=675&width=1200", "percent back on Tax Credit");
createCard("Energy-Efficient HVAC Systems", "High-efficiency heating, ventilation, and air conditioning (HVAC) systems reduce energy consumption and improve comfort. Costs vary depending on the system size and efficiency rating but can be substantial.", "images/hvac.jpg?auto=webp&fit=crop&height=675&width=1200", "$1200 Tax Credit per year");
createCard("Solar Water Heaters", "Solar water heaters use sunlight to heat water, reducing energy consumption for hot water. Costs vary depending on system size and complexity but typically range from several thousand to tens of thousands of dollars.", "images/waterheaters.jpg?auto=webp&fit=crop&height=675&width=1200", "30% of cost on Tax Credit");
createCard("Insulation Upgrades", "Adding or improving insulation in walls, attics, and crawl spaces reduces heat loss and lowers energy bills. Costs vary ", "images/insulation.jpg?auto=webp&fit=crop&height=675&width=1200", "30% product cost + $1200 Credit Amount");
createCard("Energy-Efficient Roofing", "Reflective or cool roofing materials reduce heat absorption, lowering cooling costs in hot climates. Costs vary depending on the roofing material and size of the roof but can be comparable to traditional roofing materials.", "images/roofing.jpg?auto=webp&fit=crop&height=675&width=120", "%10 of cost return, up to $500 Credit");
createCard("Geothermal Heat Pumps", "Geothermal heat pumps use the earth's natural heat to provide heating, cooling, and hot water. Costs vary depending on system size and installation requirements but are typically higher than conventional HVAC systems.", "images/geothermal.jpg?auto=webp&fit=crop&height=675&width=1200", "22-30% Tax Credit");
createCard("Smart Home Technologies", "Smart thermostats, lighting controls, and home automation systems optimize energy usage and improve comfort. Costs vary depending on the technology and level of integration desired but are generally affordable.", "images/smartHome.jpg?auto=webp&fit=crop&height=675&width=1200", "30% of costs - up to $2,000 on Credit");

function createCard(title, info, imageUrl, tax) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  const newCardInner = document.createElement("div");
  newCardInner.classList.add("card-inner");
  const newCardFront = document.createElement("div");
  newCardFront.classList.add("card-front");
  newCardFront.style.backgroundImage = `url(${imageUrl})`;
  newCardFront.innerHTML = `<p><b>${title}</b></p>`;
  const newCardBack = document.createElement("div");
  newCardBack.classList.add("card-back");
  newCardBack.innerHTML = `<ul><b>${tax}</b></ul><ul>${info}</ul>`;
  newCardInner.appendChild(newCardFront);
  newCardInner.appendChild(newCardBack);
  newCard.appendChild(newCardInner);
  cardContainer.appendChild(newCard);
}