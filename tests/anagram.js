'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

    QUnit.test('Игнорирование регистра', function (assert) {
        const input = [
            'Кот', 'Пила', 'БароКко',
            'сТоП', 'Ток', 'кошка',
            'липа', 'коробка', 'пост'
        ];

        const output = [
            [ 'БароКко', 'коробка' ],
            [ 'Кот', 'Ток' ],
            [ 'Пила', 'липа' ],
            [ 'пост', 'сТоП' ]
        ];

        assert.deepEqual(anagram(input), output);
    });

    QUnit.test('Пустой ответ (нет анаграмм)', function (assert) {
        const input = [
            'кот', 'пила', 'барокко',
            'стоп', 'кошка'
        ];

        const output = [];

        assert.deepEqual(anagram(input), output);
    });

    QUnit.test('Некорректные входные данные', function (assert) {
        const input = "not array";

        const output = undefined;

        assert.deepEqual(anagram(input), output);
    });
});
