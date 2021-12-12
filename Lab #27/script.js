$(function() {
    let player = 1;
    let table = $('table');
    let messages = $('.messages');
    let turn = $('.turn');
    let xWins = $('.x-wins');
    let oWins = $('.o-wins');
    displayNextPlayer(turn, player);

    $('td').click(function() {
        let td = $(this);
        let state = getState(td);
        if(!state) {
            let pattern = definePatternForCurrentPlayer(player);
            changeState(td, pattern);

            if(checkIfPlayerWon(table, pattern)) {
                switch (player) {
                    case 1: {
                        xWins.html(parseInt(xWins.text()) + 1);
                        break;
                    }
                    case 2: {
                        oWins.html(parseInt(oWins.text()) + 1);
                        break;
                    }
                }
                messages.html('Player ' + player + ' has won.');
                turn.html('');
            } else {
                player = setNextPlayer(player);
                displayNextPlayer(turn, player);
            }
        } else {
            messages.html('This box is already checked.');
        }
    });

    $('.reset').click(function() {
        player = 1;
        messages.html('');
        reset(table);
        displayNextPlayer(turn, player);
    });

});

function getState(td) {
    if(td.hasClass('cross') || td.hasClass('circle')) {
        return 1;
    } else {
        return 0;
    }
}

function changeState(td, pattern) {
    return td.addClass(pattern);
}

function definePatternForCurrentPlayer(player) {
    if(player === 1) {
        return 'cross';
    } else {
        return 'circle';
    }
}

function setNextPlayer(player) {
    if(player === 1) {
        return 2;
    } else {
        return 1;
    }
}

function displayNextPlayer(turn, player) {
    turn.html('Player turn : '+player);
}

function checkIfPlayerWon(table, pattern) {
    let won = 0;
    if(table.find('.cell1').hasClass(pattern) && table.find('.cell2').hasClass(pattern) && table.find('.cell3').hasClass(pattern)) {
        won = 1;
    } else if (table.find('.cell1').hasClass(pattern) && table.find('.cell4').hasClass(pattern) && table.find('.cell7').hasClass(pattern)) {
        won = 1;
    } else if (table.find('.cell1').hasClass(pattern) && table.find('.cell5').hasClass(pattern) && table.find('.cell9').hasClass(pattern)) {
        won = 1;
    } else if (table.find('.cell4').hasClass(pattern) && table.find('.cell5').hasClass(pattern) && table.find('.cell6').hasClass(pattern)) {
        won = 1;
    } else if (table.find('.cell7').hasClass(pattern) && table.find('.cell8').hasClass(pattern) && table.find('.cell9').hasClass(pattern)) {
        won = 1;
    } else if (table.find('.cell2').hasClass(pattern) && table.find('.cell5').hasClass(pattern) && table.find('.cell8').hasClass(pattern)) {
        won = 1;
    } else if (table.find('.cell3').hasClass(pattern) && table.find('.cell6').hasClass(pattern) && table.find('.cell9').hasClass(pattern)) {
        won = 1;
    } else if (table.find('.cell3').hasClass(pattern) && table.find('.cell5').hasClass(pattern) && table.find('.cell7').hasClass(pattern)) {
        won = 1;
    }
    return won;
}

function reset(table) {
    table.find('td').each(function() {
        $(this).removeClass('circle').removeClass('cross');
    });
}