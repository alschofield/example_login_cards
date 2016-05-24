console.log('connected')

function createTemplate (element, context) {
  var source = element.html();
  var template = Handlebars.compile(source);
  var context = context;
  var html = template(context);
  $('body').append(html);
}

function createRegisterTemplate(element, context) {
  var source = element.html();
  var template = Handlebars.compile(source);
  var context = context;
  var html = template(context);
  $('#register-element').append(html);
}

function setSecondPageAnime () {
  $('#username-signup').on('focus', function (){
    $('#username-label-signup').addClass('move-label-username-signup');
  });

  $('#password-signup').on('focus', function() {
    $('#password-label-signup').addClass('move-label-password-signup');
  })

  $('#password-signup-confirm').on('focus', function() {
    $('#password-label-signup-repeat').addClass('move-label-password-signup');
  })
}

function createBase () {
  $('#element').remove();
  createTemplate($('#login-template'), {});
  bigRedButton();
  firstPageEvents();
}

function closeButton () {
  $('#close-button').on('click', function() {
    $('#big-red-button').removeClass('activate');
    $('#big-red-button').addClass('reverse');
    $('#register-element').remove();
    $('#element').removeClass('move-first-card');
    $('#back-card').removeClass('move-second-card');
    $('#element').addClass('first-card-reverse');
    $('#back-card').addClass('second-card-reverse');
    createBase();
  })
}

function bigRedButton() {
  $('#big-red-button').on('click', function() {
    $('#big-red-button').addClass('activate');
    $('body').append($('<div>').attr('id', 'register-element'));
    window.setTimeout(createRegisterTemplate, 150, $('#sign-up-template'), {});
    $('#big-red-button').off();
    $('#element').removeClass('first-card-reverse');
    $('#back-card').removeClass('second-card-reverse');
    $('#element').addClass('move-first-card');
    $('#back-card').addClass('move-second-card');
    window.setTimeout(setSecondPageAnime, 151);
    window.setTimeout(closeButton, 151);
  });
}

function firstPageEvents () {
  $('#username-login').on('focus', function (){
    $('#username-label').addClass('move-label-username');
  });

  $('#password-login').on('focus', function() {
    $('#password-label').addClass('move-label-password');
    // $('#go-button').focus();
  });

  $('#password-login').on('keypress', function() {
    $('#go-button').addClass('activate-go')
  });

  $('#go-button').click(function() {
    $('#go-button').text('')
    $('#go-button').append($('<i>').addClass('icon-check'));
    $('.icon-check').addClass('checkmark');
    $('#go-button').css('background-color', '#EB2653');
    $('#go-button').css('border', 'none');
    $('.icon-check').addClass('rotate-checkmark');
  });
}

$(document).ready(function() {
  createBase();
});