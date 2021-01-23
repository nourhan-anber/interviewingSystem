import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Service/http.service';
import { Rule } from '../data';


@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {

  companyName: string;
  rules: Rule[];
  allRulesChecked : boolean = false;
  constructor(private http: HttpService) {
   }

  ngOnInit(): void {
    this.http.getCompanyName().subscribe((res: string)=>{
      this.companyName = res;
    });
    this.http.getCompanyRules().subscribe((res: Rule[])=>{
      console.log(res);
      this.rules = res;
    });
  }
  allchecked(){
    this.rules.map((rule:Rule)=>{
      rule.checked;
      rule.checked == true ? this.allRulesChecked = true : this.allRulesChecked = false;
    });
  }
  changeCheckedStatus(ruleId){
    this.rules.map((rule : Rule)=>{
      if(rule.id == ruleId){
        rule.checked = true
      }
    });
    this.allchecked();
  }

}
