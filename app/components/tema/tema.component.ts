import { setString, getString } from "application-settings";

export class TemaComponent {
  temakor: any = [];
  tema: any = {};
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
          console.log(JSON.stringify(tema));
          break;
        }
      }
    } else {
      // Elofordulhat, hogy nincs meg a keresett tema
      this.tema.title = 'Not found';
    }
  }

  goBack() {
    this.p.actionBarHidden = true;
    this.l.back();
  }
}
