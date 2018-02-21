import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { TemakorokComponent } from "./components/temakorok/temakorok.component";
import { TemakorComponent } from "./components/temakor/temakor.component";

import { MuveletekTermeszetesSzamokkalComponent } from './components/tema/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component';
import { MuveletekEgeszSzamokkalComponent } from './components/tema/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component';
import { MuveletekRacionalisSzamokkalComponent } from './components/tema/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component';

import { HosszTeruletTerfogatUrComponent } from './components/tema/mertekvaltas/hossz-terulet-terfogat-ur/hossz-terulet-terfogat-ur.component';
import { IdoTomegEgyebComponent } from './components/tema/mertekvaltas/ido-tomeg-egyeb/ido-tomeg-egyeb.component';

import { HalmazLogikaComponent } from './components/tema/halmazok-logika-kombinatorika/halmaz-logika/halmaz-logika.component';
import { KombinatorikaComponent } from './components/tema/halmazok-logika-kombinatorika/kombinatorika/kombinatorika.component';

import { StatisztikaComponent } from './components/tema/statisztika-grafikon/statisztika/statisztika.component';
import { GrafikonelemzesComponent } from './components/tema/statisztika-grafikon/grafikonelemzes/grafikonelemzes.component'

import { SzamhalmazokComponent } from './components/tema/szamhalmazok-hatvanyozas/szamhalmazok/szamhalmazok.component';
import { SzamhalmazMuveletekComponent } from './components/tema/szamhalmazok-hatvanyozas/szamhalmaz-muveletek/szamhalmaz-muveletek.component';
import { HatvanyozasComponent } from './components/tema/szamhalmazok-hatvanyozas/hatvanyozas/hatvanyozas.component';

import { SzamsorozatokComponent } from './components/tema/sorozatok/szamsorozatok/szamsorozatok.component';
import { SzamtaniSorozatokComponent } from './components/tema/sorozatok/szamtani-sorozatok/szamtani-sorozatok.component';

import { AranySzazalekAlapfogalmakComponent } from './components/tema/aranyossag-szazalek/arany-szazalek-alapfogalmak/arany-szazalek-alapfogalmak.component';
import { SzovegertelmezesComponent } from './components/tema/aranyossag-szazalek/szovegertelmezes/szovegertelmezes.component';
import { SzazalekszamitasComponent } from './components/tema/aranyossag-szazalek/szazalekszamitas/szazalekszamitas.component';
import { ForditottAranyossagComponent } from './components/tema/aranyossag-szazalek/forditott-aranyossag/forditott-aranyossag.component';

import { OsztoTobbszorosComponent } from './components/tema/szamelmelet-oszthatosag/oszto-tobbszoros/oszto-tobbszoros.component';
import { LegnagyobbLegkisebbComponent } from './components/tema/szamelmelet-oszthatosag/legnagyobb-legkisebb/legnagyobb-legkisebb.component';

import { TajekozodasKoordinatarendszerbenComponent } from './components/tema/koordinata-linearis-fuggvenyek/tajekozodas-koordinatarendszerben/tajekozodas-koordinatarendszerben.component';
import { LinearisFuggvenyekComponent } from './components/tema/koordinata-linearis-fuggvenyek/linearis-fuggvenyek/linearis-fuggvenyek.component';

import { AlgebraiKifejezesekComponent } from './components/tema/algebrai-kifejezesek/algebrai-kifejezesek/algebrai-kifejezesek.component';
import { MuveletekAlgebraiKifejezesekelkComponent } from './components/tema/algebrai-kifejezesek/muveletek-algebrai-kifejezesekkel/muveletek-algebrai-kifejezesekkel.component';

import { ElsofokuEgyenletekComponent } from './components/tema/elsofoku-egyenletek/elsofoku-egyenletek/elsofoku-egyenletek.component';
import { ElsofokuEgyenlotlensegekComponent } from './components/tema/elsofoku-egyenletek/elsofoku-egyenlotlensegek/elsofoku-egyenlotlensegek.component';

