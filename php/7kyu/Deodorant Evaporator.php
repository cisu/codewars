<?php
function evaporator($content, $evap_per_day, $threshold) {
    // your code

$days = 0;
$currentlvl = 100;
$lowestlvl = 100 * ($threshold * 0.01);

while($currentlvl >= $lowestlvl){
  $days++;
  $currentlvl -=($currentlvl * ($evap_per_day * 0.01));
}

return $days;
}


?>
