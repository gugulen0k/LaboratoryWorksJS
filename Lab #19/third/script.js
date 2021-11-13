if (localStorage.getItem("votes") === null) {
  let votes = {
    pepsi: 0,
    cola: 0,
    fanta: 0,
    sprite: 0,
  };

  localStorage.setItem("votes", JSON.stringify(votes));
}

const calculateVoices = () => {
  const results = document.querySelector(".result-board");
  const drinks = document.querySelectorAll("input[name='drinks']");
  const vote = document.querySelectorAll("input[name='drinks']:checked");
  const voteButton = document.getElementById("vote-button");

  const pepsiProgress = document.querySelector("#pepsi-progress");
  const colaProgress = document.querySelector("#cola-progress");
  const fantaProgress = document.querySelector("#fanta-progress");
  const spriteProgress = document.querySelector("#sprite-progress");

  if (vote.length === 0) return alert("You didn't choose anything!");
  else {
    drinks.forEach((item) => (item.disabled = true));
    voteButton.disabled = true;

    results.style.width = "700px";
    results.style.height = "100%";
    results.style.opacity = "1";

    let votes = JSON.parse(localStorage.getItem("votes"));

    switch (vote[0].value) {
      case "pepsi": {
        votes.pepsi += 1;
        break;
      }
      case "cola": {
        votes.cola += 1;
        break;
      }
      case "fanta": {
        votes.fanta += 1;
        break;
      }
      case "sprite": {
        votes.sprite += 1;
        break;
      }
    }

    const numbers = Object.values(votes);
    const sum = numbers.reduce((acc, number) => acc + number, 0);

    let pepsiPercent = Math.round((((votes.pepsi * 100) / sum) * 100) / 100);
    let colaPercent = Math.round((((votes.cola * 100) / sum) * 100) / 100);
    let fantaPercent = Math.round((((votes.fanta * 100) / sum) * 100) / 100);
    let spritePercent = Math.round((((votes.sprite * 100) / sum) * 100) / 100);

    pepsiProgress.querySelector(".bar").style.width = `${pepsiPercent}%`;
    colaProgress.querySelector(".bar").style.width = `${colaPercent}%`;
    fantaProgress.querySelector(".bar").style.width = `${fantaPercent}%`;
    spriteProgress.querySelector(".bar").style.width = `${spritePercent}%`;

    pepsiProgress.querySelector(".percentage").textContent = `${pepsiPercent}%`;
    colaProgress.querySelector(".percentage").textContent = `${colaPercent}%`;
    fantaProgress.querySelector(".percentage").textContent = `${fantaPercent}%`;
    spriteProgress.querySelector(
      ".percentage"
    ).textContent = `${spritePercent}%`;

    localStorage.setItem("votes", JSON.stringify(votes));
  }
};
