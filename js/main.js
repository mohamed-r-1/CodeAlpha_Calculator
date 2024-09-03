// Handle addition button click
function add() {
    var act = 0, b = 0;
    act = f.ddd.value;
    b = act.charAt(act.length - 1);

    if (b == '+' || b == '-' || b == '/' || b == '*') {

        f.ddd.value = act.substring(0, act.length - 1);
        f.ddd.value += '+';
    } else {

        f.ddd.value += '+';
    }
}

// Handle subtraction button click
function sub() {
    var act = 0, b = 0;
    act = f.ddd.value;
    b = act.charAt(act.length - 1);

    if (b == '+' || b == '-' || b == '/' || b == '*') {

        f.ddd.value = act.substring(0, act.length - 1);
        f.ddd.value += '-';
    } else {

        f.ddd.value += '-';
    }
}

// Handle division button click
function di() {
    var act = 0, b = 0;
    act = f.ddd.value;
    b = act.charAt(act.length - 1);

    if (b == '+' || b == '-' || b == '/' || b == '*') {

        f.ddd.value = act.substring(0, act.length - 1);
        f.ddd.value += '/';
    } else {

        f.ddd.value += '/';
    }
}

// Handle multiplication button click
function mul() {
    var act = 0, b = 0;
    act = f.ddd.value;
    b = act.charAt(act.length - 1);

    if (b == '+' || b == '-' || b == '/' || b == '*') {

        f.ddd.value = act.substring(0, act.length - 1);
        f.ddd.value += '*';
    } else {

        f.ddd.value += '*';
    }
}
