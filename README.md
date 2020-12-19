Getting night shift hours probably needs to be simplified:
`  getNocne(sD: Date, eD: Date) {
    let ura: number = sD.getHours();
    let minute: number = sD.getMinutes();
    let uraDo: number = eD.getHours();

    let dvaDni: boolean = !!(eD.getDate()-sD.getDate());
    
    let hNocna: number = 0;
    let mNocna: number = 0;

    for(; ura < 25; ura++) {
      if (ura >= uraDo && !dvaDni) {
        break;
      }else if(ura < 22 && ura >= 6) {
        continue;
      }else{
        if(minute !== 0 && uraDo > 6 && uraDo < 22) {
          mNocna = +minute;
          minute = 0;
        }else {
          hNocna++;
        }
      }

      if(ura === 24) {
        ura = 0;
        dvaDni = !dvaDni;
      }
    }
    return hNocna+ ':' + mNocna;
  }`˙
  inside oseba-vrstica.component.ts.