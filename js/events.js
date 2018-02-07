function getIt(){
  $('p').on('click', function(){
  alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('input[type="text"]').on('keydown', function(event){
    console.log('a');
    if(e.which === 71){
      alert('Hey!')
    }
  })
}

function submitIt(){
  $('p').on('click', function(){
  alert('Hey!');
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