import { SzovegesAltalanosComponent } from './components/tema/szoveges-feladatok/szoveges-altalanos/szoveges-altalanos.component';
import { SzovegesVegyesComponent } from './components/tema/szoveges-feladatok/szoveges-vegyes/szoveges-vegyes.component';

import { SikgeometriaAlapfogalmakComponent } from './components/tema/sikgeometria/sikgeometria-alapfogalmak/sikgeometria-alapfogalmak.component';
import { SikgeometriaHaromszogekComponent } from './components/tema/sikgeometria/sikgeometria-haromszogek/sikgeometria-haromszogek.component';
import { SikgeometriaSokszogekComponent } from './components/tema/sikgeometria/sikgeometria-sokszogek/sikgeometria-sokszogek.component';
import { SikgeometriaEgybevagosagComponent } from './components/tema/sikgeometria/sikgeometria-egybevagosag/sikgeometria-egybevagosag.component';

import { KeruletComponent } from './components/tema/kerulet-terulet-pitagorasz/kerulet/kerulet.component';
import { TeruletComponent } from './components/tema/kerulet-terulet-pitagorasz/terulet/terulet.component';

import { FelszinTerfogatAlapfogalmakComponent } from './components/tema/felszin-terfogat/felszin-terfogat-alapfogalmak/felszin-terfogat-alapfogalmak.component';
import { TestekFelszineComponent } from './components/tema/felszin-terfogat/testek-felszine/testek-felszine.component';
import { TestekTerfogataComponent } from './components/tema/felszin-terfogat/testek-terfogata/testek-terfogata.component';

export const AppRoutes: any = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "temakorok", component: TemakorokComponent },
  { path: "temakorok/:temakor", component: TemakorComponent },

  { path: 'temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal', component: MuveletekTermeszetesSzamokkalComponent },
  { path: 'temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal', component: MuveletekEgeszSzamokkalComponent },
  { path: 'temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal', component: MuveletekRacionalisSzamokkalComponent },

  { path: 'temakorok/mertekvaltas/hossz-terulet-terfogat-ur', component: HosszTeruletTerfogatUrComponent },
  { path: 'temakorok/mertekvaltas/ido-tomeg-egyeb', component: IdoTomegEgyebComponent },

  { path: 'temakorok/halmazok-logika-kombinatorika/halmaz-logika', component: HalmazLogikaComponent },
  { path: 'temakorok/halmazok-logika-kombinatorika/kombinatorika', component: KombinatorikaComponent },

  { path: 'temakorok/statisztika-grafikon/statisztika', component: StatisztikaComponent },
  { path: 'temakorok/statisztika-grafikon/grafikonelemzes', component: GrafikonelemzesComponent },

  { path: 'temakorok/szamhalmazok-hatvanyozas/szamhalmazok', component: SzamhalmazokComponent },
  { path: 'temakorok/szamhalmazok-hatvanyozas/szamhalmaz-muveletek', component: SzamhalmazMuveletekComponent },
  { path: 'temakorok/szamhalmazok-hatvanyozas/hatvanyozas', component: HatvanyozasComponent },

  { path: 'temakorok/sorozatok/szamsorozatok', component: SzamsorozatokComponent },
  { path: 'temakorok/sorozatok/szamtani-sorozatok', component: SzamtaniSorozatokComponent },

  { path: 'temakorok/aranyossag-szazalek/arany-szazalek-alapfogalmak', component: AranySzazalekAlapfogalmakComponent },
  { path: 'temakorok/aranyossag-szazalek/szovegertelmezes', component: SzovegertelmezesComponent },
  { path: 'temakorok/aranyossag-szazalek/szazalekszamitas', component: SzazalekszamitasComponent },
  { path: 'temakorok/aranyossag-szazalek/forditott-aranyossag', component: ForditottAranyossagComponent },

  { path: 'temakorok/szamelmelet-oszthatosag/oszto-tobbszoros', component: OsztoTobbszorosComponent },
  { path: 'temakorok/szamelmelet-oszthatosag/legnagyobb-legkisebb', component: LegnagyobbLegkisebbComponent },

  { path: 'temakorok/koordinata-linearis-fuggvenyek/tajekozodas-koordinatarendszerben', component: TajekozodasKoordinatarendszerbenComponent },
  { path: 'temakorok/koordinata-linearis-fuggvenyek/linearis-fuggvenyek', component: LinearisFuggvenyekComponent },

  { path: 'temakorok/algebrai-kifejezesek/algebrai-kifejezesek', component: AlgebraiKifejezesekComponent },
  { path: 'temakorok/algebrai-kifejezesek/muveletek-algebrai-kifejezesekkel', component: MuveletekAlgebraiKifejezesekelkComponent },

  { path: 'temakorok/elsofoku-egyenletek/elsofoku-egyenletek', component: ElsofokuEgyenletekComponent },
  { path: 'temakorok/elsofoku-egyenletek/elsofoku-egyenlotlensegek', component: ElsofokuEgyenlotlensegekComponent },

  { path: 'temakorok/szoveges-feladatok/szoveges-altalanos', component: SzovegesAltalanosComponent },
  { path: 'temakorok/szoveges-feladatok/szoveges-vegyes', component: SzovegesVegyesComponent },

  { path: 'temakorok/sikgeometria/sikgeometria-alapfogalmak', component: SikgeometriaAlapfogalmakComponent },
  { path: 'temakorok/sikgeometria/sikgeometria-haromszogek', component: SikgeometriaHaromszogekComponent },
  { path: 'temakorok/sikgeometria/sikgeometria-sokszogek', component: SikgeometriaSokszogekComponent },
  { path: 'temakorok/sikgeometria/sikgeometria-egybevagosag', component: SikgeometriaEgybevagosagComponent },

  { path: 'temakorok/kerulet-terulet-pitagorasz/kerulet', component: KeruletComponent },
  { path: 'temakorok/kerulet-terulet-pitagorasz/terulet', component: TeruletComponent },

  { path: 'temakorok/felszin-terfogat/felszin-terfogat-alapfogalmak', component: FelszinTerfogatAlapfogalmakComponent },
  { path: 'temakorok/felszin-terfogat/testek-felszine', component: TestekFelszineComponent },
  { path: 'temakorok/felszin-terfogat/testek-terfogata', component: TestekTerfogataComponent }
];

