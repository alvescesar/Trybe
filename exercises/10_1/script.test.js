// exercise_01
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('text should be all uppercase', async () => {
  await uppercase('maglibodina', (string) => {
    expect(string).toBe('MAGLIBODINA');
  });
});

// exercise_02
