'use strict';
$_$wp(1);
const fs = ($_$w(1, 0), require('fs'));
const file = ($_$w(1, 1), process.argv[2]);
let data = ($_$w(1, 2), fs.readFileSync(file));
let fmtData = ($_$w(1, 3), data.toString().split('\n'));
$_$w(1, 4), $_$tracer.log(fmtData.length - 1, 'fmtData.length - 1', 1, 4);
$_$wpe(1);