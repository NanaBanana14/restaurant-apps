/* eslint-disable max-len */
import $ from 'jquery';
import DataSource from '../data/data-source';

const focusCheckbox = () => {
  const checkbox = document.getElementById('check');
  checkbox.checked = !checkbox.checked;
  checkbox.focus();
};

const renderResult = (results) => {
  const $restaurantListElement = $('.list-restoran');
  $restaurantListElement.empty();

  results.forEach((restaurant) => {
    const {
      name, description, pictureId, city, rating,
    } = restaurant;

    const mediumImageUrl = `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`;

    const $restaurantElement = $('<div>').addClass('restaurant-card');
    $restaurantElement.html(`
      <div class="restaurant-image">
        <img src="${mediumImageUrl}" alt="${name}">
        <div class="restaurant-details">
          <p class="city-restaurant">Kota: ${city}</p>
          <p class="rating">Rating: ${rating}</p>
        </div>
      </div>
      <div class="restaurant-info">
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
    `);

    $restaurantListElement.append($restaurantElement);
  });
};

const main = () => {
  const $searchElement = $('#searchElement');
  const $searchButtonElement = $('#searchButtonElement');
  const focusableElements = Array.from(document.querySelectorAll('a, button')).filter((element) => element.tabIndex >= 0);
  const check = document.getElementById('check');

  focusableElements.forEach((element, index) => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' && index < focusableElements.length - 1) {
        focusableElements[index + 1].focus();
      } else if (e.key === 'ArrowLeft' && index > 0) {
        focusableElements[index - 1].focus();
      }
    });
  });

  check.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      focusableElements[0].focus();
    } else if (e.key === 'ArrowLeft') {
      focusableElements[focusableElements.length - 1].focus();
    }
  });

  const searchRestaurants = (query) => {
    // Mencari restoran berdasarkan kata kunci menggunakan DataSource
    DataSource.searchRestaurant(query)
      .then(restaurants => {
        renderResult(restaurants);
      })
      .catch(error => {
        console.error(error);
      });
  };

  searchRestaurants('');

  $searchButtonElement.on('click', () => {
    const keyword = $searchElement.val().toLowerCase();
    searchRestaurants(keyword);
  });

  const bellybitesBtn = document.getElementById('nav-btn');
  if (bellybitesBtn) {
    bellybitesBtn.addEventListener('click', focusCheckbox);
  }
};

export default main;
