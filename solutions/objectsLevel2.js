// find the person who has many skills in the users object

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


let mostSkillUser = null;
let maxSkills = 0;

// iterate through each user
for(const user in users){
    const skillsCount = users[user].skills.length;

    if(skillsCount > maxSkills){
        maxSkills = skillsCount;
        mostSkillUser = user;
    }
}
  
console.log(`${mostSkillUser} has the most skills with a count of ${maxSkills} skills`);

// Count logged in users,count users having greater than equal to 50 points from the following
// object
let loggedUSers = 0;
for(const user in users){
    if(users[user].isLoggedIn && users[user].points >= 50){
        loggedUSers++;
    }
}
console.log(`${loggedUSers} Users are logged in`);

// Find people who are MERN stack developer from the users object
const isMernStackDeveloper = ['MongoDB', 'Express', 'React', 'Node'];

let mernStackDeveloperCount = 0;
for(const developer in users){
    if(users[developer].skills.includes('MongoDB', 'Express', 'React', 'Node')){
        mernStackDeveloperCount++;
    }
}
console.log(`${mernStackDeveloperCount} MERN stack Developers`);