$(document).ready(
    () => {
        $('input[name=add-item]').focus()
        $("input[name=add-item]").keypress((event) => {
            if(event.keyCode === 13) {
                event.preventDefault();
                let input = $('input[name=add-item]');
                let newTodo = input.val();
                if(newTodo.length === 0) {
                    $('#error').html('Enter something please')
                } else {
                    $('ol').append(`<li id=""><input type="checkbox" name="done"/> <span id="description">${newTodo}</span> <button class="delete">&#10060;</button></li>`);
                    input.val('');
                    $('#error').html('')
                }
            }
        });

        $(document).on('dblclick','#description', function(){
            if( $('#new-value').length ) {
                $('#error').html('You can edit only one todo at the time')
            } else {
                const text = $( this ).text()
                $(this).html(`<input type="text" name="item" id="new-value" value='${text}'/>`)
                $('#new-value').focus();

                $("input[name=item]").keypress((event) => {
                    if(event.keyCode === 13) {
                        event.preventDefault();
                        const newValue = $('#new-value').val();
                        if(newValue.length === 0) {
                            $('#error').html("Todo can't be empty. Enter something please.")
                        } else {
                            $(this).html(`<span id="description">${newValue}</span>`)
                            $('#error').html('')
                        }

                    }
                })
                $('#error').html('')
            }
        });

        $(document).on('click', '.delete', function() {
            $(this).parent().remove();
        })

        $(document).on('click', 'input[name=done]', function() {
            if( $(this).is(":checked") ) {
                const text = $(this).parent('li').children('#description');
                text.css({
                    'text-decoration': 'line-through',
                    'opacity': '0.5'
                });
                $(this).css('display', 'none');
            }
        })

        $('input').focus(() => {
            $(this).val('');
        });
    }
);