const ItemWithId = require('./item-with-id').default;

test('check ID', () => {
    expect(new ItemWithId().id)
        .toBeTruthy();
});
