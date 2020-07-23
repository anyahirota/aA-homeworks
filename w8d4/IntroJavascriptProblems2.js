function titleize(names, printCallback) {
    let newNames = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    printCallback(newNames);
}

titleize(["Mary", "Brian", "Leo"], (newNames) => {
    newNames.forEach(name => console.log(name));
});  

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
};

new Elephant("Anya", 3000, ["painting a picture", "eating peanuts", "flying"])

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function() {
    this.height = this.height + 12;
};

Elephant.prototype.addTrick(trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play() {

}