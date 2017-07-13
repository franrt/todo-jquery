$(document).ready(function() {

    $('#listado').html(localStorage.getItem('listItems'));
    //$("#listado").empty();
    $('.add-items').submit(function(event) {
        event.preventDefault();

        var item = $('#to-do').val();

        if (item) {
            $('#listado').append('<li>' + '<button id="done" class="btn waves-effect waves-light" type="submit" name="action">done!</button>' + item + '<button id="remove" class="btn remove">remove</button><hr></li>');

            localStorage.setItem('listItems', $('#listado').html());

            $('#to-do').val("");
        }

        /*función para pasar la tarea lista (done) a la derecha (work done). 
        No está completa:  No borra el item de lista wip.
        y al hacer click en done pasan todas las tareas a work done*/

        $('#done').click(function(event) {

            $('#work-done').append('<li>' + item + '<button id="remove" class="btn remove">remove</button></li>');

            localStorage.setItem('listItems', $('#work-done').html());


        });

    });



    $(document).on('change', '.checkbox', function() {
        if ($(this).attr('checked')) {
            $(this).removeAttr('checked');
        } else {
            $(this).attr('checked', 'checked');
        }

        $(this).parent().toggleClass('completed');

        localStorage.setItem('listItems', $('#listado').html());
    });

    $(document).on('click', '.remove', function() {
        $(this).parent().remove();

        localStorage.setItem('listItems', $('#listado').html());
    });

});