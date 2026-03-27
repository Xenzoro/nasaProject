// Find our date picker inputs on the page
const startInput = document.getElementById('startDate');
const endInput = document.getElementById('endDate');

// Call the setupDateInputs function from dateRange.js
// This sets up the date pickers to:
// - Default to a range of 9 days (from 9 days ago to today)
// - Restrict dates to NASA's image archive (starting from 1995)

let API_KEY = "tgG3PTPmlj8EjMWk1gfQeYFecLShU8mxlbtTTyuR";
setupDateInputs(startInput, endInput);

const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const imageButton = document.getElementById("imageButton");
const caption = document.getElementById("caption");
const thumbs = true;
let container = document.getElementById("gallery")

window.onload = function(){
    let randomIndex = Math.floor(Math.random() * funFacts.length);
    let randomFact = funFacts[randomIndex];
    document.getElementById("factP").innerHTML = randomFact.fact;
}




imageButton.addEventListener("click", function() {
    /*
  *
  * first display loading message like Loading space Photos...
  *
  * https request:    GET https://api.nasa.gov/planetary/apod?api_key=tgG3PTPmlj8EjMWk1gfQeYFecLShU8mxlbtTTyuR
  *
  *
  * how do I want this function to work? when clicked call the api first?
  * then output the data within the range? startDate to endDate
  *
  *
  * */

    console.log("startDate is " + startDate.value + " to " + endDate.value);

    caption.innerHTML = "Loading Space Photos..."
    getImages()


});

function getImages() {

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate.value}&end_date=${endDate.value}&thumbs=${thumbs}`)

        .then(response => response.json())

        .then(data => {
            console.log(data);
            container.innerHTML = "";
            // Remove any old modals from previous fetches
            document.querySelectorAll('.modal').forEach(modal => modal.remove());
            // We'll store all the modals here and add them after the cards
            let modalsHTML = "";
            data.forEach((element, index) => {
                let media;
                // Check if the element is a video or image
                if (element.media_type === "video") {
                    media = `<video src="${element.url}" controls class="mediaClass card-img-top"></video>`;
                } else {
                    media = `<img src="${element.url}" class="mediaClass card-img-top" alt="${element.title}" />`;
                }
                // Each card gets a unique data-index
                const mediaHTML = `
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-2">
                        <div class="mediaCard card" data-index="${index}">
                            ${media}
                            <div class="container card-body">
                                <h6 class="card-title">${element.title}</h6>
                                <p class="card-text">${element.date}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += mediaHTML;
                // Create a modal for each card, with a unique id (NO d-none)
                modalsHTML += `
                    <div class="modal  fade" id="modal-${index}" tabindex="-1" role="dialog">
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">${element.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <!--img/ video -->
                            ${media}
                            <!--body text-->
                            <p> Date:<br> ${element.date || ''}</p>
                            <p> About:<br> ${element.explanation || ''}</p>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                `;
            });
            // Add all modals to the end of the body for proper Bootstrap modal behavior
            document.body.insertAdjacentHTML('beforeend', modalsHTML);
            // Only add the event listener once (remove previous if any)
            container.onclick = function(event) {
                const card = event.target.closest('.mediaCard');
                if (card) {
                    const index = card.getAttribute('data-index');
                    $(`#modal-${index}`).modal('show');
                }
            };
        })
        .catch(error => {
            console.log(error);
            let errorMsg;
            if(error.message === "Failed to fetch"){
                errorMsg = document.createTextNode("Error: You are Offline");
            }else{
                errorMsg = document.createTextNode(`Error: ${error.message}`);
            }
            let errorDiv = document.createElement("div");
            errorDiv.appendChild(errorMsg);
            errorDiv.className = "error-message";
            let container = document.getElementById("gallery");
            container.innerHTML = "";
            container.appendChild(errorDiv);
        });


}
