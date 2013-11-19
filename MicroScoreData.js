﻿function overridenResult(teamName, teamId, score) {
    var result = new Result(teamName, score);
    result.teamId = teamId;
    return result;
}

function Result(teamName, score) {
    this.teamName = teamName;
    this.teamId = 0;
    this.score = score;
}

function CommonTour(tourId, leads, tourA, tourB){
    this.tourId = tourId;
    this.leads = leads;
    this.A = tourA;
    this.B = tourB;
}

function Tour(tourId, tourType, results) {
    this.results = results;
    this.tourId = tourId;
    this.tourType = tourType;
    this.max = 0;
}

function Team(teamId, teamName) {
    this.teamId = teamId;
    this.teamName = teamName;
    this.wins = 0;
    this.draws = 0;
    this.loses = 0;
    this.points = 0;
    this.totalAnsweredQuestions = 0;
    this.totalMaxQuestions = 0;
    this.persents = 0;
}

var teams = [];

/*
1Б  МИД-2 Не мешки ворочать Кефирные грибки
1А  Нехорошая квартира Ad astra Ыбырвалг
2Б  Фунтики  Плинтус Хунвейбины
2А  Страпелька Боливария Status Quo
3Б  Одушевленные аэросани  Эйфью Кеша
3А  ХРU Енотики-7 Утечка мозгов
4Б  Не вопрос  Пиромане Хаджипирьях
4А  Умник Ять Джоизация
5Б  МаФи  АМО-натюрлих LiebenBier
5А  Middle  Zемляне Moulin Rouge
6Б  IX-XI  Злые белки Артефакт
6А  Сумма технологий Саветум New-реанимация
*/

