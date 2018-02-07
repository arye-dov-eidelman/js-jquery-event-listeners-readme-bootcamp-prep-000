function getIt(){
  $('p').on('click', function(){
  alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input[type="text"]').on('keydown', function(){
  alert('Hey!')
  })
}

function submitIt(){
  $('p').on('click', function(){
  alert('Hey!')
  })
}

$(document).ready(function(){

// call functions here

});
