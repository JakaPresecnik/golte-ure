import { OsebaService } from './../oseba.service';
import { DomovService } from './../domov.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pregled',
  templateUrl: './pregled.component.html',
  styleUrls: ['./pregled.component.css']
})
export class PregledComponent implements OnInit {
  leto: number;
  mesec: number;
  osebje: any[];
  data: any;
  loaded: Boolean = false;

  calcSkupaj(emso) {
    let ureSkupaj: number = 0;
    let visinskeSkupaj: number = 0;
    let nocneSkupaj: number = 0;
    let nedeljskeSkupaj: number = 0;
    let praznicneSkupaj: number = 0;
    let dopustSkupaj: number = 0;
    let bolniskaSkupaj: number = 0;
    let prevoziSkupaj : number = 0;
    let malicaSkupaj: number = 0;
    let dodatekMalicaSkupaj: number = 0;
    let dezurniSkupaj: number = 0;
    
    emso.forEach(dan => {
      let skupaj = this.osebaService.calcSkupaj(new Date(dan.od), new Date(dan.do), new Date(dan.odd), new Date(dan.dod));
      ureSkupaj +=  dan.do ? skupaj : 0;
      visinskeSkupaj += dan.visinska;
      nocneSkupaj += dan.do ? this.osebaService.calcNocne(new Date(dan.od), new Date(dan.do)) : 0;
      nocneSkupaj += dan.dod ? this.osebaService.calcNocne(new Date(dan.odd), new Date(dan.dod)) : 0;
      nedeljskeSkupaj += dan.do ? this.osebaService.calcNedeljske(new Date(dan.od), new Date(dan.do)) : 0;
      nedeljskeSkupaj += dan.dod ? this.osebaService.calcNedeljske(new Date(dan.odd), new Date(dan.dod)) : 0;
      praznicneSkupaj += dan.do ? this.osebaService.calcPraznicne(new Date(dan.od), new Date(dan.do), this.data.prazniki) : 0;
      praznicneSkupaj += dan. dod ? this.osebaService.calcPraznicne(new Date(dan.odd), new Date(dan.dod), this.data.prazniki) : 0;
      dopustSkupaj += dan.dopust ? 1 : 0;
      bolniskaSkupaj += dan.bolniska ? 1 : 0;
      prevoziSkupaj += dan.do ? (dan.dod ? 2 : 1) : 0;
      malicaSkupaj += skupaj >= 4 ? 1 : 0;
      dodatekMalicaSkupaj += skupaj >= 10 ? (skupaj - 8) * 1 : 0;
      dezurniSkupaj += dan.dezurni ? 1 : 0;
    });
    nocneSkupaj /= 60;

    return {
      ureSkupaj, 
      visinskeSkupaj, 
      nocneSkupaj, 
      nedeljskeSkupaj,
      praznicneSkupaj,
      dopustSkupaj, 
      bolniskaSkupaj, 
      prevoziSkupaj,
      malicaSkupaj,
      dodatekMalicaSkupaj,
      dezurniSkupaj
    };
  }
  constructor(
    private service: DomovService, 
    private osebaService: OsebaService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.leto = +params.get('leto');
      this.mesec = +params.get('mesec');
    });

    this.service.getMesecData(this.leto, this.mesec)
    .subscribe(res => {
      this.data = res;
      this.loaded = true;
    })
  }

}
