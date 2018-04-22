var personDb = [];

function Person(attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role = attributes.role;
};

function renderRow(name,surname,age,role) {
    return '<div><div>' + name + '</div><div>' + surname + '</div><div>' + age + '</div><div>' + role + '</div>'
}

function renderDb() {
    var containerDb = document.getElementById('records');
    containerDb.innerHTML = '';
    personDb.map(function(person) {
        containerDb.innerHTML += renderRow(person.name, person.surname, person.age, person.role);
    });
}

var addButton = document.getElementById('addButton');
addButton.addEventListener('click', function() {
    var inputName = document.getElementById('inputName').value;
    var inputSurname = document.getElementById('inputSurname').value;
    var inputAge = document.getElementById('inputAge').value;
    var inputRole = document.getElementById('inputRole').value;

    var person1 = new Person({
        name: inputName,
        surname: inputSurname,
        age: inputAge,
        role: inputRole
    });
    personDb.push(person1);

    renderDb();
});

renderDb();