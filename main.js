// very explicit using request and response
//const request = new Request('https://meowfacts.herokuapp.com/');
class UrlBuilder {
    constructor(base) {
        this.base = base;
        
        this.params = {};
    }

    addParam(key, value) {
        this.params[key] = value;
    }

    build() {
        let url = this.base;
        let counter = 0;

        for (const key in this.params){
            if (counter === 0) {
                url += '?';
            }

            else{
                url + '&';
            }
            url += key;
            url += '=';
            url += this.params[key];

            counter++;
        }

        return url;
    }
}

const meowFactsUrlBuilder = new UrlBuilder('https://meowfacts.herokuapp.com/');
meowFactsUrlBuilder.addParam('count', '4');
const meowFactsUrl = meowFactsUrlBuilder.build();

fetch(meowFactsUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        for(const catfact of json.data){
            const paragraph = document.createElement('p');
            paragraph.innerText = catfact;
            document.body.appendChild(paragraph);
        }
    })
    .catch((error) => {
        console.error(error);
    });
