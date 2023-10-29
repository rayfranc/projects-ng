
import { Component, Input, OnInit } from '@angular/core';
import { Permission } from '../_services/permission.service';
// import { OAuthStorage } from 'angular-oauth2-oidc';
import { Environment, HitList, Organization } from 'toco-lib';

@Component({
	selector: 'search-list',
	templateUrl: './search-list.component.html',
	styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit
{

	@Input()
	public hitList: HitList<Organization>;
  public pdfType: 'list' | 'single' =  'list';


  public env: Environment;
  public constructor(
    private _env: Environment)
	{ this.env = this._env;}

	public ngOnInit(): void
	{

	}
	/**
	* hasPermission return true if the user have permission
	*/
	public get hasPermission(): boolean {
		let permission = new Permission();

		if (permission.hasPermissions("curator")|| permission.hasPermissions("admin")) {
			return true;
		}
		return false;
	}
}
