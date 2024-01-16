const buttonPlayHtml = document.getElementById("play-button")

buttonPlayHtml.addEventListener("click", function () {

    const gridHtml = document.getElementById("grid")

    gridHtml.classList.remove("hidden")


    for (let i = 1; i <= 100; i++) {

        let box = document.createElement("div")
        // console.log(box)

        box.classList.add("box")

        box.innerHTML = `<span>${i}</span>`


        box.addEventListener("click", function () {
            this.classList.toggle("clicked")
            console.log("Il numero del box cliccato è: " + i)
        })


        gridHtml.append(box)

    }
})

