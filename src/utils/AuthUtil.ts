import firebase from './firebase';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();

export function login(): Promise<void> {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithRedirect(provider)
            .then(() => {
                resolve();
            })
            .catch(error => reject(error));
    });
}

export function logout(): Promise<void> {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signOut()
            .then(() => resolve())
            .catch(error => reject(error));
    });
}

export function auth(): Promise<firebase.User> {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .onAuthStateChanged(user => resolve(user));
    });
}
