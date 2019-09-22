'use strict';
$_$wp(1);
const fs = ($_$w(1, 0), require('fs'));
const file = ($_$w(1, 1), process.argv[2]);
$_$w(1, 2), fs.readFile('target.txt', (err, data) => {
    $_$wf(1);
    if ($_$w(1, 3), err) {
        {
            $_$w(1, 4);
            throw Error(`Error! ${ err }`);
        }
    }
    let strData = ($_$w(1, 5), data.toString().split('\n'));
    return $_$w(1, 6), strData.length;
});
$_$wpe(1);