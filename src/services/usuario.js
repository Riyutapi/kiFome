import { useMemo } from "react";

let login = 'beta_tester';
let email = 'beta_tester@gmail.com';
let senha = '12345';

const loginOriginal = 'beta_tester';
const emailOriginal = 'beta_tester@gmail.com';
const senhaOriginal = '12345';

export function SGLogin(text = '') {
    if (text !== '') {
        login = text;
    }
    return login;
}

export function useLogin() {
    return useMemo(() => SGLogin());
}

export function SGEmail(text = '') {
    if (text !== '') {
        email = text;
    }
    return email;
}

export function useEmail() {
    return useMemo(() => SGEmail());
}

export function SGSenha(text = '') {
    if (text !== '') {
        senha = text;
    }
    return senha;
}

export function useSenha() {
    return useMemo(() => SGSenha());
}

export function excluirConta() {
    login = loginOriginal;
    email = emailOriginal;
    senha = senhaOriginal;
}
