
function Developer(first, last, xp, langs, sector) {

    this.name = {
        first: first,
        last: last
    };

    this.xp = xp;
    this.langs = langs;
    this.sector = sector;

    this.getDevDetails = function(){
        console.log('Dev Name: ' + this.name.first + ' ' + this.name.last + ' - ' + this.xp + ' years experience in the ' + this.sector + ' sector.');
        // return true;
    }
}

newdev1 = new Developer('Marco','Wilkins',8,['javascript','python'],'financial');

// console.log(newdev1.langs[1])

console.log(newdev1.getDevDetails())



/*


function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}


*/