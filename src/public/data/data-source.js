class DataSource {
  static searchRestaurant(keyword) {
    return fetch(`https://restaurant-api.dicoding.dev/search?q=${keyword}`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.restaurants) {
          return Promise.resolve(responseJson.restaurants);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }
}

export default DataSource;
