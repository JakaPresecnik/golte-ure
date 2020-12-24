Getting night shift hours probably needs to be simplified:
` 
calcNocne(sD: Date, eD: Date) {
    let ura: number = sD.getHours();
    let minute: number = sD.getMinutes();
    let uraDo: number = eD.getHours();
    let minuteDo: number = eD.getMinutes();

    let dvaDni: boolean = !!(eD.getDate()-sD.getDate());

    let mNocna: number = 0;

    for(; ura < 25; ura++) {   
      if (ura > uraDo && !dvaDni) {  
        break;
      }else if(ura < 22 && ura > 6) {
        minute = 0;
        continue;
      }else if(minute !== 0){
        mNocna += minute; 
        minute = 0;
      }else if(minuteDo !== 0 && (uraDo >= 22 || uraDo < 6)) {
        mNocna += minuteDo; 
        minuteDo = 0;
      }else {
        mNocna += 60;
      }
      if(ura === 24) {
        ura = 1;
        dvaDni = !dvaDni;
      }
    }
    return mNocna;
  }
  `
  inside oseba.service.ts.