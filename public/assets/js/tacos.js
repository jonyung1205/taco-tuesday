// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-vegetarian").on("click", function (event) {
        var id = $(this).data("id");
        var newVegetarian = $(this).data("newvegetarian");

        var newVegetarianState = {
            picked_up: newVegetarian
        };

        // Send the PUT request.
        $.ajax("/api/tacos/" + id, {
            type: "PUT",
            data: newVegetarianState
        }).then(
            function () {
                console.log("changed vegetarian to", newVegetarian);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {     
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newTaco = {
            name: $("#taco").val().trim(),
            picked_up: $("[name=picked_up]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/tacos", {
            type: "POST",
            data: newTaco
        }).then(
            function () {
                console.log("created new taco");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-taco").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/tacos/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted taco", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});