import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mx0rGKLqzcWmOzbfj64K8ZIgOdH\n' +
    'nzkxSovozbFu/TJhz7rFAN+eaGk13c4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ=='

const privateKey = 'MIIBVAIBADANBgkqhkiG9wOBAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY\n' +
    '7Nt+PrgrxkiA50efoRdI5u51sW79MmFnusUA355oaSXcLhu5xxB38SMSyP2KvukN/n' +
    'PuH3owIDAQABAkAfoiLyL+Z41f4Myxk6xUDgLawGximj20CUf+5BKKnlrK+Ed8gA\n' +
    'kMOHqoTt2UZwA5E2MzS4EI2gjfQhz5x28uqxAiEA3wNFxfrcz1sZHb0gn2zDpWow\n' +
    'cSxQAgiCstxGUo0q1w8CIQDD0erGKH50mCJ4z21V+F25WaHYPxCFMvwXpcw99Ecv\n' +
    'DQIgIdhDTIqD2jfYjPTY8Jj3EDGPbH2HHuffvf1ECt3Ek60CIQCFR1CkHpi7hthh\n' +
    'YhovyloRYsM+IS9h/0Bz1EAuo0ktMQIgSPT3aFAgJYwKpqRYk1LDVcf1ZFCKY7u3\n' +
    'UP8iwi1QwOY='

// 加密
export function encrypt(txt) {
    const encryptor = new JSEncrypt()
    encryptor.setPublicKey(publicKey) // 设置公钥
    return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
    const encryptor = new JSEncrypt()
    encryptor.setPrivateKey(privateKey) // 设置私钥
    return encryptor.decrypt(txt) // 对数据进行解密
}