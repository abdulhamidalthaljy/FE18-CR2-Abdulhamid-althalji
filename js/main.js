
let dolist = JSON.parse(todo)
console.log(dolist)
for (show of dolist) {
    document.getElementById("imgContainer").innerHTML +=

        `</div>
    <div class="card shadow-lg  mb-5 bg-body-tertiary rounded  "">
    <div class="d-flex justify-content-between">
    <p class=" btn btn-info  " > Task</p>
    <p><i class="ri-bookmark-line btn btn-light"></i> <i class="ri-more-2-line btn btn-light"></i></p>
</div>
  <img src="${show.img}" class="card-img-top foto" alt="${show.task}">
  <div class="card-body">
    <p class="card-text text-danger h4">${show.task} </p>
    <p class="card-text h6">${show.desc}</p>
    <hr>
    <p class="card-text btn btn-light prioritybtn "> <i class="ri-error-warning-line"></i>  Priority level <span class="text-light btn btn-success prioritys" > ${show.priority} </span></p>
    <p class="card-text ">  <label for="start">Dead line:</label>

    <input type="date" id="start" name="trip-start"
           value="2023-10-02"
           min="2023-01-01" max="2023-12-31"></p>
           <hr>
           <div  class="d-flex justify-content-end gap-2">
    <p class="btn btn-danger  delet "> <i class="ri-delete-bin-6-line"></i> Delete</p> 
     <p class="btn  btn-success "><i class="ri-check-double-line"></i> Done </p></div>
  </div>
</div> </div>`
}
// priority counter
let btns = document.getElementsByClassName("prioritybtn");

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function () {
        dolist[i].priority++;
        document.getElementsByClassName("prioritys")[i].innerHTML = dolist[i].priority

        let prio = dolist[i].priority
        //    the background color of the priority level number will change depending on the displayed number
        if (prio == 0 || prio == 1) {
            document.getElementsByClassName("prioritys")[i].classList.add("bg-success");
        } else if (prio == 2 || prio == 3) {
            document.getElementsByClassName("prioritys")[i].classList.replace("bg-success", "bg-warning");
        } else if (prio == 4 || prio == 5) {
            document.getElementsByClassName("prioritys")[i].classList.replace("bg-warning", "bg-danger");
        }

    })

}
console.log(dolist[0])

// delet card
let del = document.getElementsByClassName("delet");

for (let i = 0; i < del.length; i++) {

    del[i].addEventListener("click", function () {

        document.getElementsByClassName("card")[i].style.display = "none";

    })
}

//  Add a Sort button that will sort the resulting list of tasks according to their current level of importance
// const sort = document.getElementsByClassName("sort-btn");
// sort.addEventListener("click", function () {

//     document.getElementsByClassName("card").style.order = "4";
// }, false);










