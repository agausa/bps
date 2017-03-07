//___________________________ onCompany _______________________________________

function onCompany(){
  $('#section').empty();
  $('#section_extra').empty();
  $('#section').load("about.html");
};

//___________________________ onServices ______________________________________

function onServices(){
  $('#section').empty();
  $('#section_extra').empty();
  $('#section').load("services.html");
}

//___________________________ onPortfolio _____________________________________

function onPortfolio(){
  $('#section').empty();
  $('#section_extra').empty();

  $("#section").load("lirr.html");
  $("#section_extra").load("roundworld.html");
}

//___________________________ onContact _______________________________________

function onContact(){
  $('#section').empty();
  $('#section_extra').empty();

  $("#section").load("contacts.html");
}

//___________________________ onLIRRDetails ___________________________________

function onLIRRDetails(){
  $('#section').empty();
  $('#section_extra').empty();

  $("#section").load("lirr_details.html");
}

//___________________________ onWorldDetails __________________________________

function onWorldDetails(){
  $('#section').empty();
  $('#section_extra').empty();

  $("#section").load("roundworld.html");
  $("#section_extra").load("world_details.html");
}
