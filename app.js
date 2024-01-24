var Searchitem = document.getElementById("text");
var ulTag = document.getElementById("element");

let p = fetch("https://jsonplaceholder.typicode.com/users");
p.then((response) => {
  // console.log(response.status)C
  // console.log(response.ok)
  // console.log(response.headers)
  return response.json();
  // return response.text();
})
  .then((data) => {
    showUsers(data);
    // console.log(data); // You can use the 'data' object here or perform other operations with it
    // data.forEach((user,index) => {
    //     const liTag = `</tr><td>${index + 1}</td> <td>${user.name}</td> , <td>${user.address.street}</td></tr><br>`;
    //     document.querySelector('ul').insertAdjacentHTML('beforeend',liTag);
    // console.table(liTag)
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function showUsers(data) {
  data.forEach((element) => {
    var liTag = document.createElement("li");
    liTag.innerText = element.name;
    ulTag.appendChild(liTag);
  });
}

//searCh Code

text.oninput = showResult;

function showResult() {
  const liTags = document.querySelectorAll("li");
  const liTa = document.getElementById("element");
  let emptyMsg = liTa.querySelector(".emptyMsg"); // Get the existing message element
  let visibleItems = 0; // Counter for visible items
  for (let anyLi of liTags) {
    const CurrentInput = this.value.toLowerCase();
    const CurrentLiTags = anyLi.innerText.toLowerCase();
    if (!CurrentLiTags.includes(CurrentInput)) {
      anyLi.setAttribute("hidden", true);

      // let x=Nothing(this);

      // console.log(liTa.children[1].innerHTML); console.log(liTa.textContent = "Turn Off")
    }
    // else if( ulTag.children('li').length<1) {

    //    console.log(liTa.textContent = "Turn Off")
    // }
    // else {
    //     bulb.src = "OFF.jpg"
    //     btn.textContent = "Turn On"
    // }
    else {
      anyLi.removeAttribute("hidden");
      visibleItems++; // Increment counter for each visible item
    }
  }

  if (visibleItems === 0) {
    //liTa.querySelector('li[hidden]').removeAttribute('hidden');  //shows above hidden li inside ul

    if (!emptyMsg) {
      // Check if the message is not already present
      newEmptyMsg = document.createElement("h3");
      newEmptyMsg.classList.add("emptyMsg");
      newEmptyMsg.textContent = "Nothing is here!";
      liTa.appendChild(newEmptyMsg);
    }
  } else {
    // liTa.querySelector('li').setAttribute('hidden', true);
    if (emptyMsg) {
      // Check if the message is already present
      emptyMsg.remove(); // Remove the existing message
    }
  }
}
