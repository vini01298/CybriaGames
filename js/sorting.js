    $(document).ready(function() {
        var games = $('#gamesContainer .game').get();

        games.sort(function(a, b) {
            var titleA = $(a).find('.game-title').text().toUpperCase();
            var titleB = $(b).find('.game-title').text().toUpperCase();

            var isTitleANumber = /^\d+$/.test(titleA);
            var isTitleBNumber = /^\d+$/.test(titleB);

            if ((isTitleANumber && isTitleBNumber) || (!isTitleANumber && !isTitleBNumber)) {
                return titleA.localeCompare(titleB);
            } else {
                return isTitleBNumber - isTitleANumber;
            }
        });

        $('#gamesContainer').empty();

        $.each(games, function(index, game) {
            $('#gamesContainer').append(game);
        });
    });
