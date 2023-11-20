import { Entity, Role } from "toco-lib";

class Title {
  title: string;
  titleType: string;
  lang: string;
}

class Creator {
  creatorName: string;
  familyName: string;
  givenName: string;
}

class Contributor {
  contributorName: string;
  contributorType: string;
  familyName: string;
}

class FundingReference {
  awardNumber: string;
  awardURI: string;
  founderName: string;
}
export class Project extends Entity {
  /****************************************************
   * `id` and `identifiers` are extended from `Entity`
   ****************************************************/

  /**
   * Person gender
   */
  title: Title[];

  /**
   * Profile of the people in Sceiba, the details
   */
  creator: Creator[];

  contributor: Contributor[];

  fundingReference: FundingReference[];

  /************************************* More Data ******************************/
}
