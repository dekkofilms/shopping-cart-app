app.filter('categorySearch', function () {
  return function (teas, selected) {
    let filtered = [];

    if (selected === 'All') {
      return teas;
    }

    teas.forEach(function (tea) {
      if (tea.categories.includes(selected)) {
        filtered.push(tea);
      }
    })

    return filtered;

  }
});

app.filter('nameSearch', function () {
  return function (teas, name) {
    let filtered = [];

    if (name === null) {
      return teas;
    }

    teas.forEach(function (tea) {
      var teaName = tea.name.toLowerCase();
      if (teaName.includes(name.toLowerCase())) {
        filtered.push(tea);
      }
    })

    return filtered;

  }
});
