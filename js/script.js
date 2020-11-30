
jQuery(document).ready(function ($) {
    $("#prepend-form").on('submit', function (e) {
        e.preventDefault();

        let inputText = $('#text-input').val();
        const toggleMsg = $('div#input-message');
        const tasksDiv = $("div#tasks");
        tasksDiv.empty();

        if (!inputText) {
            toggleMsg.removeClass("hide");
            tasksDiv.addClass("hide");
            //console.log("Empty text field");
        }
        else {
            toggleMsg.addClass("hide");
            tasksDiv.removeClass("hide");
            tasksDiv.prepend(`<p>${inputText}</p>`);
            //console.log(inputText);
        }


    });
}); 