export default function setCookie(nome: string, valor: string | null, dias: number): void {
  const d = new Date();
  d.setTime(d.getTime() + dias * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${nome}=${valor};${expires};path=/`;
}
