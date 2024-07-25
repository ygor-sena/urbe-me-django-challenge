/**
 * @brief This function shows or hides the direction steps table in map.html
 */
function DirectionStepsToggle(){
  let element = $('#dir-toggle');
  let dir_table = $('#dir-table')
  let isHidden = dir_table.is(':hidden');

  if (isHidden) {
    dir_table.fadeIn()
    dir_table.removeAttr("hidden")
    element.html('hide <a href="javascript:void(0)" onclick="DirectionStepsToggle()">here')
  } else {
    dir_table.fadeOut()
    dir_table.attr("hidden", "hidden")
    element.html('click <a href="javascript:void(0)" onclick="DirectionStepsToggle()">here')
  }
}
