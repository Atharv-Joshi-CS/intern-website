// import { Card } from "./components/card";

const url = "https://raw.githubusercontent.com/vikasrangaswamy/Contentstack/main/data/Card.json";

class Card{
    constructor({name, introduction, profileImage, profileLink}){
        this.name = name;
        this.introduction = introduction;
        this.profileImage = profileImage;
        this.profileLink = profileLink;
    }

    render(){
        const cardElement = document.createElement('div');
        const nameElement = document.createElement('p');
        const introductionElement = document.createElement('p');
        const profileImageELement = document.createElement('img');
        const profileLinkElement = document.createElement('a');
        const hyperlinkDiv = document.createElement("div");

        cardElement.classList.add("cardElement");
        profileImageELement.classList.add("profileImage");
        hyperlinkDiv.classList.add('hyperLinkDiv');

        nameElement.innerText = this.name;
        introductionElement.innerText = this.introduction;
        profileImageELement.src = `https://raw.githubusercontent.com/vikasrangaswamy/Contentstack/main/${this.profileImage}`;
        profileImageELement.height = 100;
        profileImageELement.width = 100;
        profileLinkElement.innerText = "Click here";
        profileLinkElement.href = this.profileLink;

        cardElement.appendChild(nameElement);
        cardElement.appendChild(introductionElement);
        cardElement.appendChild(profileImageELement);
        cardElement.appendChild(hyperlinkDiv);
        hyperlinkDiv.appendChild(profileLinkElement);

        return cardElement;
    }

    mount(element){
        if(element){
            element.appendChild(this.render());
        }
    }
}


fetch(url)
.then(
    (response) => {
        return response.json()
    }
).then(
    (data) => {
        // console.log(data)
        const rootDiv = document.getElementById('root');
        const teamDiv = document.createElement('div');
        teamDiv.classList.add("teamDiv")
        rootDiv.appendChild(teamDiv);
    
        for(let i = 0; i < data.length; i++){
            const intern = new Card(data[i]);
            intern.mount(teamDiv);
        }
        // data.array.forEach(element => {
        //     const intern = new Card(element)
        //     intern.mount(rootDiv);
        // });
    }
).catch(
    (error) => {
        console.log(error);
    }
);








