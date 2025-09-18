//your JS code here. If required.
const boxes = document.querySelectorAll(".square")

boxes.forEach(box => {
        box.addEventListener("mouseover", (e) => bgColor(e));
        box.addEventListener("mouseout", () => defaultBgColor());
})

function bgColor(e){
	const boxesId = e.target

	boxes.forEach(box => {
		if (box !== boxesId) {
			box.style.backgroundColor = "#6F4E37";
		} else {
			box.style.backgroundColor = "#E6E6FA";
		}
	})
}

function defaultBgColor(){
	boxes.forEach(box => {
            box.style.backgroundColor = "#E6E6FA";
    })
}