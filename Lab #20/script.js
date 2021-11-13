const areas = document.querySelector("map");
const info = document.querySelector(".description");
const title = document.querySelector(".title");
const description = document.querySelector(".text");

const pacificText =
  "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean (or, depending on definition, to Antarctica) in the south and is bounded by the continents of Asia and Australia in the west and the Americas in the east.";
const atlanticText =
  'The Atlantic Ocean is the second-largest of the world\'s oceans, with an area of about 106,460,000 km2 (41,100,000 sq mi). It covers approximately 20 percent of Earth\'s surface and about 29 percent of its water surface area. It is known to separate the "Old World" of Europe and Asia from the "New World" of the Americas in the European perception of the World.';
const arcticText =
  "The Arctic Ocean is the smallest and shallowest of the world's five major oceans. It spans an area of approximately 14,060,000 km2 (5,430,000 sq mi) and is also known as the coldest of all the oceans. The International Hydrographic Organization (IHO) recognizes it as an ocean, although some oceanographers call it the Arctic Mediterranean Sea. It has been described approximately as an estuary of the Atlantic Ocean. It is also seen as the northernmost part of the all-encompassing World Ocean.";
const indianText =
  "The Indian Ocean is the third-largest of the world's oceanic divisions, covering 70,560,000 km2 (27,240,000 sq mi) or 19.8% of the water on Earth's surface. It is bounded by Asia to the north, Africa to the west and Australia to the east. To the south it is bounded by the Southern Ocean or Antarctica, depending on the definition in use. Along its core, the Indian Ocean has some large marginal or regional seas such as the Arabian Sea, the Laccadive Sea, the Somali Sea, Bay of Bengal, and the Andaman Sea.";
const southernText =
  "The Southern Ocean, also known as the Antarctic Ocean, comprises the southernmost waters of the World Ocean, generally taken to be south of 60° S latitude and encircling Antarctica. As such, it is regarded as the second-smallest of the five principal oceanic divisions: smaller than the Pacific, Atlantic, and Indian oceans but larger than the Arctic Ocean. Over the past 30 years, the Southern Ocean has been subject to rapid climate change, which has led to changes in the marine ecosystem";

areas.addEventListener("mouseover", (e) => {
  info.style.opacity = 1;
  e.target.focus();
  switch (e.target.alt) {
    case "North Pacific ocean": {
      title.textContent = e.target.alt;
      description.textContent = pacificText;
      break;
    }
    case "North Pacific ocean2": {
      title.textContent = "North Pacific ocean";
      description.textContent = pacificText;
      break;
    }
    case "South Pacific ocean": {
      title.textContent = e.target.alt;
      description.textContent = pacificText;
      break;
    }
    case "North Atlantic ocean": {
      title.textContent = e.target.alt;
      description.textContent = atlanticText;
      break;
    }
    case "South Atlantic ocean": {
      title.textContent = e.target.alt;
      description.textContent = atlanticText;
      break;
    }
    case "Southern ocean": {
      title.textContent = e.target.alt;
      description.textContent = southernText;
      break;
    }
    case "Indian ocean": {
      title.textContent = e.target.alt;
      description.textContent = indianText;
      break;
    }
    case "Arctic ocean": {
      title.textContent = e.target.alt;
      description.textContent = arcticText;
      break;
    }
  }
  e.target.addEventListener("mouseout", () => {
    info.style.opacity = 0;
    e.target.blur();
  });
});

areas.addEventListener("click", () => console.log("object"));
