async function selectDate() {
    $('data-test-id="departure-date-input"]').datepicker({
        beforeShow: function(i) {
            if ($(this).prop('readonly')) {
              console.log('readonly is true');
              $(this).datepicker("option", "disabled", true);
              return;
            }
        },
        format : 'dd/mm/yyyy',
        autoHide : true,
    });}