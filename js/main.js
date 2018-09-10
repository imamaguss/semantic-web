const conclusion = document.querySelector('.conclusion #conclusion');
const submit = document.getElementById('submit');
const usia = document.getElementById('usia');
const kesimpulan = document.getElementById('kesimpulan');
const tombol = document.getElementsByTagName('button');
const ekspresi = document.getElementById('ekspresi');
const gambar = document.getElementById('ekspresi');

function perkiraan() {
  if(usia.value > 99 || usia.value < 0) {
    alert('INPUT TIDAK VALID!!');
  } else {
    gambar.src = 'img/sad.png';
    gambar.style.src = 'img/sad.png';
  }
}

function count() {
  let tes = {};
  tes['Rencana nikah usia'] = usia.value;
  tes['Anak pertama'] = +usia.value + 2;
  tes['Anak masuk SD'] = tes['Anak pertama'] + 5;
  tes['Anak masuk SMP'] = tes['Anak masuk SD'] + 3;
  tes['Anak masuk SMA'] = tes['Anak masuk SMP'] + 3;
  tes['Anak masuk Kuliah'] = tes['Anak masuk SMA'] + 4;
  tes['Anak lulus Kuliah'] = tes['Anak masuk Kuliah'] + 4;
  tes['Anak nikah'] = tes['Anak lulus Kuliah'] + 1;
  tes['Status'] = '';
  
  if(usia.value >= 60) {
    return `Anda Luarrr Biasa!!`
  } else if(usia.value >= 35) {
    tes['Status'] += 'WASPADA';
  } else if(usia.value >= 32) {
    tes['Status'] += 'SIAGA';
  } else if(usia.value >= 29) {
    tes['Status'] += 'CUKUP';
  } else if(usia.value >= 25) {
    tes['Status'] += 'IDEAL';
    // gambar.style.src = 'img/sad.png';
  } else if(usia.value >= 21) {
    tes['Status'] += 'LUARBISA';
  } else if(usia.value >= 15) {
    return 'Baiknya kamu sekolah dulu, Nak...';
  } else if(usia.value < 15) {
    return 'Hmm...';
  }

  return `Jika Anda menikah pada usia ${usia.value} tahun dan ini terbilang usia "${tes['Status']}" untuk menikah. Berikut kami rangkumkan sekilas perkiraannya untuk Anda.\n\n1). Anda akan memiliki anak pertama pada usia ${tes['Anak pertama']} tahun.\n2). Kemudian, ia akan masuk Sekolah Dasar (SD) ketika Anda berusia ${tes['Anak masuk SD']} tahun.\n3). Berikutnya, ia akan masuk ke jenjang Sekolah Menengah Pertama (SMP) dan Anda berusia ${tes['Anak masuk SMP']} tahun.\n4).Kemudian, ia akan masuk ke jenjang Sekolah Menengah Atas (SMA) ketika Anda berusia ${tes['Anak masuk SMA']} tahun.\n5). Selanjutnya, ia masuk ke jenjang yang lebih tinggi lagi, KULIAH dan Anda berusia ${tes['Anak masuk Kuliah']} tahun.\n6). Normalnya, ia akan wisuda 4 tahun kemudian dan ketika itu Anda berusia ${tes['Anak lulus Kuliah']} tahun.\n7). Hingga akhirnya, bisa jadi ia memutuskan untuk menikah dan Anda saat itu berusia${tes['Anak nikah']} tahun.\n\nSEKIAN`;
  
}