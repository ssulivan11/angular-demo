/* tslint:disable */

export class Team {
  id: number;
  name: string;
  link: string;
  venue: {
    id?: number;
    name: string;
    link: string;
    city: string;
    timeZone: {
      id: string;
      offset: number;
      tz: string;
    };
  };
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  division: {
    id: number;
    name: string;
    nameShort: string;
    link: string;
    abbreviation: string;
  };
  conference: {
    id: number;
    name: string;
    link: string;
  };
  franchise: {
    franchiseId: number;
    teamName: string;
    link: string;
  };
  shortName: string;
  officialSiteUrl: string;
  franchiseId: number;
  active: boolean;
}

export default class Teams {
  copyright: string;
  teams: {
    id: number;
    name: string;
    link: string;
    venue: {
      id?: number;
      name: string;
      link: string;
      city: string;
      timeZone: {
        id: string;
        offset: number;
        tz: string;
      };
    };
    abbreviation: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    division: {
      id: number;
      name: string;
      nameShort: string;
      link: string;
      abbreviation: string;
    };
    conference: {
      id: number;
      name: string;
      link: string;
    };
    franchise: {
      franchiseId: number;
      teamName: string;
      link: string;
    };
    shortName: string;
    officialSiteUrl: string;
    franchiseId: number;
    active: boolean;
  }[];
}
