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
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: `User with ${id} not found.` });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  describe('Get the user`s name', () => {
    describe('If the user exists', () => {
      it('returns a name', async () => {
        expect.assertions(1);
        const testUser = await getUserName(4);
        expect(testUser).toEqual('Mark');
      });
    });

    describe('if the user does not exists', () => {
      it('returns an error', async () => {
        expect.assertions(1);
        try {
          await getUserName(1);
        } catch (error) {
          expect(error).toEqual({ error: 'User with 1 not found.'});
        }
      });
    });
  });