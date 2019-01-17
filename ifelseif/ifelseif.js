var userName = prompt("Who's there?", '');
if (userName == 'Admin') {
    var pass = prompt('Password?', '');
} else if (userName == null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}
if (pass == 'TheMaster') {
    alert( 'Welcome!' );
} else if (pass == null) {
    alert( 'Canceled.' );
} else {
    alert( 'Wrong password' );
}