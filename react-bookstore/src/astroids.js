const today = new Date().toISOString().slice(0, 10);
const key = "ntCGac2VL2nHzmwkAmdQR32YGoxUesyHzkvlwZjW";
const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=${key}`;

class Asteroid {
  constructor(isHazardous, distance, speed, size) {
    this.isHazardous = isHazardous;
    this.distance = distance;
    this.speed = speed;
    this.size = size;
  }

  static async getAsteroids() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const asteroids = data.near_earth_objects[today];
      asteroids.map(function (element) {
        //console.log(element);
        let approach = element.close_approach_data[0];
        let distance = approach.miss_distance.kilometers;
        let speed = approach.relative_velocity.kilometers_per_hour;
        let size = element.estimated_diameter.meters.estimated_diameter_max;
        let hazard = element.is_potentially_hazardous_asteroid;
        console.log(
          `Hazard: ${hazard} Distance: ${distance} km Speed: ${speed} km/h Size: ${size} m `
        );

        let asteroid = new Asteroid(hazard, distance, speed, size);
        asteroid.placeAsteroid();
      });
      //console.log(asteroids);
    } catch (error) {
      console.log(error);
    }
  }

  placeAsteroid() {
    let asteroidElement = document.createElement("a");
    asteroidElement.textContent = "*";
    asteroidElement.className += "asteroid";

    this.#setSize(asteroidElement);
    this.#setDistance(asteroidElement);
    this.#setSpeed(asteroidElement);
    this.#setHazard(asteroidElement);

    let solarSystem = document.getElementById("solar-system");
    this.#append(solarSystem, asteroidElement);
    this.#targetAsteroid(asteroidElement);
  }

  #append(parent, el) {
    parent.appendChild(el);
  }
  #setDistance(asteroidElement) {
    asteroidElement.style.marginLeft = this.distance / 100000 + "px";
  }
  #setSize(asteroidElement) {
    if (this.size > 100) {
      this.size = this.size / 10;
    }
    asteroidElement.style.fontSize = this.size + "px";
  }
  #setSpeed(asteroidElement) {
    if (this.speed > 50000) {
      asteroidElement.className += " speed-high";
    } else if (this.speed > 25000) {
      asteroidElement.className += " speed-medium";
    } else {
      asteroidElement.className += " speed-low";
    }
  }
  #setHazard(asteroidElement) {
    if (this.isHazardous === true) {
      asteroidElement.className += " hazardous";
    }
  }
  #targetAsteroid(asteroidElement) {
    asteroidElement.addEventListener("click", this.#boom);
  }

  #boom() {
    this.innerHTML = '<span class="boom">BOOM!!!</span>';
  }
}

Asteroid.getAsteroids();
