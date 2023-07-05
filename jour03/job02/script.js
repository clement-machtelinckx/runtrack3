

$("#button").click(function() {
    $("#nogood").hide();
    $("#good").hide();
    const images = $("#sect img").toArray();
    shuffleArray(images);
    images.forEach(function(img, index) {
        $("#sect").append(img);
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

$("#sect img").each(function(index) {
    $(this).on("dragstart", dragStart);
    $(this).on("dragover", dragOver);
    $(this).on("dragenter", dragEnter);
    $(this).on("dragleave", dragLeave);
    $(this).on("drop", drop);
    $(this).on("dragend", dragEnd);
});

let draggedImg = null;

function dragStart(e) {
    draggedImg = e.target;
    e.originalEvent.dataTransfer.effectAllowed = "move";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    $(e.target).addClass("drag-over");
}

function dragLeave(e) {
    $(e.target).removeClass("drag-over");
}

function drop(e) {
    e.preventDefault();
    $(e.target).removeClass("drag-over");
    swapImages(draggedImg, e.target);
}

function dragEnd(e) {
    $("#sect img").removeClass("drag-over");
}

function swapImages(img1, img2) {
    const parent = img1.parentNode;
    const index1 = $("#sect img").index(img1);
    const index2 = $("#sect img").index(img2);
    parent.insertBefore(img2, img1);
    if (index1 < index2) {
        parent.insertBefore(img1, img2.nextSibling);
    } else {
        parent.insertBefore(img1, img2);
    }
    $("#sect img").eq(index1).replaceWith(img2);
    $("#sect img").eq(index2).replaceWith(img1);
}

$("#buttonverif").click(function() {
    const images = $("#sect img").toArray();
    let isCorrectOrder = true;

    $.each(images, function(index, image) {
        if (image.id !== "img" + (index + 1)) {
            isCorrectOrder = false;
            return false; // Sortir de la boucle each si l'ordre est incorrect
        }
    });

    if (isCorrectOrder) {
        $("#sect").addClass("correct");
        $("#good").show();
        console.log("Bravo ! L'ordre est correct !");
    } else {
        $("#sect").addClass("incorrect");
        $("#nogood").show();
        console.log("Faux ! L'ordre n'est pas correct !");
    }
});