var tours = [
    new CommonTour(
        1,
        ["Нехорошая квартира", "Ad astra", "Ыбырвалг", "МИД-2", "Не мешки ворочать", "Кефирные грибки"],
        new Tour(
            1,
            "A",  [
            new Result("Middle", 24),
            new Result("Summa Technologiae", 21),
            new Result("Одушевленные аэросани", 20),
            new Result("Не вопрос", 18),
            new Result("Хронически разумные United", 18),
            new Result("Джоизация", 18),
            new Result("Умник", 17),
            new Result("Плинтус", 16),
            new Result("Дятлы", 15),
            new Result("Кеша", 15),
            new Result("Эйфью", 15),
            new Result("Грумис", 14),
            new Result("Утечка мозгов", 14),
            new Result("Злые белки", 14),
            new Result("Страпелька", 14),
            new Result("Имитируем сарказм", 14),
            new Result("Енотики-7", 14),
            new Result("МаФи", 14),
            new Result("Артефакт", 13),
            new Result("New-реанимация", 13),
            new Result("Боливария", 13),
            new Result("Ять", 13),
            new Result("IX-XI", 13),
            new Result("Zемляне", 13),
            new Result("Эталон этанола", 13),
            new Result("Саветум", 12),
            new Result("Status Quo", 12),
            new Result("АМО-натюрлих", 12),
            new Result("Фунтики", 12),
            new Result("Рухавiк", 11),
            new Result("Хунвейбины", 11),
            new Result("Пиромане", 11),
            new Result("Lieben Bier", 10),
            new Result("Йоужики", 10),
            new Result("Фиаско штурвалу", 10),
            new Result("Хаджипирьях", 10),
            new Result("Мулен Руж", 9),
            new Result("Министерство правды", 5)
            ]),
        new Tour(
            1,
            "B", [
            new Result("Дятлы", 23),
            new Result("Имитируем сарказм", 22),
            new Result("Эталон этанола", 21),
            new Result("Министерство правды", 19),
            new Result("Фиаско штурвалу", 19),
            new Result("Грумис", 19),
            new Result("Рухавiк", 19),
            new Result("Дзета", 18),
            new Result("Хрустальная сова", 18),
            new Result("ХТТ", 18),
            new Result("Невкусный тюлень", 18),
            new Result("Канада", 17),
            new Result("Дети филфака", 17),
            new Result("С блэк джеком", 17),
            new Result("EcoSapiens", 16),
            new Result("Дарвин и утконос", 16),
            new Result("К слону не прислоняться", 16),
            new Result("Ничего такое название", 15),
            new Result("ХЗИВ", 15),
            new Result("Баррикадное мышление", 15),
            new Result("Фламандский лев", 14),
            new Result("Холодец", 14),
            new Result("Падшие редуцированные", 13),
            new Result("ЛОМ", 13),
            new Result("Аматары амарэта", 13),
            new Result("Аццкий пепелац", 13),
            new Result("Падший Карлсон", 12),
            new Result("Слёзы Мичурина", 12),
            new Result("Конь-буквоед", 12),
            new Result("Стальная ложка", 12),
            new Result("А бао а ку", 11),
            new Result("Mario Brazzers", 11),
            new Result("Ultima Ratio", 10),
            new Result("Параболоид", 10),
            new Result("Марка", 10),
            new Result("Animalz", 10),
            new Result("Карл Клару", 10),
            new Result("Мамонтлошечка", 10),
            new Result("Hava Nagila", 10),
            new Result("Скупая слеза на бородатой щеке", 9),
            new Result("Delta Force", 9),
            new Result("Принцесса Зига", 6),
            new Result("Жесткое женское доминирование", 4)
            ])),
        new CommonTour(
            2,
            ["Фунтики", "Плинтус", "Хунвейбины", "Страпелька", "Боливария", "Status Quo" ],
            new Tour(
                2,
                "A", [
                new Result("МИД-2", 18),
                new Result("Нехорошая квартира", 17),
                new Result("Одушевленные аэросани", 16),
                new Result("Хронически разумные United", 14),
                new Result("Енотики-7", 14),
                new Result("Не вопрос", 14),
                new Result("Summa Technologiae", 13),
                new Result("Хрустальная сова", 13),
                new Result("Имитируем сарказм", 13),
                new Result("Любовь Каксон", 13),
                new Result("Middle", 12),
                new Result("Ять", 12),
                new Result("Хаджипирьях", 12),
                new Result("Эталон этанола", 12),
                new Result("Умник", 11),
                new Result("Zемляне", 11),
                new Result("Грумис", 11),
                new Result("Артефакт", 10),
                new Result("Саветум", 10),
                new Result("IX-XI", 10),
                new Result("Ыбырвалг", 10),
                new Result("Невкусный тюлень", 10),
                new Result("Злые белки", 9),
                new Result("New-реанимация", 9),
                new Result("АМО-натюрлих", 9),
                new Result("Дятлы", 9),
                new Result("Кефирные грибки", 8),
                new Result("Ad astra", 8),
                new Result("Конь-буквоед", 8),
                new Result("Канада", 8),
                new Result("Утечка мозгов", 7),
                new Result("Джоизация", 7),
                new Result("Кеша", 7),
                new Result("МаФи", 7),
                new Result("Фламандский лев", 6),
                new Result("Рухавiк", 6),
                new Result("Эйфью", 5),
                new Result("Стальная ложка", 4)
                ]),
            new Tour(
                2, 
                "B", [
                new Result("Канада", 21),
                new Result("Хрустальная сова", 19),
                new Result("Конь-буквоед", 19),
                new Result("Фламандский лев", 19),
                new Result("Хаджипирьях", 19),
                new Result("Стальная ложка", 19),
                new Result("Невкусный тюлень", 18),
                new Result("Фиаско штурвалу", 18),
                new Result("Мулен руж", 18),
                new Result("ХЗИВ", 17),
                new Result("Пиромане", 17),
                new Result("Слёзы Мичурина", 17),
                new Result("Министерство правды", 16),
                new Result("Delta Force", 16),
                new Result("EcoSapiens", 16),
                new Result("Mario Brazzers", 16),
                new Result("Холодец", 16),
                new Result("Йоужики", 16),
                new Result("Дзета", 15),
                new Result("ХТТ", 15),
                new Result("Прыгай в коляску", 15),
                new Result("Дети филфака", 15),
                new Result("Lieben Bier", 15),
                new Result("К слону не прислоняться", 14),
                new Result("Сасаки", 14),
                new Result("Дарвин и утконос", 14),
                new Result("Шезлонг", 14),
                new Result("Марка", 13),
                new Result("Aspers", 13),
                new Result("С блэк джеком", 13),
                new Result("Жесткое женское доминирование", 12),
                new Result("Ultima Ratio", 12),
                new Result("Аматары амарэта", 12),
                new Result("317 кВт", 12),
                new Result("Мамонтлошечка", 12),
                new Result("Аццкий пепелац", 12),
                new Result("Принцесса Зига", 11),
                new Result("Brabeum", 11),
                new Result("Падшие редуцированные", 10),
                new Result("Баррикадное мышление", 10),
                new Result("Карл Клару", 9),
                new Result("А бао а ку", 8),
                new Result("Hava Nagila", 7)
                ])),
        new CommonTour(
            3,
            ["Одушевленные аэросани", "Эйфью", "Кеша", "Хронически разумные United", "Енотики-7", "Утечка мозгов"],
            new Tour(
                3, 
                "A", [
                new Result("МИД-2", 25),
                new Result("Summa Technologiae", 25),
                new Result("Middle", 23),
                new Result("IX-XI", 21),
                new Result("Не вопрос", 20),
                new Result("Zемляне", 19),
                new Result("Страпелька", 19),
                new Result("Злые белки", 19),
                new Result("Ять", 19),
                new Result("Саветум", 19),
                new Result("МаФи", 19),
                new Result("Артефакт", 18),
                new Result("Канада", 18),
                new Result("Пиромане", 18),
                new Result("Боливария", 18),
                new Result("Умник", 17),
                new Result("Фунтики", 17),
                new Result("Нехорошая квартира", 16),
                new Result("Хунвейбины", 16),
                new Result("New-реанимация", 16),
                new Result("Любовь Каксон", 15),
                new Result("Эталон этанола", 15),
                new Result("Хаджипирьях", 15),
                new Result("Дети филфака", 14),
                new Result("Дятлы", 14),
                new Result("Грумис", 14),
                new Result("Ad astra", 14),
                new Result("Плинтус", 14),
                new Result("Status Quo", 14),
                new Result("Невкусный тюлень", 12),
                new Result("Рухавiк", 12),
                new Result("Конь-буквоед", 12),
                new Result("Кефирные грибки", 11),
                new Result("Имитируем сарказм", 11),
                new Result("АМО-натюрлих", 11),
                new Result("Ыбырвалг", 10),
                new Result("Хрустальная сова", 8)
                ]),
           new Tour(
                3, 
                "B", [
                new Result("Хунвейбины", 32),
                new Result("МаФи", 30),
                new Result("Пиромане", 29),
                new Result("Рухавiк", 28),
                new Result("Дети филфака", 26),
                new Result("ХЗИВ", 25),
                new Result("Йоужики", 25),
                new Result("Че", 25),
                new Result("Марка", 24),
                new Result("Lieben Bier", 24),
                new Result("С блэк джеком", 24),
                new Result("Холодец", 24),
                new Result("Джоизация", 23),
                new Result("Мулен Руж", 22),
                new Result("Слёзы Мичурина", 21),
                new Result("Баррикадное мышление", 21),
                new Result("Министерство правды", 21),
                new Result("EcoSapiens", 20),
                new Result("К слону не прислоняться", 19),
                new Result("Мамонтлошечка", 19),
                new Result("Фиаско штурвалу", 19),
                new Result("Падшие редуцированные", 18),
                new Result("Прыгай в коляску", 18),
                new Result("Brabeum", 18),
                new Result("Hava Nagila", 17),
                new Result("Сасаки", 17),
                new Result("Скупая слеза на бородатой щеке", 17),
                new Result("Delta Force", 17),
                new Result("Mario Brazzers", 16),
                new Result("Дарвин и утконос", 16),
                new Result("ХТТ", 16),
                new Result("Карл Клару", 16),
                new Result("Аццкий пепелац", 16),
                new Result("Штабъ", 15),
                new Result("Альфа-минимум", 15),
                new Result("317 кВт", 13),
                new Result("Аматары амарэта", 13),
                new Result("Фламандский лев", 12),
                new Result("Принцесса Зига", 12),
                new Result("Ultima Ratio", 12),
                new Result("Жесткое женское доминирование", 10),
                new Result("ЛОМ", 6),
                ])),
    new CommonTour(
        4,
       [ "Не вопрос", "Пиромане", "Хаджипирьях", "Умник", "Ять", "Джоизация" ],
       new Tour(
           4,
           "A", [
            new Result("МИД-2", 26),
            new Result("Middle", 23),
            new Result("Одушевленные аэросани", 22),
            new Result("Енотики-7", 21),
            new Result("IX-XI", 19),
            new Result("Summa Technologiae", 19),
            new Result("Любовь Каксон", 18),
            new Result("New-реанимация", 18),
            new Result("Боливария", 17),
            new Result("МаФи", 17),
            new Result("Фунтики", 17),
            new Result("Хронически разумные United", 17),
            new Result("Саветум", 16),
            new Result("Мулен Руж", 16),
            new Result("Нехорошая квартира", 16),
            new Result("Ыбырвалг", 15),
            new Result("Имитируем сарказм", 15),
            new Result("Конь-буквоед", 15),
            new Result("Страпелька", 15),
            new Result("Кефирные грибки", 14),
            new Result("Грумис", 14),
            new Result("Эталон этанола", 14),
            new Result("Ad astra", 14),
            new Result("Невкусный тюлень", 14),
            new Result("Канада", 14),
            new Result("Status Quo", 13),
            new Result("Хунвейбины", 13),
            new Result("Zемляне", 13),
            new Result("Дятлы", 13),
            new Result("Злые белки", 13),
            new Result("Утечка мозгов", 13),
            new Result("Плинтус", 12),
            new Result("Эйфью", 12),
            new Result("Дети филфака", 12),
            new Result("Рухавiк", 9),
            new Result("Артефакт", 7),
            new Result("АМО-натюрлих", 0)
            ]),
        new Tour(
            4, 
            "B", [
            new Result("Кефирные грибки", 21),
            new Result("Ыбырвалг", 20),
            new Result("Мулен Руж", 19),
            new Result("Имитируем сарказм", 19),
            new Result("Эйфью", 18),
            new Result("АМО-натюрлих", 18),
            new Result("С блэк джеком", 16),
            new Result("ХТТ", 16),
            new Result("ХЗИВ", 15),
            new Result("Йоужики", 15),
            new Result("Баррикадное мышление", 14),
            new Result("К слону не прислоняться", 13),
            new Result("Марка", 13),
            new Result("Хрустальная сова", 13),
            new Result("Мамонтлошечка", 13),
            new Result("Delta Force", 12),
            new Result("Невкусный тюлень", 12),
            new Result("Министерство правды", 12),
            new Result("317 кВт", 12),
            new Result("Параболоид", 9),
            new Result("Дарвин и утконос", 9),
            new Result("Фламандский лев", 9),
            new Result("Brabeum", 9),
            new Result("Слёзы Мичурина", 9),
            new Result("EcoSapiens", 8),
            new Result("Аматары амарэта", 7),
            new Result("Aspers", 7),
            new Result("Шезлонг", 6),
            new Result("Скупая слеза на бородатой щеке", 6),
            new Result("Падшие редуцированные", 3)
            ]))
];

var tourCount = tours.length;