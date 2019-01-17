var a=prompt('nhập browser:');
var browser=a.toString();
console.log(browser);
switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;
    case 'Chorme':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;
    default:
        alert( 'We hope that this page looks ok!' );
}