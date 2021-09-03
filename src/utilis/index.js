import {auth} from '../configs/firebase';

async function signOut() {
    try {
        const user = await auth.signOut();
        console.log(user, 'Signed Out');
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export { signOut } ;