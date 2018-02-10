import {firebaseAuth } from './config'
export function authEmail(email,pass) {
   return firebaseAuth.createUserWithEmailAndPassword(email, pass)
}
export function  singInEmail(email,pass) {
	return firebaseAuth.signInWithEmailAndPassword(email,pass)
}
export function  signOut() {
	return firebaseAuth.signOut()
}