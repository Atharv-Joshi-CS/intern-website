class Card{
    constructor(name, introduction, profileImage, profileLink){
        this.name = name;
        this.introduction = introduction;
        this.profileImage = profileImage;
        this.profileLink = profileLink;
    }

    render(){
        const cardElement = document.createElement('div');
        const nameElement = document.createElement('p');
        const introductionElement = document.createElement('p');
        const profileImage = document.createElement('img');
        const profileLinkElement = document.createElement('a');

        nameElement.innerText = this.name;
        introductionElement.innerText = this.introduction;
        // console.log(profileImage);
        // profileImage.src = this.profileImage;
        profileLinkElement.innerText = "Click here";
        profileLinkElement.href = this.profileLink;

        cardElement.appendChild(nameElement);
        cardElement.appendChild(introductionElement);
        // cardElement.appendChild(profileImage);
        cardElement.appendChild(profileLinkElement);

        return cardElement;
    }

    mount(element){
        if(element){
            element.appendChild(this.render());
        }
    }
}

export {Card};