
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    console.log(target);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


var data =[
    {
        "name" : "develop",
        "percentage" : "70"
    },
    {
        "name" : "design",
        "percentage" : "80"
    }
];

function degreesToRadians(deg) {
    return (deg/180) * Math.PI;
}

function percentToRadians(percentage) {
    var degrees = percentage * 360 / 100;
    return degreesToRadians(degrees + 270);
}

var radius=50;

$.each(data, function(dataIndex, data) {
    console.log(dataIndex);
    var canvas = document.getElementById('canvas'+(dataIndex+1));
    var percentage = data.percentage;
    var x = canvas.width / 2;
    var y = canvas.height / 2;

    var context = canvas.getContext('2d');

    var startAngle = percentToRadians(0);
    var endAngle = percentToRadians(percentage);
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 3;

    context.strokeStyle = 'black';
    context.stroke();

    context.font = radius/2.5 + "px Ubuntu";
    context.fillStyle = "lightblue";
    context.textAlign = "center";

    context.fillText(percentage+"%", x, y*1.05);
});




