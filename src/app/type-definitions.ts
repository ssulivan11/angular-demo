/* tslint:disable */
export class Standings {
  copyright: string;
  records: {
    standingsType: string;
    league: {
      id: number;
      name: string;
      link: string;
    };
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
    teamRecords: {
      team: {
        id: number;
        name: string;
        link: string;
      };
      leagueRecord: {
        wins: number;
        losses: number;
        ot: number;
        type: string;
      };
      regulationWins: number;
      goalsAgainst: number;
      goalsScored: number;
      points: number;
      divisionRank: string;
      divisionL10Rank: string;
      divisionRoadRank: string;
      divisionHomeRank: string;
      conferenceRank: string;
      conferenceL10Rank: string;
      conferenceRoadRank: string;
      conferenceHomeRank: string;
      leagueRank: string;
      leagueL10Rank: string;
      leagueRoadRank: string;
      leagueHomeRank: string;
      wildCardRank: string;
      row: number;
      gamesPlayed: number;
      streak: {
        streakType: string;
        streakNumber: number;
        streakCode: string;
      };
      lastUpdated: string;
    }[];
  }[];
}

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
