const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

document.addEventListener('DOMContentLoaded', () => {
  const carsScript = document.querySelector('#cars_template').innerHTML;
  const carScript = document.querySelector('#car_template').innerHTML
  const filterScript = document.querySelector('#filters_template').innerHTML;
  Handlebars.registerPartial('car_template', carScript)


  const pluck = function(arr, key) {
    const values = [];
    arr.forEach(obj => {
      if (obj[key]) {
        if (!values.includes(obj[key])) {
          values.push(obj[key]);
        }
      }
    });

    return values;
  }

  const formatCarValues = function(arr) {
    return {
      makes: pluck(arr, 'make'),
      models: pluck(arr, 'model'),
      years: pluck(arr, 'year'),
      prices: pluck(arr, 'price'),
    }
  }

  const renderFilters = function(arr=cars) {
    const filterTemplate = Handlebars.compile(filterScript);
    const filtersBar = document.querySelector('#filters');
    filtersBar.innerHTML = filterTemplate(formatCarValues(arr));
  }

  const renderCar = function(arr) {
    return arr.map(car => {
      return {
        image: car.image,
        model: car.model,
        year: car.year,
        make: car.make,
        price: car.price,
      };
    });
  }

  const renderCars = function(arr=cars) {
    const carsTemplate = Handlebars.compile(carsScript);
    const carsDiv = document.querySelector('#cars');

    carsDiv.innerHTML = carsTemplate({cars: renderCar(arr)});
  }

  renderFilters();
  renderCars();

  const filterButton = document.querySelector('#filters > .filter_btn');

  filterButton.addEventListener('click', event => {
    event.preventDefault();
    const selections = document.querySelectorAll('select')
    const result = {};
    selections.forEach(selection => {
      result[selection.name] = selection.value;
    });
    // const imageString = `images/${result.make}-${result.model}-${result.year}.jpg`
    
    // result["image"] = imageString;

    renderCars([result]);

  });
})

