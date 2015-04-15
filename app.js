// User object constructor function
function user(first,last,user,email){
    this.firstName = first;
    this.lastName = last;
    this.username = user;
    this.email = email;
}
// Declaration of users
var michael = new user('Michael','Montgomery','SkyHighK9','montgomery.michael@hotmail.com');
var lisa = new user('Lisa','Montgomery','bananapancakes','montgomery.lisa@hotmail.com');
var bethany = new user('Bethany','Montgomery','bgood2014','montgomery.bethany@hotmail.com');
var jackie = new user('Jackie','Perdomo','JPerdomo','jpaoletta@cfl.rr.com');
var justin = new user('Justin','Paoletta','Lokeye','justinpaoletta@gmail.com');
var susie = new user('Susie','Richards','srichards1','susierichards@gmail.com');
var brit = new user('Brittney','Patterson','bunny00','iceangel@yahoo.com');
var que = new user('Quentin','Jefferson','Qu2','quentin@q2media.com');

// Declaration of user prototypes

user.prototype.password = '';
user.prototype.points = 10000;
user.prototype.attackCount = 0;
user.prototype.victimCount = 0;
user.prototype.totalPointsWon = 0;
user.prototype.totalPointsLost = 0;
user.prototype.totalPointsGiven = 0;
user.prototype.totalPointsRecieved = 0;
user.prototype.type = 'standard';
user.prototype.givePoints = function(recipient,amount){
    if(this.points < amount){
        console.log('You do not have ' + amount + ' points to give. Please try again with a smaller amount.')
    }else{
        this.points -= amount;
        recipient.points += amount;
        console.log(this.username + ' gave ' + recipient.username + ' ' + amount + ' points.');
        this.totalPointsGiven += amount;
        recipient.totalPointsRecieved += amount;
    }
};
user.prototype.attack = function(victim){
    var halfAttacker = this.points / 2;
    var halfVictim = victim.points / 2;
    if(this.type == 'super' && victim.type == 'superDuper'){
        console.log('You cannot attack this user');
    }else if(this.type == 'standard' && victim.type == 'super' || (this.type == 'standard' && victim.type == 'superDuper')){
        this.points -= halfAttacker;
        victim.points += halfAttacker;
        this.attackCount++;
        victim.victimCount++;
        this.totalPointsLost += halfAttacker;
        victim.totalPointsWon += halfAttacker;
        console.log(this.username + ' attacked ' + victim.username);
    }else{
        this.points += 10;
        victim.points -= 10;
        this.totalPointsWon += 10;
        victim.totalPointsLost += 10;
        this.attackCount++;
        victim.victimCount++;
        console.log(this.username + ' attacked ' + victim.username);
    }
};

michael.type = 'superDuper';
lisa.type = 'super';
bethany.type = 'super';



