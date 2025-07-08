fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Data Mempelai
    const mempelaiLengkapElements = document.querySelectorAll(".mempelai-lengkap");
    const mempelaiPerempuan = document.querySelectorAll(".nama-wanita");
    const mempelaiPria = document.querySelectorAll(".nama-pria");

    // Ganti isinya satu per satu
    mempelaiLengkapElements.forEach(element => {
      element.innerHTML = data.mempelai_lengkap;
    });

    mempelaiPerempuan.forEach(element => {
      element.innerHTML = data.nama_mempelai_wanita;
    });

    mempelaiPria.forEach(element => {
      element.innerHTML = data.nama_mempelai_pria;
    });

    // Tanggal Acara Cover
    document.getElementById("tanggal-acara").innerHTML = data.tanggal_acara;

    // Tanggal Acara Cover
    document.getElementById("surah").innerHTML = data.surah;
    document.getElementById("ayat").innerHTML = data.ayat;

    // Nama Lengkap & Ortu
    mempelaiPerempuan.forEach(element => {
      element.innerHTML = data.nama_mempelai_wanita;
    });
    document.getElementById("nama-lengkap-wanita").innerHTML = data.nama_lengkap_wanita;
    document.getElementById("ortu-wanita").innerHTML = data.ortu_wanita;
    document.getElementById("ig-wanita").innerHTML = data.ig_wanita;
    // ===== Update Link Instagram Wanita =====
    const igLinkWanita = document.getElementById("ig-link-wanita");
    igLinkWanita.href = `https://www.instagram.com/${data.ig_wanita}`;

    mempelaiPria.forEach(element => {
      element.innerHTML = data.nama_mempelai_pria;
    });
    document.getElementById("nama-lengkap-pria").innerHTML = data.nama_lengkap_pria;
    document.getElementById("ortu-pria").innerHTML = data.ortu_pria;
    document.getElementById("ig-pria").innerHTML = data.ig_pria;
    // ===== Update Link Instagram Pria =====
    const igLinkPria = document.getElementById("ig-link-pria");
    igLinkPria.href = `https://www.instagram.com/${data.ig_pria}`;

    // Data Akad Nikah
    document.getElementById("akad-hari").innerHTML = data.akad_hari;
    document.getElementById("akad-tanggal").innerHTML = data.akad_tanggal;
    document.getElementById("akad-jam").innerHTML = data.akad_jam;
    document.getElementById("akad-keterangan").innerHTML = data.akad_keterangan;
    document.getElementById("akad-alamat").innerHTML = data.akad_alamat;
    // ===== Update Link Maps Akad =====
    const mapsAkad = document.getElementById("akad-maps");
    mapsAkad.href = `https://maps.app.goo.gl/3dKNMB3MwQEE4usY6`;
    
    // Data Resepsi
    document.getElementById("resepsi-hari").innerHTML = data.resepsi_hari;
    document.getElementById("resepsi-tanggal").innerHTML = data.resepsi_tanggal;
    document.getElementById("resepsi-jam").innerHTML = data.resepsi_jam;
    document.getElementById("resepsi-keterangan").innerHTML = data.resepsi_keterangan;
    document.getElementById("resepsi-alamat").innerHTML = data.resepsi_alamat;
    // ===== Update Link Maps Resepsi =====
    const mapsResepsi = document.getElementById("resepsi-maps");
    mapsResepsi.href = `https://maps.app.goo.gl/3dKNMB3MwQEE4usY6`;

    // Cerita Lanjutan 1
    document.getElementById("cerita-tahun1").innerHTML = data.cerita_tahun1;
    document.getElementById("cerita-lanjutan1").innerHTML = data.cerita_lanjutan1;

    // Cerita Lanjutan 2
    document.getElementById("cerita-tahun2").innerHTML = data.cerita_tahun2;
    document.getElementById("cerita-lanjutan2").innerHTML = data.cerita_lanjutan2;

    // Cerita Lanjutan 3
    document.getElementById("cerita-tahun3").innerHTML = data.cerita_tahun3;
    document.getElementById("cerita-lanjutan3").innerHTML = data.cerita_lanjutan3;

    // Cerita Lanjutan 4
    document.getElementById("cerita-tahun4").innerHTML = data.cerita_tahun4;
    document.getElementById("cerita-lanjutan4").innerHTML = data.cerita_lanjutan4;

    // Foto Rekening
    const mandiri = document.querySelectorAll(".mandiri");
    mandiri.forEach(mandiri => {
      mandiri.src = data.mandiri_bank;
    });

    const bri = document.querySelectorAll(".bri");
    bri.forEach(bri => {
      bri.src = data.bri_bank;
    });

    const dana = document.querySelectorAll(".dana");
    dana.forEach(dana => {
      dana.src = data.dana_bank;
    });

    // Rekening
    document.getElementById("rekening-nama1").innerHTML = data.rekening_nama1;
    document.getElementById("rekening-nomor1").innerHTML = data.rekening_nomor1;
    document.getElementById("rekening-nama2").innerHTML = data.rekening_nama2;
    document.getElementById("rekening-nomor2").innerHTML = data.rekening_nomor2;
    document.getElementById("rekening-nama3").innerHTML = data.rekening_nama3;
    document.getElementById("rekening-nomor3").innerHTML = data.rekening_nomor3;

    // Alamat Kado
    document.getElementById("alamat-kado").innerHTML = data.alamat_kado;
    
    // Cover Web
    document.getElementById("cover-tanggal").innerHTML = data.cover_tanggal;

    // document.getElementById("mempelai-lengkap1").innerHTML = data.mempelai_lengkap;
  })
  .catch(error => console.error("Gagal memuat data JSON:", error));
