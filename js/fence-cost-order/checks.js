'use strict';

(function () {

  window.checks = {

    numberInputCheck: [{
        checker: function (value) {
            return value > 0;
        },
        message: 'Неверно заполнено поле',
    }],

  };

})();
