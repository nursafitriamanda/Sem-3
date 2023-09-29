function dataMahasiswa(parm1, parm2) {
    let result = (parm1 + parm2)/2
    return result
}

let namaMahasiswa = "Amanda Nursafitri"
let kelas = "TI 22 H"
let jurusan = "Teknik Informatika"
let universitas = "Nusa Putra"
let NIM = 20220040262
let ipkPertama = 4
let ipkKedua = 4

let totalIpk = dataMahasiswa(ipkPertama, ipkKedua)

console.log(`Nama: ${namaMahasiswa}`);
console.log(`Universitas: ${universitas}`);
console.log(`Jurusan: ${jurusan}`);
console.log(`NIM: ${NIM}`);
console.log(`IPK: ${totalIpk}`);
