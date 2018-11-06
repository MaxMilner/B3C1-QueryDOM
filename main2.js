const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

const container = document.querySelector("#container")

const h1 = (title, style) => {
  return `<h1 class="${style}">${title}</h1>`
}

const section = (title, style) => {
  return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
  return `<aside class="${style}">${title}</aside>`
}

// For Of loops over each object in an array
for (student of students) { // students.forEach( (student) => { is the For Each way)
  let studentComponent = ""
  if (student.score >= 60) {
      studentComponent = buildString(student, "passing") // Does the same as below code
      /* `<div class="student">
        ${h1(student.name, "xx-large passing")}
        ${section(student.class, "section--padded")}
        ${aside(student.info, "pushRight")}
      </div>` */
  } else {
      studentComponent = buildString(student, "failing") // Does the same as below code
      /* `<div class="student">
        ${h1(student.name, "xx-large failing")}
        ${section(student.class, "section--padded")}
        ${aside(student.info, "pushRight")}
      </div>`*/
  }
  container.innerHTML += studentComponent
}

// container.appendChild(h1("Title", "Style") )

/* .innerHTML takes whatever thing before it and empties it
replacing with what follows after = */

// container.innerHTML = h1("h1", "style")
// container.innerHTML += section("section", "style")
// container.innerHTML = aside("aside", "style")

// const build = h1("h1", "style") + section("section", "style") + aside("aside", "style")
// container.innerHTML = build