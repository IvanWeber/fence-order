'use strict';

(function () {

    window.validation = {
        initiateCheckOnChangeNumberElementOfForm: (element, checks) => {
            element.setCustomValidity('');
            var commentaryElementChangeHandler = function () {.
              element.setCustomValidity('');
      
              checks.forEach(function (check) {
                if (!check.checker(element.value)) {
                  element.setCustomValidity(check.message);
                }
              });
            };
            // element.removeEventListener('input', commentaryElementChangeHandler);
            element.addEventListener('input', commentaryElementChangeHandler);
          }
    };
    

})();
