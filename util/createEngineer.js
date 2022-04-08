function createEngineer(teammember) {
    const engineerHTML = `function createEngineer() {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title', 'info');
    const cardSubtitle = document.createElement('h6');
    cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    const cardListGroup = document.createElement('ul');
    cardListGroup.classList.add('list-group', 'list-group-flush');
    const liOne = document.createElement('li');
    liOne.classList.add('list-group-item');
    const liTwo = document.createElement('li');
    liTwo.classList.add('list-group-item');
    const liTwoLink = document.createElement('a');
    const liThree = document.createElement('li');
    liThree.classList.add('list-group-item');
    const liThreeLink = document.createElement('a');
    cardTitle.innerHTML = '${teammember.engineerName}';
    cardSubtitle.innerHTML = 'Engineer';
    liOne.innerHTML = 'ID: ${teammember.engineerId}';
    liTwoLink.textContent = 'Email: ${teammember.engineerEmail}';
    liTwoLink.setAttribute('href', 'mailto:${teammember.engineerEmail}');
    liTwo.appendChild(liTwoLink);
    liThreeLink.textContent = 'GitHub: ${teammember.github}';
    liThreeLink.setAttribute('href', 'https://github.com/${teammember.github}');
    liThree.appendChild(liThreeLink);
    cardListGroup.appendChild(liOne, liTwo, liThree);
    cardBody.appendChild(cardTitle, cardSubtitle, cardListGroup);
    cardDiv.appendChild(cardBody);
    document.getElementById('cardSection').appendChild(cardDiv);
    };
    createEngineer();
    `;
    return engineerHTML;
}
module.exports = createEngineer;