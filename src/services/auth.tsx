export const SYSTEM_API_KEY: string = '505763d6-4202-4b05-9efc-93b366939bcf';
export const ACCESS_KEY: string = null;
export const isAuthenticated: any = () => localStorage.getItem(ACCESS_KEY) !== null;
export const getToken: any = localStorage.getItem(ACCESS_KEY);
export const login: any = token => localStorage.setItem(ACCESS_KEY, token);
export const logout: any = () => localStorage.removeItem(ACCESS_KEY);
