const database = () => {
  const currencyTable = [
    {
      name: 'VND',
      value: 1,
    },
    {
      name: 'USD',
      value: 0.000044,
    },
    {
      name: 'EURO',
      value: 0.000038,
    },
    {
      name: 'JPY',
      value: 0.0048,
    },
    {
      name: 'CNY',
      value: 0.00028,
    },
    {
      name: 'KRW',
      value: 0.052,
    },
    {
      name: 'RUB',
      value: 0.0032,
    },
    {
      name: 'GBF',
      value: 0.000032,
    },
  ];

  const getCurrencyList = () => {
    return currencyTable.map(item => item.name); 
  }

  const convert = (from, to, value) => {
    const rate = currencyTable.find(item => item.name === from).value / currencyTable.find(item => item.name === to).value;
    return Math.round(value/rate) + " " + to;
  }

  return {getCurrencyList, convert}
}


export default database; 