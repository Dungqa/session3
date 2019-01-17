
function battat() {
    var good = document.getElementById("myCheckbox").checked;
    console.log(good);
    var cheap = document.getElementById("myCheckbox1").checked;
    var fast = document.getElementById("myCheckbox2").checked;
    switch (good) {
        case true:
            switch (cheap) {
                case true:
                    document.getElementById("myCheckbox2").checked = false;
                    break;
            }
            break;
    }
}
function battat2() {
        var good = document.getElementById("myCheckbox").checked;
        console.log(good);
        var fast = document.getElementById("myCheckbox1").checked;
        var cheap = document.getElementById("myCheckbox2").checked;
        switch (fast) {
            case true:
            switch (good) {
                case true:
                    document.getElementById("myCheckbox1").checked=false;

            }
        }
    }
function battat1() {
    var good = document.getElementById("myCheckbox").checked;
    console.log(good);
    var fast = document.getElementById("myCheckbox1").checked;
    var cheap = document.getElementById("myCheckbox2").checked;
    switch (fast) {
        case true:
            switch (cheap) {
                case true:
                    document.getElementById("myCheckbox").checked=false;

            }
    }
}













