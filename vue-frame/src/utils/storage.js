/*
 * @Author: 
 * @Date: 2018-12-24
 * @Last Modified by:   
 * @Last Modified time: 2018-12-24
 */
import Cookies from 'js-cookie'; // 支持所有的浏览器

export function setLocalStorage (key, value) {
    localStorage.setItem(key, value);
}

export function getLocalStorage (key) {
    return localStorage.getItem(key);
}

export function removeLocalStorage (key) {
    localStorage.removeItem(key);
}

export function setSessionStorage (key, value) {
    sessionStorage.setItem(key, value);
}

export function getSessionStorage (key) {
    return sessionStorage.getItem(key);
}

export function removeSessionStorage (key) {
    sessionStorage.removeItem(key);
}

export function setCookie (key, value) {
    Cookies.set(key, value);
}

export function getCookie (key) {
    return Cookies.get(key);
}

export function removeCookie (key) {
    Cookies.remove(key);
}
