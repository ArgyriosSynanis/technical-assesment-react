let lastStoredId = 0;

export const evaluationApiMock = (frequency, amount, startDate) => {
  console.log(`[API] evaluation("${frequency}", "${amount}", "${startDate}")`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastStoredId = Math.round(Math.random() * 10000);
      resolve({
        id: lastStoredId,
        illustration: [
          {
            age: 60,
            fundValue: 60000,
            income: 5000,
          },
          {
            age: 61,
            fundValue: 59000,
            income: 5000,
          },
          {
            age: 62,
            fundValue: 58000,
            income: 5000,
          },
          {
            age: 63,
            fundValue: 57000,
            income: 5000,
          },
          {
            age: 64,
            fundValue: 56000,
            income: 5000,
          },
          {
            age: 65,
            fundValue: 55000,
            income: 5000,
          },
          {
            age: 66,
            fundValue: 54000,
            income: 5000,
          },
          {
            age: 67,
            fundValue: 53000,
            income: 5000,
          },
          {
            age: 68,
            fundValue: 52000,
            income: 5000,
          },
        ],
      });
    }, 1000);
  });
};

export const acceptWithdrawalMock = (id) => {
  console.log(`[API] acceptWithdrawal("${id}")`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === lastStoredId) {
        resolve({ valid: true });
      } else {
        resolve({ valid: false });
      }
    }, 1000);
  });
};

export const loginMock = (username, password) => {
  console.log(`[API] login("${username}", "${password}")`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
          const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
      resolve({
        valid: true,
        token,
      });
    }, 1000);
  });
};
