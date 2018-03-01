import { setString, getString } from "application-settings";

export class TemaComponent {
  temakor: any = [];
  tema: any = {};
  activFeladat = 0;
  megoldasok = {};
  r;
  l;
  p;

  constructor(
    router,
    location,
    page
  ) {
    this.r = router;
    this.l = location;
    this.p = page;

    const dataJson = getString("dataJson");
    const temakorok = JSON.parse(dataJson).temakorok;
    const currentUrl = router.url;
    // Talajuk meg a temakort eloszor
    for (const temakor of temakorok) {
      if (currentUrl.indexOf(temakor.url) > -1) {
        this.temakor = temakor;
        break;
      }
    }
    // majd talaljuk meg a temat a temakoron belul, ha vannak temak
    if (this.temakor.temak) {
      for (const tema of this.temakor.temak) {
        if (tema.url === currentUrl) {
          this.tema = tema;
          break;
        }
      }
    } else {
      // Elofordulhat, hogy nincs meg a keresett tema
      this.tema.title = 'Not found';
    }
  }

  feladatValaszto(feladat) {
    if (this.activFeladat !== feladat) {
      this.megoldasok = {};
      this.activFeladat = feladat;
    } else {
      this.activFeladat = 0;
    }
  }

  megoldasValaszto(megoldas) {
    this.megoldasok[megoldas] = !this.megoldasok[megoldas];
  }

  goBack() {
    this.p.actionBarHidden = true;
    this.l.back();
  }
}
