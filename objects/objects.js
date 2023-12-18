function createComputer() {
  return (Computer = {
    cpu: "amd",
    gpu: "nvidia",
    ram: "32gb",
    dysk: "1tb",
  });
}

function createLaptop() {
  return (Laptop = {
    ...Computer,
    type: "laptop",
    weight: "2.5",
  });
}

console.log(createComputer());
console.log(createLaptop());

let country = {
  name: "Poland",
  population: 38_000_000,
  continent: "Europe",
  cities: ["Warszawa", "Kraków", "Poznań"],
  capital: {
    name: "Warszawa",
    population: 2000000,
  },
};

console.log(country());
