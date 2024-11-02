async function importPublicKey(pem: any) {
  const binaryDer = str2ab(
    window.atob(pem.replace(/(-----(BEGIN|END) PUBLIC KEY-----|\n)/g, ""))
  );
  return await crypto.subtle.importKey(
    "spki",
    binaryDer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"]
  );
}

// Конвертация строки в ArrayBuffer
function str2ab(str: string) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

// Шифрование текста
export async function encryptText(text: string, publicKeyPem: string) {
  const publicKey = await importPublicKey(publicKeyPem);
  const encodedText = new TextEncoder().encode(text);
  const encrypted = await crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encodedText
  );
  return window.btoa(String.fromCharCode(...new Uint8Array(encrypted)));
}

// Пример использования
export const publicKeyPem = import.meta.env.VITE_PRIVATE_KEY;

// Функция для получения и шифрования данных initData
export async function encryptInitData() {
  const initData = window.Telegram.WebApp.initData; // Получаем данные initData
  const encryptedData = await encryptText(initData, publicKeyPem); // Шифруем initData
  return encryptedData; // Возвращаем зашифрованные данные
}

// Пример вызова функции
