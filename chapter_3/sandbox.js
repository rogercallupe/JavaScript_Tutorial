// logical operators - OR || and  AND &&

const password = 'p@ssword123456';

if(password.length >= 12 && password.includes('@')) {
    console.log('That password is mighty strong!');
} else if(password.length >= 8 || password.includes('@') && password.length >= 5) {
    console.log('That password is long enough!');
} else {
    console.log('Password is not long enough');
}
