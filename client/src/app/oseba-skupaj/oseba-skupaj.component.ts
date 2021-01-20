import { OsebaService } from './../oseba.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[oseba-skupaj]',
  templateUrl: './oseba-skupaj.component.html',
  styleUrls: ['./oseba-skupaj.component.css']
})
export class OsebaSkupajComponent implements OnInit {
  @Input() data;
  @Input() prazniki: number[];
  ureSkupaj: number = 0;
  visinskeSkupaj: number = 0;
  nocneSkupaj: number = 0;
  nedeljskeSkupaj: number = 0;
  praznicneSkupaj: number = 0;
  dopustSkupaj: number = 0;
  bolniskaSkupaj: number = 0;
  prevoziSkupaj: number = 0;
  malicaSkupaj: number = 0;
  dodatekMalicaSkupaj: number = 0;
  dezurniSkupaj: number = 0;

  constructor(private service: OsebaService) { }

  ngOnInit(): void {
    this.data.forEach(dan => {
      let skupaj = this.service.calcSkupaj(new Date(dan.od), new Date(dan.do), new Date(dan.odd), new Date(dan.dod));

      this.ureSkupaj += dan.do ? skupaj : 0;
      this.visinskeSkupaj += dan.visinska;
      this.nocneSkupaj += dan.do ? this.service.calcNocne(new Date(dan.od), new Date(dan.do)) : 0;
      this.nocneSkupaj += dan.dod ? this.service.calcNocne(new Date(dan.odd), new Date(dan.dod)) : 0;
      this.nedeljskeSkupaj += dan.do ? this.service.calcNedeljske(new Date(dan.od), new Date(dan.do)) : 0;
      this.nedeljskeSkupaj += dan.dod ? this.service.calcNedeljske(new Date(dan.odd), new Date(dan.dod)) : 0;
      this.praznicneSkupaj += dan.do ? this.service.calcPraznicne(new Date(dan.od), new Date(dan.do), this.prazniki) : 0;
      this.praznicneSkupaj += dan. dod ? this.service.calcPraznicne(new Date(dan.odd), new Date(dan.dod), this.prazniki) : 0;
      this.dopustSkupaj += dan.dopust ? 1 : 0;
      this.bolniskaSkupaj += dan.bolniska ? 1 : 0;
      this.prevoziSkupaj += dan.do ? (dan.dod ? 2 : 1) : 0;
      this.malicaSkupaj += skupaj >= 4 ? 1 : 0;
      this.dodatekMalicaSkupaj += skupaj >= 10 ? (skupaj - 8) * 1 : 0;
      this.dezurniSkupaj += dan.dezurni ? 1 : 0;
    })
    this.nocneSkupaj /= 60;
    console.log(this.data)
  }

}
