//FullPage
$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#FFB6C1', '#C1FFB6', '#B6C1FF'],
        navigation: true,
        navigationPosition: 'right',  
        anchors: ['Cases', 'VacinationProcess', 'VacinationCentres']   
    });
});




//Chart.js
// Define chart labels
const labels = [
    'Daily Cases',
];


//Set labels, colours and data:
const data = {
  labels: labels,
  datasets: [
    {
      label: '1st Week',
      data: [6078],
      borderColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: ['#ADD8E6'],
    },
    {
      label: '2nd Week',
      data: [3121],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: ['#E6BBAD'],
    },
  ]
};



// Configure chart
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive:true,
        plugins: {
          title: {
            display: true,
            text: 'Daily Cases (pass 2 weeks)',
          }
        }
      }

};

// Render chart in <canvas>
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

//DataTables
$(document).ready(function () {
  $('#VacinationTables').DataTable({
      pageLength: 5,
  });
});


//ToolTip
tippy('#tooltip1', {
  content: 'Name: Bedok Polyclinic Address: 11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01 Singapore 469662 PhoneNumber: 6343 1121'
});

tippy('#tooltip1', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip2', {
  content: 'Name: Bukit Batok Polyclinic Address: 50 Bukit Batok West Avenue 3, Singapore 659164 PhoneNumber: 6343 1122'
});

tippy('#tooltip2', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip3', {
  content: 'Name: Bukit Merah Polyclinic Address: 162 Bukit Merah Central Level 4, Singapore 150163, PhoneNumber: 6343 1123'
});

tippy('#tooltip3', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip4', {
  content: 'Name: Choa Chu Kang Polyclinic Address: 2 Teck Whye Crescent, Singapore 688846 PhoneNumber: 6343 1124'
});

tippy('#tooltip4', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip5', {
  content: 'Name: Clementi Polyclinic Address: 451 Clementi Avenue 3, Singapore 120451, Singapore 688846 PhoneNumber: 6343 1125'
});

tippy('#tooltip5', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip6', {
  content: 'Name: Geylang Polyclinic Address: 21 Geylang East Central, Singapore 389707, Singapore 688846 PhoneNumber: 6343 1126'
});

tippy('#tooltip6', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip7', {
  content: 'Name: Hougang Polyclinic Address: 89 Hougang Avenue 4, Singapore 538829, PhoneNumber: 6765 1121'
});

tippy('#tooltip7', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip8', {
  content: 'Name: Jurong Polyclinic Address: 190 Jurong East Avenue 1, Singapore 609788, PhoneNumber: 6765 1122'
});

tippy('#tooltip8', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip9', {
  content: 'Name: Marine Parade Polyclinic Address: 80 Marine Parade Central, Singapore 440080, PhoneNumber: 6765 1123'
});

tippy('#tooltip9', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip10', {
  content: 'Name: Outram Polyclinic Address: 3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937 PhoneNumber: 6765 1124'
});

tippy('#tooltip10', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip11', {
  content: 'Name: Pasir Ris Polyclinic Address: 1 Pasir Ris Drive 4, Singapore 519457, PhoneNumber: 6765 1125'
});

tippy('#tooltip11', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});

tippy('#tooltip12', {
  content: 'Name: Pioneer Polyclinic Address: 26 Jurong West Street 61, Singapore 648201, PhoneNumber: 6765 1126'
});

tippy('#tooltip12', {
  placement: 'right', //place tippy to the right
  interactive: true, //allow interaction in tippy (e.g. click and select text)
  allowHTML: true, //allow HTML in tippy content
  delay: 500, //delay tippy showing and hiding (in milliseconds)

});


//NumberCounts
anime({
  targets: '.totalcasesNo',
  innerHTML: [0, 257510], //start and end values
  easing: 'linear',
  round: 1, //rounds off to zero decimal places
  duration: 2000
});

anime({
  targets: '.hospitalNo',
  innerHTML: [0, 1365], //start and end values
  easing: 'linear',
  round: 1, //rounds off to zero decimal places
  duration: 2000
});

anime({
  targets: '.totaldeathNo',
  innerHTML: [0, 678], //start and end values
  easing: 'linear',
  round: 1, //rounds off to zero decimal places
  duration: 2000
});


  