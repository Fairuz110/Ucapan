const messages = [
  { title: "About this web",
    content: "Website ini kumulai membuatnya dari 07 desember 2024, hingga 22 Januari."
  },
  {
    title: "Tujuan.",
    content: "Website ini kubuat dengan penuh rasa syukur dan apresiasi. Aku ingin mencurahkan apa yang mungkin sulit kusampaikan secara langsung. Dari awal hingga akhir, website ini adalah ungkapan sederhana dari banyak hal yang ingin kuberitahukan kepadamu."
  },
  {
    title: "Pertama : Yang membuatmu berkesan dihidupku.",
    content: "Waktu tahun pertama, aku suka cemas sendiri tanpa alasan. Tapi, salah satu alasan aku bisa melawan dan melewati rasa cemasku karena kamu, aku gatau kalau aku ga ketemu kamu bakalan gimana kelanjutannya. Jadi, terimakasih ya Nad."
  },
  {
    title: "Kedua : Tentang Dirimu.",
    content: "Menurutku, kamu adalah salah satu orang yang punya daya tarik tersendiri—nggak cuma dari caramu tampil, tapi juga dari bagaimana kamu membawa dirimu. Ada banyak hal yang aku kagumi dari kamu, bahkan hal-hal kecil yang mungkin nggak kamu sadari."
  },
  {
    title: "Harapan untuk kedepannya.",
    content: "Mungkin pada saat kamu membaca website ini kita sudah lulus dan akan berjalan di jalan yang berbeda. Aku berharap, walaupun kita nggak sering ketemu, kita tetap bisa saling cerita, saling support, dan tetap berteman baik. Aku kadang merasa kesepian, jadi aku harap suatu saat kita bisa cerita cerita lagi, seperti dulu."
  },
  { title: "Penutup.",
    content: "Aku nggak tahu masa depan akan membawa kita ke mana. Tapi aku berharap hubungan ini, dalam bentuk apa pun, tetap menjadi bagian berharga dari hidupku. Terima kasih sudah menjadi kamu—seseorang yang membuat hidupku jadi lebih baik."
  }
];

let currentIndex = 0;
function updateText() {
  document.getElementById("text-title").textContent = messages[currentIndex].title;
  document.getElementById("text-content").textContent = messages[currentIndex].content;


  if (currentIndex === messages.length - 1) {
    const nextButton = document.getElementById("next-button");
    nextButton.textContent = "End";
    nextButton.disabled = true;
  }
}

document.getElementById("next-button").addEventListener("click", () => {
  if (currentIndex < messages.length - 1) {
    currentIndex += 1; 
    updateText();
  }
});


updateText();