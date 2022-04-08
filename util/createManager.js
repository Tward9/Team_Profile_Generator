function createManager(teammember) {
    const managerHTML = `
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
        cardTitle.innerHTML = '${teammember.employeeName}';
        cardSubtitle.innerHTML = 'Manager';
        liOne.innerHTML = 'ID: ${teammember.internId}';
        liTwoLink.textContent = 'Email: ${teammember.email}';
        liTwoLink.setAttribute('href', 'mailto:${teammember.email}');
        liTwo.appendChild(liTwoLink);
        liThree.innerHTML = 'Office Number: ${teammember.officeNumber}';
        cardListGroup.appendChild(liOne, liTwo, liThree);
        cardBody.appendChild(cardTitle, cardSubtitle, cardListGroup);
        cardDiv.appendChild(cardBody);
        document.getElementById('cardSection').appendChild(cardDiv);
    

    </script>
    
    </html>`;
    return managerHTML;
}
module.exports = createManager;