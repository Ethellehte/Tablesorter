$(document).ready(function() {
  var sortable_table = function(index, array) {
  index++
  return add_row_in_table(get_html_code(sorted_by_value(index, rows)));
}

var inverse_sortable_table = function(number) {
  number++
  return add_row_in_table(get_html_code(inverse_sorted(number, rows)));
}

$('thead th').each(function() {
  var th = $(this)
  var th_index = th.index()
  var table = $('.sortable');
  th.each(function() {
    $(this).append("<a href='#' class='asc'>up</a>")
    $(this).append("<a href='#' class='desc'>down</a>")
  });
});


$('.asc').each(function(index) {
  var array = rows
  $(this).data('up_index', index).click(function() {
    sortable_table($(this).data('up_index'), array);
  });
}); 


$('.desc').each(function(index) {
  var array = rows
    $(this).data('down_index', index).click(function() {
      inverse_sortable_table($(this).data('down_index'), array);
  })
}); 

var add_row_in_table = function(array) {
  $(".sortable tbody").empty();
  array.forEach(function(element) {
    $(".sortable tbody").append(element)
  });
}

var get_html_code = function(array) {
  var html_strings = [];
  array.forEach(function(element) {
    html_strings.push(element[0]);
});
  return html_strings
}

var sorted_by_value = function(number, array) {
  var sorted_array;
  return sorted_array = _.sortBy(array , function(el) { return el[number] });
}

var inverse_sorted = function(number, array) {
  return sorted_by_value(number, array).reverse()
}

var get_td_values_from = function(tr){
  var result = [];
  $(tr).children().each(function(i, td){
    result.push(td.innerHTML);
  });
  return result;
};
var trs = $(".sortable tbody").children();
var rows = [];
trs.each(function(i,tr) {
   rows.push([tr.outerHTML].concat(get_td_values_from(tr)));
})
});

var sortable_table = function(index, array) {
  index++
  return add_row_in_table(get_html_code(sorted_by_value(index, rows)));
}

var inverse_sortable_table = function(number) {
  number++
  return add_row_in_table(get_html_code(inverse_sorted(number, rows)));
}

$('thead th').each(function() {
  var th = $(this)
  var th_index = th.index()
  var table = $('.sortable');
  th.each(function() {
    $(this).append("<a href='#' class='asc'>up</a>")
    $(this).append("<a href='#' class='desc'>down</a>")
  });
});


$('.asc').each(function(index) {
  var array = rows
  $(this).data('up_index', index).click(function() {
    sortable_table($(this).data('up_index'), array);
  });
}); 
