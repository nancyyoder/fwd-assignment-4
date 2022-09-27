// class UrlBuilder {
//     constructor(base) {
//         this.base = base;
        
//         this.params = {};
//     }

//     addParam(key, value) {
//         this.params[key] = value;
//     }

//     build() {
//         let url = this.base;
//         let counter = 0;

//         for (const key in this.params){
//             if (counter === 0) {
//                 url += '?';
//             }

//             else{
//                 url + '&';
//             }
//             url += key;
//             url += '=';
//             url += this.params[key];

//             counter++;
//         }

//         return url;
//     }
// }

// const meowFactsUrlBuilder = new UrlBuilder('https://meowfacts.herokuapp.com/');
// meowFactsUrlBuilder.addParam('count', '4');
// const meowFactsUrl = meowFactsUrlBuilder.build();

// car
fetch('https://emojihub.herokuapp.com/api/random/group_food_prepared', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log("dinner", json.group);
        const emoji = json.htmlCode[0];
        const dinnerSpan = document.getElementById('dinner');
        dinnerSpan.innerHTML = emoji;
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://emojihub.herokuapp.com/api/random/group_animal_mammal?', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log("pet", json.group);
        const emoji = json.htmlCode[0];
        const petSpan = document.getElementById('pet');
        petSpan.innerHTML = emoji;
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://emojihub.herokuapp.com/api/random/group_family?', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log("family", json.group);
        const emoji = json.htmlCode[0];
        const familySpan = document.getElementById('family');
        familySpan.innerHTML = emoji;
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://emojihub.herokuapp.com/api/random/group_person_activity?', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log("job", json.group);
        const emoji = json.htmlCode[0];
        const jobSpan = document.getElementById('job');
        jobSpan.innerHTML = emoji;
    })
    .catch((error) => {
        console.error(error);
    });

fetch('https://emojihub.herokuapp.com/api/random/group_objects?', {
method: 'GET',
headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log("death", json.group);
        const emoji = json.htmlCode[0];
        const deathSpan = document.getElementById('death');
        deathSpan.innerHTML = emoji;
    })
    .catch((error) => {
        console.error(error);
    });

        
