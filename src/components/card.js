class Card{
    constructor({name, introduction, profileImage, profileLink}){
        this.name = name;
        this.introduction = introduction;
        this.profileImage = profileImage;
        this.profileLink = profileLink;
    }

    render(){

        //created html elements
        const cardElement = document.createElement('div');
        const nameElement = document.createElement('p');
        const introductionElement = document.createElement('p');
        const profileImageELement = document.createElement('img');
        const profileLinkElement = document.createElement('a');
        const hyperlinkDiv = document.createElement("div");

        //assigning classes
        cardElement.classList.add("cardElement");
        profileImageELement.classList.add("profileImage");
        hyperlinkDiv.classList.add('hyperLinkDiv');
        nameElement.classList.add("nameElement");

        //assigning properties
        nameElement.innerText = this.name;
        introductionElement.innerText = this.introduction;
        profileImageELement.src = `https://raw.githubusercontent.com/vikasrangaswamy/Contentstack/main/${this.profileImage}`;
        profileImageELement.height = 100;
        profileImageELement.width = 100;
        profileLinkElement.innerText = "Portfolio";
        profileLinkElement.href = this.profileLink;

        //constructing toe component
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


export {Card};