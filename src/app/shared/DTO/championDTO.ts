export class ChampionDTO {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  tags: string[];
  partype: string;
  allytips: string[];
  enemytips: string[];
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: ImageDTO;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    }
  };
  spells: SpellDTO[] = [];
  skins: SkinDTO[];
  recommended: any[];

  constructor(data: any) {
    this.id = data.id;
    this.key = data.key;
    this.name = data.name;
    this.title = data.title;
    this.lore = data.lore;
    this.tags = data.tags;
    this.partype = data.partype;
    this.allytips = data.allytips;
    this.enemytips = data.enemytips;
    this.info = {
      attack: data.info.attack,
      defense: data.info.defense,
      magic: data.info.magic,
      difficulty: data.info.difficulty,
    };
    this.image = data.image;
    this.stats = {
      hp: data.stats.hp,
      hpperlevel: data.stats.hpperlevel,
      mp: data.stats.mp,
      mpperlevel: data.stats.mpperlevel,
      movespeed: data.stats.movespeed,
      armor: data.stats.armor,
      armorperlevel: data.stats.armorperlevel,
      spellblock: data.stats.spellblock,
      spellblockperlevel: data.stats.spellblockperlevel,
      attackrange: data.stats.attackrange,
      hpregen: data.stats.hpregen,
      hpregenperlevel: data.stats.hpregenperlevel,
      mpregen: data.stats.mpregen,
      mpregenperlevel: data.stats.mpregenperlevel,
      crit: data.stats.crit,
      critperlevel: data.stats.critperlevel,
      attackdamage: data.stats.attackdamage,
      attackdamageperlevel: data.stats.attackdamageperlevel,
      attackspeedperlevel: data.stats.attackspeedperlevel,
      attackspeed: data.stats.attackspeed,
    };
    this.passive = data.passive;
    this.spells = data.spells;
    this.skins = data.skins;
    this.recommended = data.recommended;
  }
}


export class SpellDTO {
  id: string = "";
  name: string = "";
  description: string = "";
  tooltip: string = "";
  leveltip: {
    label: string[];
    effect: string[]
  } = { label: [], effect: [] };
  maxrank: number = 0;
  cooldown: number[] = [];
  cooldownBurn: string = "";
  cost: number[] = [];
  costBurn: string = "";
  datavalues: any = {};
  effect: Array<number | null>[] = [];
  effectBurn: (string | null)[] = [];
  vars: any[] = [];
  costType: string = "";
  maxammo: string = "";
  range: number[] = [];
  rangeBurn: string = "";
  image: ImageDTO = new ImageDTO();
  resource: string = "";
}

export class ImageDTO {
  full: string = "";
  sprite: string = "";
  group: string = "";
  x: number = 0;
  y: number = 0;
  w: number = 0;
  h: number = 0;
}

export class SkinDTO {
  id: string = ""
  num: number = 0
  name: string = ""
  chromas: boolean = false
}
