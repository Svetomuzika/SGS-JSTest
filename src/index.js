const emplyeesAll = [
  {
    city: "Не выбрано",
    shop: "Не выбрано",
    employee: "Не выбрано",
    brigade: 1
  },
  {
    city: "Екатеринбург",
    shop: "A",
    employee: "Иванов Данил",
    brigade: 1
  },
  {
    city: "Екатеринбург",
    shop: "A",
    employee: "Данилов Илья",
    brigade: 1
  },
  {
    city: "Екатеринбург",
    shop: "B",
    employee: "Петров Николай",
    brigade: 1
  },
  {
    city: "Екатеринбург",
    shop: "B",
    employee: "Сергеев Александр",
    brigade: 1
  },
  {
    city: "Екатеринбург",
    shop: "C",
    employee: "Калинин Сергей",
    brigade: 1
  },
  {
    city: "Москва",
    shop: "D",
    employee: "Петров Петр",
    brigade: 1
  },
  {
    city: "Москва",
    shop: "E",
    employee: "Иванова Мария",
    brigade: 1
  },
  {
    city: "Москва",
    shop: "E",
    employee: "Орлов Никита",
    brigade: 1
  },
  {
    city: "Москва",
    shop: "F",
    employee: "Данилов Данил",
    brigade: 1
  },
  {
    city: "Санкт-Петербург",
    shop: "G",
    employee: "Иванченко Генадий",
    brigade: 1
  },
  {
    city: "Санкт-Петербург",
    shop: "G",
    employee: "Иваненко Георгий",
    brigade: 1
  },
  {
    city: "Санкт-Петербург",
    shop: "H",
    employee: "Ивнев Рустам",
    brigade: 1
  }
];

const arrEmployees = Object.entries(emplyeesAll);
const selectCities = document.getElementById("citiesId");
const selectShops = document.getElementById("shopsId");
const selectEmployee = document.getElementById("employeesId");
const radioBrigade2 = document.getElementById("brigade2Id");
const radioBrigade1 = document.getElementById("brigade1Id");
const submit = document.getElementById("shiftEnter");

function updateForm() {
  selectCities.innerHTML = "";
  selectShops.innerHTML = "";
  selectEmployee.innerHTML = "";

  const cities = [];
  const shops = [];
  const employees = [];

  arrEmployees.forEach(function (e) {
    cities.push(e[1].city);
    shops.push(e[1].shop);
    employees.push(e[1].employee);
  });

  new Set(cities).forEach((e) => selectCities.appendChild(new Option(e)));
  new Set(shops).forEach((e) => selectShops.appendChild(new Option(e)));
  employees.forEach((e) => selectEmployee.appendChild(new Option(e)));
}

updateForm();

selectCities.addEventListener("change", function (e) {
  const shops = (this.shops = []);
  const employees = (this.employees = []);

  if (e.target.value !== "Не выбрано") {
    arrEmployees.forEach(function (i) {
      if (i[1].city === e.target.value) {
        shops.push(i[1].shop);
        employees.push(i[1].employee);
      }
    });
  } else {
    arrEmployees.forEach(function (a) {
      shops.push(a[1].shop);
      employees.push(a[1].employee);
    });
  }

  selectShops.innerHTML = "";
  new Set(shops).forEach((e) => selectShops.appendChild(new Option(e)));
  selectEmployee.innerHTML = "";
  new Set(employees).forEach((e) => selectEmployee.appendChild(new Option(e)));
});

selectShops.addEventListener("change", function (e) {
  const cities = (this.cities = []);
  const employees = (this.employees = []);

  if (e.target.value !== "Не выбрано") {
    arrEmployees.forEach(function (i) {
      if (i[1].shop === e.target.value) {
        cities.push(i[1].city);
        employees.push(i[1].employee);
      }
    });
  } else {
    arrEmployees.forEach(function (a) {
      cities.push(a[1].city);
      employees.push(a[1].employee);
    });
  }

  selectCities.innerHTML = "";
  new Set(cities).forEach((e) => selectCities.appendChild(new Option(e)));
  selectEmployee.innerHTML = "";
  new Set(employees).forEach((e) => selectEmployee.appendChild(new Option(e)));
});

radioBrigade2.addEventListener("click", function (e) {
  radioBrigade1.checked = false;
  if (
    selectEmployee.options[selectEmployee.selectedIndex].text !== "Не выбрано"
  )
    emplyeesAll.map((e) => (e.brigade = 2));
});

radioBrigade1.addEventListener("click", function (e) {
  radioBrigade2.checked = false;
  if (
    selectEmployee.options[selectEmployee.selectedIndex].text !== "Не выбрано"
  )
    emplyeesAll.map((e) => (e.brigade = 1));
});

submit.addEventListener("mousedown", function (e) {
  if (
    selectEmployee.options[selectEmployee.selectedIndex].text !== "Не выбрано"
  ) {
    const shiftEmployee = emplyeesAll.find(
      (i) =>
        i.employee === selectEmployee.options[selectEmployee.selectedIndex].text
    );
    console.log(shiftEmployee);
  }
  updateForm();
  alert("SIUUUUUU");
});
