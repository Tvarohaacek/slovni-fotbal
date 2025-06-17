// Rozšířený český slovník pro hru Slovní fotbal
export const CZECH_DICTIONARY = new Set([
    // Základní slova
    'auto', 'okno', 'ovoce', 'pes', 'stůl', 'lampa', 'ananas', 'slon', 'nůž', 'žába',
    'armáda', 'dům', 'míč', 'čaj', 'jablko', 'oko', 'orel', 'len', 'noc', 'cesta',
    'auta', 'adresa', 'architektura', 'akorát', 'akce', 'akvaristika', 'aktovka',
    'telefon', 'notebook', 'traktor', 'robot', 'tkanina', 'autobus', 'stroj',
    'jídlo', 'oceán', 'náměstí', 'íčko', 'ovčák', 'kino', 'ořech', 'hlava',
    'automat', 'tvar', 'rover', 'raketa', 'tulipán', 'nápoj', 'jahoda', 'atlas',
    'sklo', 'oheň', 'ňadra', 'řeka', 'akvárium', 'minimum', 'umění', 'igloo',
    'okurka', 'asfalt', 'tráva', 'avokádo', 'opera', 'apetit', 'tužka', 'agenda',

    // Rozšířený slovník
    'absence', 'absolvent', 'abstrakce', 'academic', 'akcent', 'aktivita', 'alkohol', 'ampér',
    'analýza', 'anděl', 'antika', 'aplikace', 'apryl', 'arabština', 'arcibiskup', 'arena',
    'argument', 'artista', 'asistent', 'asfaltka', 'ateliér', 'atletika', 'atmosféra', 'audiokniha',

    'babka', 'bachor', 'bahno', 'balík', 'bambule', 'banán', 'barák', 'básník', 'batoh', 'bavlna',
    'bedna', 'beran', 'beton', 'bicykl', 'biolog', 'biskuit', 'blaho', 'blesk', 'blízko', 'bobek',
    'bohatství', 'bojovník', 'bomba', 'borec', 'botanik', 'bouře', 'boxér', 'brambor', 'bratr', 'břeh',
    'břicho', 'budova', 'bufet', 'buňka', 'burza', 'bydlení', 'bytost',

    'cácorka', 'cahoun', 'cedule', 'celnice', 'cembal', 'cestopis', 'chalupa', 'chata', 'chemie', 'chléb',
    'chlup', 'chmel', 'chovatel', 'chrám', 'chyba', 'cibule', 'cihla', 'cinkot', 'církev', 'citron',
    'civilista', 'cizinec', 'člověk', 'čokoláda', 'čtení', 'čtvrt', 'čtyřka', 'čučka', 'čůrání',

    'dálava', 'daň', 'databáze', 'dcera', 'debata', 'dědeček', 'deka', 'demokracie', 'derby', 'deska',
    'detergens', 'devíza', 'dialekt', 'diamant', 'dietní', 'digitál', 'diplom', 'dirigent', 'diskuse', 'divadlo',
    'doba', 'dobytek', 'dochází', 'doktor', 'dolina', 'domov', 'doprava', 'doručení', 'dosah', 'doutník',
    'dráha', 'drama', 'droga', 'družstvo', 'dubový', 'duchovno', 'důkaz', 'důvod', 'dvířka', 'dynamo',

    'ekonom', 'elektronika', 'elegance', 'embargo', 'energie', 'epidemie', 'epizoda', 'epopej', 'erotika', 'esej',
    'etapa', 'etika', 'euforie', 'evropa', 'evoluce', 'expedice', 'expert', 'exploze', 'export', 'extrakt',

    'fabrika', 'fakticky', 'falešný', 'fanfáry', 'farma', 'fasáda', 'fašismus', 'faucet', 'favorit', 'faxový',
    'finance', 'firma', 'filozof', 'fotbal', 'fotografie', 'fyzika', 'fyzička',

    'galerie', 'garantova', 'generál', 'genetika', 'geologie', 'geometrie', 'girlanda', 'gitara', 'globus', 'golf',
    'góman', 'gotika', 'grafika', 'gramofon', 'granat', 'gymnastika',

    'habitus', 'hadice', 'haiku', 'halda', 'hamlet', 'handlování', 'harmonie', 'havran', 'hebký', 'hedvábí',
    'helikoptéra', 'herectví', 'historie', 'hokej', 'holka', 'hostina', 'hotel', 'houby', 'hudba', 'humanita',
    'humor', 'hurikán', 'hýždě',

    'ideál', 'identita', 'iglú', 'ihned', 'ikona', 'ilustrace', 'imigrant', 'impérium', 'import', 'improvizace',
    'inciativa', 'indián', 'industrie', 'infekce', 'inflace', 'informace', 'injekce', 'inkaso', 'inscenace', 'institut',
    'instrument', 'integrace', 'inteligence', 'internet', 'interval', 'intuice', 'invaze', 'investor', 'ironie', 'isolace',

    'jachta', 'jadro', 'jagoda', 'jakost', 'jantar', 'japonsko', 'jarmark', 'jasmín', 'jasný', 'jaternice',
    'jazyk', 'jednání', 'jednoduše', 'jehla', 'jelen', 'jeskyně', 'ještěr', 'jezdec', 'jízda', 'jogurt',
    'jóga', 'jukebox', 'junák', 'jurist',

    'kabát', 'kachna', 'kadidlo', 'káfr', 'kajak', 'kakao', 'kalendář', 'kamera', 'kamínek', 'kanál',
    'kanapé', 'kancelář', 'kapitán', 'kapka', 'kapusta', 'karamel', 'karban', 'karta', 'kasino', 'kašna',
    'katalog', 'katastrofa', 'kategorie', 'katedra', 'katolík', 'kavárna', 'kazeta', 'kemp', 'керъ', 'kilogram',
    'kilometr', 'klášter', 'klavír', 'kletba', 'kniha', 'knoflík', 'kobyla', 'kočka', 'kód', 'koláč',
    'kolečko', 'kolonáda', 'komiks', 'komunismus', 'koncentrace', 'koncert', 'kongres', 'konkurence', 'konstrukce', 'konverzace',
    'koordinace', 'kopie', 'koridor', 'kořen', 'kostel', 'kotleta', 'kouzlo', 'krákor', 'krása', 'kreativita',
    'kreditka', 'kreveta', 'kriminál', 'kritik', 'kronika', 'kruh', 'krypta', 'krystal', 'kuchyň', 'kultura',
    'kupec', 'kurz', 'kus', 'květina', 'kyselina',

    'laboratoř', 'labyrint', 'lajka', 'lakování', 'lampa', 'lancet', 'laptop', 'laser', 'látka', 'lávka',
    'legenda', 'lékárna', 'lekce', 'lemon', 'lepidlo', 'les', 'letadlo', 'levhart', 'liberace', 'licence',
    'lidskost', 'limetka', 'lingvistika', 'literatura', 'liturgie', 'lobování', 'logika', 'loterie', 'louka', 'luxus',
    'lyra', 'lžíce',

    'magie', 'magnetka', 'majetek', 'maketa', 'malba', 'maminka', 'mango', 'manžel', 'mapa', 'marmeláda',
    'maskot', 'matematika', 'matrace', 'maximum', 'mechanik', 'medaile', 'medicína', 'melodie', 'memento', 'mentor',
    'metafora', 'meteorit', 'metoda', 'metrika', 'mezera', 'mikroskop', 'milionář', 'minerál', 'minimum', 'minuta',
    'miska', 'mísnost', 'mistrovství', 'mít', 'mixér', 'mladý', 'mléko', 'mobil', 'modlitba', 'molekula',
    'monarch', 'monitoring', 'monument', 'morálka', 'motiv', 'mouka', 'mozek', 'mráček', 'mše', 'multimédia',
    'mumie', 'munice', 'museum', 'musikál', 'muzeum', 'mýdlo', 'mystika',

    'nábytek', 'náčelník', 'nadace', 'nádoba', 'nafta', 'nahoru', 'naivita', 'nájemník', 'název', 'náměstek',
    'nápad', 'náplast', 'narozeniny', 'násada', 'nástroj', 'natáčení', 'návod', 'návrat', 'návrh', 'nebo',
    'neděle', 'negace', 'nehoda', 'nejenom', 'nemoc', 'nervózní', 'nešťastný', 'neurologie', 'nevěsta', 'nikde',
    'nitka', 'nižší', 'nobelovka', 'noc', 'noha', 'nominace', 'normalita', 'notebook', 'novela', 'nucený',
    'nukleární', 'nutriční',

    'oáza', 'obálka', 'obchod', 'občan', 'obdiv', 'oběd', 'obezita', 'obhajoba', 'objem', 'oblast',
    'obraz', 'obrázek', 'obsah', 'obtíž', 'obvaz', 'oceán', 'ocet', 'oční', 'oddělení', 'odklad',
    'odkaz', 'odpočinek', 'odsun', 'odvoz', 'oficiální', 'ohrada', 'okamžik', 'okolí', 'okrasný', 'olej',
    'olympiáda', 'omáčka', 'omluva', 'onemocnění', 'opera', 'operace', 'opice', 'opozice', 'optika', 'orchestr',
    'ordinace', 'orgán', 'orloj', 'osoba', 'ostatní', 'ostrov', 'otázka', 'otec', 'otisk', 'ovládání',
    'ovzduší', 'ozdoba',

    'pacient', 'páčka', 'padák', 'pádem', 'pájevka', 'palác', 'pamětní', 'panák', 'panika', 'papír',
    'paradigma', 'parfémy', 'parketa', 'parlament', 'parohy', 'partie', 'partner', 'pasáž', 'pastýř', 'patent',
    'patriot', 'pavilon', 'páznač', 'pedagogika', 'peklo', 'pension', 'perfekt', 'periodika', 'persona', 'pestrost',
    'petice', 'pevnost', 'filozofie', 'pianista', 'píchání', 'piknik', 'pilota', 'pionýr', 'píseň', 'pistole',
    'pivnice', 'pláž', 'plášť', 'platba', 'platforma', 'plavání', 'plechovka', 'ples', 'pletení', 'plíce',
    'plochý', 'plotna', 'plynár', 'pobočka', 'počasí', 'podání', 'podpis', 'podívání', 'poezie', 'pohádka',
    'pohár', 'pohledy', 'pojišťovna', 'pokój', 'polemika', 'politika', 'polo', 'pomník', 'ponožka', 'popisy',
    'porcelán', 'portál', 'poselství', 'poster', 'potlach', 'potravina', 'používání', 'poziční', 'pozorování', 'pozvání',
    'práce', 'prádlo', 'pragmatismus', 'praktika', 'pramen', 'právo', 'předání', 'předmět', 'předseda', 'prefer',
    'prezentace', 'prezident', 'princip', 'priorita', 'privát', 'problém', 'procento', 'prodej', 'profesor', 'program',
    'projekt', 'propast', 'prorok', 'prostor', 'protekce', 'protokol', 'proudění', 'prozaik', 'průmysl', 'průzkum',
    'psychiatr', 'psycholog', 'publikace', 'půjčka', 'pumpa', 'puška', 'pyramida',

    'kvalita', 'kvantum', 'květina', 'rychlost', 'rychle', 'rytmus',

    'rádiový', 'rafinace', 'raketa', 'rameno', 'raport', 'realizace', 'recepty', 'redaktor', 'reforma', 'registrace',
    'reklamní', 'rekord', 'relace', 'relikvie', 'rembrant', 'renovace', 'reportáž', 'reprezentace', 'resety', 'restaurant',
    'revoluce', 'rezervace', 'rhýmovy', 'riziký', 'rodina', 'romance', 'rostlina', 'rozhovor', 'rubrika', 'rukopis',

    'sabotáž', 'šachty', 'šálek', 'šampon', 'šance', 'šatník', 'scénář', 'sedlák', 'sekretář', 'sektor',
    'semafor', 'semestry', 'sendvič', 'senzace', 'seříy', 'setník', 'seznam', 'shoda', 'signály', 'síla',
    'simulace', 'sítě', 'sklad', 'sklávka', 'sloupce', 'slova', 'službáky', 'smlouva', 'sněhový', 'sociologie',
    'software', 'souprava', 'spacák', 'spektrum', 'spirálý', 'spisovatel', 'statistika', 'stavba', 'střecha', 'studie',
    'stylový', 'substráty', 'súčasť', 'sympatie', 'syndikát', 'systém',

    'tablety', 'taktika', 'talent', 'tanker', 'taška', 'technika', 'televizor', 'teorie', 'textil', 'tiskárna',
    'tlačítka', 'tradice', 'trendy', 'tribuny', 'trochu', 'tubka', 'turecký', 'turnaj', 'typický',

    'účastník', 'údolí', 'úhel', 'únava', 'úprava', 'úrazý', 'ústa', 'úvaha',

    'válka', 'varianty', 'věda', 'vědomý', 'věšák', 'vibrace', 'vítej', 'vodník', 'vorlový', 'výroba',
    'výsledky', 'výstava', 'vzájemný', 'vzdálený',

    'zábavy', 'záchrana', 'zadání', 'zájemce', 'zákony', 'založení', 'zápasy', 'záruky', 'závod', 'změny',
    'znalost', 'značky', 'zprávy', 'zrcadlo', 'zubař', 'zvířata'
]);

export const getDictionarySize = (): number => CZECH_DICTIONARY.size;

export const isValidWord = (word: string): boolean => {
    return CZECH_DICTIONARY.has(word.toLowerCase());
};