import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional params', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with modes', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with one falsy mode', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with one undefined mode', () => {
        const expected = 'someClass class1 class2 hovered focused';
        expect(classNames(
            'someClass',
            {
                hovered: true, scrollable: undefined, focused: true, blured: false,
            },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
