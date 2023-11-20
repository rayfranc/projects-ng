import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project } from "../project/person.entity";
import { AggregationsComponent, Aggr } from "toco-lib";

@Component({
  selector: "aggregation-project-view",
  templateUrl: "./aggregations.component.html",
  styleUrls: ["./aggregations.component.scss"],
})
export class AggregationViewComponent extends AggregationsComponent {
  @Input() public projectAggregations: Aggr;
  constructor(private _activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    console.log(this.projectAggregations);
  }
}
