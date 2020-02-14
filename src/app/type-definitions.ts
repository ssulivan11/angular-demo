/* tslint:disable */
export class Player {
  copyright: string;
  people: {
    id: number;
    fullName: string;
    link: string;
    firstName: string;
    lastName: string;
    primaryNumber: string;
    birthDate: string;
    currentAge: number;
    birthCity: string;
    birthStateProvince: string;
    birthCountry: string;
    nationality: string;
    height: string;
    weight: number;
    active: true;
    alternateCaptain: false;
    captain: false;
    rookie: true;
    shootsCatches: string;
    rosterStatus: string;
    currentTeam: {
      id: number;
      name: string;
      link: string;
    };
    primaryPosition: {
      code: string;
      name: string;
      type: string;
      abbreviation: string;
    };
  }[];
}

export class PlayerStats {
  copyright: string;
  stats: {
    type: {
      displayName: string;
    };
    splits: {
      season: string;
      stat: {
        assists: number;
        goals: number;
        pim: number;
        games: number;
        penaltyMinutes: string;
        plusMinus: number;
        points: number;
      };
      team: {
        name: string;
        link: string;
      };
      league: {
        name: string;
        link: string;
      };
      sequenceNumber: number;
    }[];
  }[];
}

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
  roster?: {
    roster?: {
      person: {
        id: number;
        fullName: string;
        link: string;
      };
      jerseyNumber: string;
      position: {
        code: string;
        name: string;
        type: string;
        abbreviation: string;
      };
    }[];
    link: string;
  };
}

export class RosterTeam {
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
  roster?: {
    roster?: {
      person: {
        id: number;
        fullName: string;
        link: string;
      };
      jerseyNumber: string;
      position: {
        code: string;
        name: string;
        type: string;
        abbreviation: string;
      };
    }[];
    link: string;
  };
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
