fetch("data.json")
.then(response => response.json())
.then(json => {
  json.forEach(block => {
    const summaryBlocks = document.querySelector(".component-summary__blocks");

    const newBlock = document.createElement("li");
    newBlock.className += ` component-summary__${block.category.toLowerCase()}-block`;

    const newBlockContent1 = document.createElement("div");
    newBlockContent1.className += ` component-summary__${block.category.toLowerCase()}`;

    const newIcon = document.createElement("img");
    newIcon.setAttribute("src", `${block.icon}`);
    newIcon.setAttribute("alt", `${block.category.toLowerCase()}-icon`);

    const newBlockName = document.createElement("p");
    newBlockName.className += `block-name`;
    newBlockName.textContent = `${block.category}`;

    const newBlockContent2 = document.createElement("div");

    const newScore = document.createElement("p");
    newScore.textContent = `${block.score}`;

    const scoreMax = document.createElement("p");
    scoreMax.className += `score-max`;
    scoreMax.textContent = ` / 100`;

    summaryBlocks.appendChild(newBlock);
    newBlock.appendChild(newBlockContent1);
    newBlock.appendChild(newBlockContent2);
    newBlockContent1.appendChild(newIcon);
    newBlockContent1.appendChild(newBlockName);
    newBlockContent2.appendChild(newScore);
    newBlockContent2.appendChild(scoreMax);
  })
})