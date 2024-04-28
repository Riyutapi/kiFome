import { useMemo } from "react";

let login = 'Diego_Freire';
let email = 'diegogarotolegal@gmail.com';
let senha = '12345';

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
