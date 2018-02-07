function getIt(){
  console.log('a');
  $('p').on('click', function(){
  alert('Hey!');
  })
}

function frameIt(){
  console.log('a');
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
  console.log('a');
  $('p').on('click', function(){
  alert('Hey!');
  })
}

$(document).ready(function(){
  console.log('a');
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
