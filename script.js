//Class DB
function PersonDb() {
    this.database = [];
}

PersonDb.prototype.addPerson = function(person) {
    this.database.push(person);
}

PersonDb.prototype.displayPeople = function() {
    console.log(this.database);
}

//Class People
function Person(attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role = attributes.role;
}

//Class for render methods
function Render(attribute) {
    this.container = document.getElementById(attribute);
}

Render.prototype.renderRow = function(name,surname,age,role) {
    return '<div><div>' + name + '</div><div>' + surname + '</div><div>' + age + '</div><div>' + role + '</div>';
}

Render.prototype.setHtml = function(database) {
    this.container.innerHTML = '';
    var self = this;
    dbInstance.database.map(function(person) {
        self.container.innerHTML += this.renderRow(person.name, person.surname, person.age, person.role);
    });
}

//Create object of PersonDb
var dbInstance = new PersonDb();

//Create object of Render
var renderInstance = new Render('records');

renderInstance.setHtml(dbInstance.database);

function renderRow(name,surname,age,role) {
    return '<div><div>' + name + '</div><div>' + surname + '</div><div>' + age + '</div><div>' + role + '</div>'
}

function renderDb() {
    var containerDb = document.getElementById('records');
    containerDb.innerHTML = '';
    dbInstance.database.map(function(person) {
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

    dbInstance.addPerson(person1);

    renderInstance.setHtml(dbInstance.database);
});