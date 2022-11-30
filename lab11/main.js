$(function () {
  $("#my_links li a").css('color', 'blue');
  $("#my_links li a[href^='documents']").css({'font-style': 'italic', 'font-size': '24px'});
  $("td").css({'border': '8px solid black', 'padding': '10px','font-size': '64px'});
  $("table").css({'border-collapse': 'collapse'});
  $("table#moto_table tr:nth-child(even) > td:last-child").css({'background-color': 'yellow','color': 'white'});
});