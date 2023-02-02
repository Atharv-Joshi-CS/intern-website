import { Card } from "./components/card.js";

const url = "https://raw.githubusercontent.com/vikasrangaswamy/Contentstack/main/data/Card.json";

fetch(url)
.then(
    (response) => {
        return response.json()
    }
).then(
    (data) => {
        const rootDiv = document.getElementById('root');

        const title = document.createElement("h2")
        title.innerText = "INTERNS"
        rootDiv.appendChild(title);
        
        const teamDiv = document.createElement('div');
        teamDiv.classList.add("teamDiv")
        rootDiv.appendChild(teamDiv);
    
        for(let i = 0; i < data.length; i++){
            const intern = new Card(data[i]);
            intern.mount(teamDiv);
        }

    }
).catch(
    (error) => {
        console.log(error);
    }
);