export const AppComponents: any = [
  HomeComponent,
  AboutComponent,
  TemakorokComponent,
  TemakorComponent,
  MuveletekTermeszetesSzamokkalComponent,
  MuveletekEgeszSzamokkalComponent,
  MuveletekRacionalisSzamokkalComponent,
  HosszTeruletTerfogatUrComponent,
  IdoTomegEgyebComponent,
  HalmazLogikaComponent,
  KombinatorikaComponent,
  StatisztikaComponent,
  GrafikonelemzesComponent,
  SzamhalmazokComponent,
  SzamhalmazMuveletekComponent,
  HatvanyozasComponent,
  SzamsorozatokComponent,
  SzamtaniSorozatokComponent,
  AranySzazalekAlapfogalmakComponent,
  SzovegertelmezesComponent,
  SzazalekszamitasComponent,
  ForditottAranyossagComponent,
  OsztoTobbszorosComponent,
  LegnagyobbLegkisebbComponent,
  TajekozodasKoordinatarendszerbenComponent,
  LinearisFuggvenyekComponent,
  AlgebraiKifejezesekComponent,
  MuveletekAlgebraiKifejezesekelkComponent,
  ElsofokuEgyenletekComponent,
  ElsofokuEgyenlotlensegekComponent,
  SzovegesAltalanosComponent,
  SzovegesVegyesComponent,
  SikgeometriaAlapfogalmakComponent,
  SikgeometriaHaromszogekComponent,
  SikgeometriaSokszogekComponent,
  SikgeometriaEgybevagosagComponent,
  KeruletComponent,
  TeruletComponent,
  FelszinTerfogatAlapfogalmakComponent,
  TestekFelszineComponent,
  TestekTerfogataComponent
];
