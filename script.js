let gelap = false;

function gantiWarna() {
  if (gelap === false) {
    document.body.style.backgroundColor = "#1a0a2e";
    gelap = true;
  } else {
    document.body.style.backgroundColor = "#0d0d0d";
    gelap = false;
  }
}

document.getElementById("tombol").addEventListener("click", gantiWarna);

document.getElementById("tombol").addEventListener("mouseover", function(){document.body.style.backgroundColor = "#c9a84c"});
document.getElementById("tombol").addEventListener("mouseout", function(){document.body.style.backgroundColor = "#0d0d0d"});

let skills = ["html", "css", "javascript", "python", "java"];

for (let i = 0; i < skills.length; i++) {
    let li = document.createElement("li");
    li.textContent = skills[i];
    document.getElementById("skill-list").appendChild(li);
}

let profil = {
    nama: "Sahrul Ridwansyah",
    usia: 22,
    kota: "bekasi",
    hobi: ["html", "css", "javascript"]
}

console.log(profil.nama);
console.log(profil.usia);
console.log(profil.kota);
console.log(profil.hobi);

for (let i = 0; i < profil.hobi.length; i++) {
    console.log("hobi ke-" + (i+1) + ":" + profil.hobi[i]);
}