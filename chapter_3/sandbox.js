// else if statements

const password = 'p@ssword1';

// if(password.length >= 8) {
//     console.log('That password is long enough!');
// } else {
//     console.log('Password is not long enough');
// }

if(password.length >= 12) {
    console.log('That password is mighty strong!');
} else if(password.length >= 8) {
    console.log('That password is long enough!');
} else {
    console.log('Password is not long enough');
}
