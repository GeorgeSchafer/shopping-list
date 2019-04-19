
'use strict';


function init() {

  $('#js-shopping-list-form > button').click(function (event) {
    event.preventDefault();
    let value = $('#shopping-list-entry').val();

    $('#shopping-list-entry').val('');

    $('.shopping-list').prepend(`<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });


  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    this.closest('li').remove();
  });


  $('.shopping-list').on('click','.shopping-item-toggle',function(event){
    $(this).closest('li').find('.shopping-item').
      toggleClass('shopping-item__checked');
  });

}


$(init);
