function getIt(){
  console.log('a');
  $('p').on('click', function(){
  alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    console.log('a');
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('input[type="text"]').on('keydown', function(e){
    console.log('a');
    if(e.which === 71){
      alert('Hey!')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    console.log('a');
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){
  console.log('a');
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
